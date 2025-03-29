# GPX Photo Map
Synchronizes photos with a GPX track based on their time stamp, then creates a Google Map with thumbnail markers for each photo to see where exactly they were taken.

![GPX Photo Map](https://velebny.net/thumbs/gpx_photo_map.jpg)

See more at [velebny.net](https://velebny.net/gpx_photo_map.html)

## Notes
To display the resulting Google Map on your website, you will need to provide your own [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key)
- You have to edit `map.html`, find the line with `https://maps.googleapis.com/maps/api/js?key=` and insert your own key after `=`

## TODO
- Improve handling of Google Maps API key
- Create an installer
