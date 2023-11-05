urlParams = new URLSearchParams(window.location.search);
albumLocal = urlParams.get('dir');

var markerAr = new Array();
var infoWindow = new google.maps.InfoWindow({});

function setMapOptions() {
	map.setMapTypeId("hybrid");
}

function createMarker(point, pointElevation, photoTime, imageFileName) {
	var marker = new google.maps.Marker({
		position: point,
		map: map,
		imageFileName: imageFileName
	});
	
	marker.id = markerAr.length;
	marker.openInfo = function()
	{
		html = '<div class="gmapInfo">';
	 		if ((this.id - 1) >= 0)
	 		{
				prevMarker = markerAr[this.id - 1];
			} else {
				prevMarker = markerAr[markerAr.length - 1];
			}
			html += '<div class="gmapBut gmapButPrev">';
				html += '<a href="javascript:prevMarker.openInfo()"><span class="arrowLeft"></span></a>';
			html += '</div>';
			html += '<div class="gmapInfoText">';
				html += '<div class="gmapInfoImg thumbHighlight">';
				if (albumLocal) 
				{
					html += '<a href="' + albumLocal + '/' + imageFileName + '" target="new">';
					html += '<img src="' + albumLocal + '/' + imageFileName + '">';
				}
				else
				{
					html += '<a href="' + imageFileName + '" target="new">';
					html += '<img src="' + imageFileName + '">';
				}
					html += '</a>';
				html += '</div>';
				html += '<p>' + photoTime + '</p>';
	 			html += '<p>elevation ' + pointElevation + ' m</p>';
			html += '</div>';
			if ((this.id + 1) < markerAr.length)
			{
				nextMarker = markerAr[this.id + 1];
			} else {
				nextMarker = markerAr[0];
			}
			html += '<div class="gmapBut gmapButNext">';
				html += '<a href="javascript:nextMarker.openInfo()"><span class="arrowRight"></span></a>';
			html += '</div>';
		html += '</div>';

		infoWindow.setContent(html);
		infoWindow.open(map, marker);
		
		preloadNextMarkerImg = new Image();
		
		preloadPrevMarkerImg = new Image();
	}
	
	google.maps.event.addListener(marker, "click", function(event) {
		this.openInfo();
	});
	markerAr.push(marker);
}
