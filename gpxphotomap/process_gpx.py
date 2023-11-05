import os
from datetime import datetime

import gpxpy
import pytz
from PIL import Image
from PIL.ExifTags import TAGS

# Show all timezones in a dropdown
all_timezones = pytz.all_timezones

# Templates to build the gps.js file with
template_top = """function initialize() { 

    var points = []; 

"""

template_mid = """
    map = new google.maps.Map( 
        document.getElementById('map_canvas'), {{ 
        center: points[0], 
        zoom: 15 
    }}); 

    var polyline = new google.maps.Polyline({{ 
        path: points, 
        strokeColor: '#ff3c3b', 
        strokeOpacity: 1.0, 
        strokeWeight: 5 
    }}); 

    polyline.setMap(map); 

    album = '{album}'; 
"""

template_bottom = """
    map.center = markerAr[0].position; 
    markerAr[0].openInfo(); 
} 
"""

template_img = """
    latlng = new google.maps.LatLng({lat}, {lon}); 
    new google.maps.Marker(createMarker(latlng, {elev}, "{time}", "{file}")); 
"""


class Photo:
    """Stores time and name with each photo"""

    def __init__(self, file, datetime_string, timezone):
        self.file = file

        # TODO: get timezone from GPX location using timezonefinder, once h3 is updated for Python 3.12
        # https://github.com/uber/h3-py/issues/326

        # Convert time string coming from EXIF into a time object
        datetime_object = datetime.strptime(datetime_string, '%Y:%m:%d %H:%M:%S')
        self.time = pytz.timezone(timezone).localize(datetime_object)


def lerp(a, b, t):
    """Interpolate between two values"""

    return a + t * (b - a)


def extract_exif(folder_path, timezone):
    """
    Extracts 'DateTimeOriginal' from all photos in a folder

    Args:
        folder_path (str): Location of all photos
        timezone (str): Time zone to which the photos should be converted to, based on the GPX track
    """

    photos = []

    # Find all JPG photos
    for filename in os.listdir(folder_path):
        if filename.lower().endswith('.jpg'):
            file_path = os.path.join(folder_path, filename)

            if os.path.isfile(file_path):
                try:
                    # Extract EXIF
                    with Image.open(file_path) as img:
                        exif_data = img._getexif()

                        if exif_data:
                            for tag, tag_value in exif_data.items():
                                tag_name = TAGS.get(tag)
                                # Extract DateTimeOriginal
                                if tag_name == 'DateTimeOriginal':
                                    photo = Photo(filename, tag_value, timezone)
                                    photos.append(photo)

                        else:
                            print(f'Missing EXIF: {filename}')

                except (AttributeError, KeyError, IndexError) as e:
                    print(f'EXIF Error: {e}')

    return photos


def process_gpx(gpx_file, imgs_dir, file_out, gpx_timezone):
    """
    Generates a JS file that renders a Google Map with the input photos on the input track

    Args:
        gpx_file (str): Path to the GPX file
        imgs_dir (str): Path to the folder with JPG photos
        file_out (str): Path to the output JS file
        gpx_timezone (str): Timezone of the GPX track
    """

    points = []

    # Store album name (parent of JPEG folder)
    album = f'{os.path.basename(os.path.dirname(imgs_dir)).lower()}'

    # Parse GPX file
    with open(gpx_file, 'r') as gpx_file_io:
        gpx = gpxpy.parse(gpx_file_io)

    # Start generating gps.js
    with open(file_out, 'w') as file_out_io:
        file_out_io.write(template_top)

        # Write all points
        for track in gpx.tracks:
            for segment in track.segments:
                for point in segment.points:
                    points.append(point)
                    file_out_io.write(
                        f'    points.push(new google.maps.LatLng({point.latitude}, {point.longitude}));\n'
                    )

        file_out_io.write(template_mid.format(album=album))

    # Get all photos and their time
    photos = extract_exif(imgs_dir, gpx_timezone)

    # Sort photos by time (when time doesn't match file name order)
    photos_sorted = sorted(photos, key=lambda x: x.time)

    # Compare each photo's time against all track points
    for photo in photos_sorted:
        # Find two track points before and after photo time
        if points[0].time < photo.time < points[-1].time:
            for point in points:
                if point.time <= photo.time:
                    before_time = point.time
                    before_lat = point.latitude
                    before_lon = point.longitude
                    before_elev = point.elevation
                else:
                    after_time = point.time
                    after_lat = point.latitude
                    after_lon = point.longitude
                    after_elev = point.elevation
                    break

            # Find the ratio between the two points where the photo lies
            blend = (photo.time - before_time) / (after_time - before_time)

            # Blend photo's position and elevation based on ratio
            location_lat = lerp(before_lat, after_lat, blend)
            location_lon = lerp(before_lon, after_lon, blend)
            elevation = round(lerp(before_elev, after_elev, blend))

            # Write photo marker to gps.js
            with open(file_out, 'a') as file_out_io:
                file_out_io.write(
                    template_img.format(
                        lat=location_lat,
                        lon=location_lon,
                        elev=elevation,
                        time=photo.time.replace(tzinfo=None),
                        file=photo.file,
                    )
                )

        else:
            # Photo is not between any track points
            with open(file_out, 'a') as file_out_io:
                file_out_io.write(f'\n    // {photo.file} not on track\n')

    # Close gps.js file
    with open(file_out, 'a') as file_out_io:
        file_out_io.write(template_bottom)
