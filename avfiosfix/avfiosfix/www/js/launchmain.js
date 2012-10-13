//Geolocation API Section
//loadGeo function is being called from the body tag as an onload
//Getting the current position of the actual device
	function loadGeo () {
		console.log("loadGeo");
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(onSuccess, onError);
		} else {
			alert("error!! Not working");
		}
	}
//When the position is received, it triggers the onSuccess
	function onSuccess(position) {
		console.log("Success");
        var geoTxt = document.getElementById('geoTextSuccess');
	//Created an object array containing all the coordinates
		var	geoStats = {};
			geoStats.latit   = ["Latitude:", position.coords.latitude];
			geoStats.long    = ["longitude:", position.coords.longitude];
			geoStats.alti    = ["Altitude:", position.coords.altitude];
			geoStats.acc     = ["Accuracy:", position.coords.accuracy];
			geoStats.altAcc  = ["Altitude Accuracy:", position.coords.altitudeAccuracy];
			geoStats.head    = ["Heading:", position.coords.heading];
			geoStats.sped    = ["Speed:", position.coords.speed];
			geoStats.timStp  = ["Timestamp:", position.timestamp];
			console.log(geoStats.latit);
	//Inserting all the datat into the html doc
		geoTxt.innerHTML = '<ul><li>' + geoStats.latit[0] + " " + geoStats.latit[1] + '</li>' +
								'<li>' + geoStats.long[0] + " " + geoStats.long[1] + '</li>' +
								'<li>' + geoStats.alti[0] + " " + geoStats.alti[1] + '</li>' +
								'<li>' + geoStats.acc[0] + " " + geoStats.acc[1] + '</li>' +
								'<li>' + geoStats.altAcc[0] + " " + geoStats.altAcc[1] + '</li>' +
								'<li>' + geoStats.head[0] + " " + geoStats.head[1] + '</li>' +
								'<li>' + geoStats.sped[0] + " " + geoStats.sped[1] + '</li>' +
								'<li>' + geoStats.timStp[0] + " " + geoStats.timStp[1] + '</li>' +
							'</ul>';
	//To display the map with the current location
		var geoMapFunc = function () {
			var map = document.getElementById('googleMapView');
			var latitLong = geoStats.latit[1] + "," + geoStats.long[1];
			var img_url="http://maps.googleapis.com/maps/api/staticmap?center=" + latitLong + "&zoom=14&size=400x300&sensor=false";
			map.innerHTML="<img src='"+img_url+"'>";
		}
	//Calling the function to display the map
		geoMapFunc();
		
    }
// onError Callback receives a PositionError object
    function onError(error) {
		var errorTxt = document.getElementById('geoTextError');
		errorTxt.innerHTML = '<ul><li>code: ' + " " + error.code + '</li>' +
                '<li>message: ' + error.message + '</li>' + '</ul>';
    }
//Compass API Section
//loadCompass function is being called from the body tag as an onload
//Getting the direction or heading in which the device is pointing to
//The measurements are in degrees from 0 to 359.99
/*	function loadCompass () {
		console.log("loadComp");
		//document.addEventListener("deviceready", onCompassReady, false);
		var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
	}
	function onSuccess(heading) {
		var compassTxt = document.getElementById('compassText');
		var headDir = heading.magneticHeading;
		console.log(headDir);
		compassTxt.innerHTML = 'The Heading is: ' + headDir;
	}
	function onError(compassError) {
        alert('Compass Error: ' + compassError.code);
    }
	function options (watchID) {
		var frefrequency = 3000;
	}
	function stopWatch() {
        if (watchID) {
            navigator.compass.clearWatch(watchID);
            watchID = null;
        }
    }*/
	//Compass page 
function onCompLoad(){
//    document.addEventListener("deviceready", onCompassReady, false);
//}
// for the heading
var watchID = null;


//Starts watching for direction when loaded
//function onCompassReady() {
    libname.startWatch();
}



// Start watching the compass
function startWatch() {
	// Update compass every 100 ms
    var options = { frequency: 3000 };
	watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}

// Stop watching the compass
function stopWatch() {
    if (watchID) {
        navigator.compass.clearWatch(watchID);
        watchID = null;
    }
}

//Get the current heading
function onSuccess(heading) {
    var element = document.getElementById('compassText');
    element.innerHTML = 'Heading: ' + heading;
}

//Fail
function onError() {
    alert('onError!');
}





