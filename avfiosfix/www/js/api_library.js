//Geolocation API Section
//loadGeo function is being called from the body tag as an onload
//Getting the current position of the actual device
	console.log("lib");
	var loadGeo = function () {
		alert("loadGeo");
		
	}
//When the position is received, it triggers the onSuccess
	var onSuccess = function (position) {
		alert("Success");
        var geoTxt = document.getElementById('geoTextSuccess');
//To display the map with the current location
		var geoMapFunc = function () {
			var map = document.getElementById('googleMapView');
			var latitLong = geoStats.latit[1] + "," + geoStats.longi[1];
			var img_url="http://maps.googleapis.com/maps/api/staticmap?center=" + latitLong + "&zoom=14&size=400x300&sensor=false";
			map.innerHTML="<img src='"+img_url+"'>";
		};
//Created an object array containing all the coordinates
		var	geoStats = {};
			geoStats.latit   = ["Latitude:", position.coords.latitude];
			geoStats.longi   = ["longitude:", position.coords.longitude];
			geoStats.alti    = ["Altitude:", position.coords.altitude];
			geoStats.acc     = ["Accuracy:", position.coords.accuracy];
			geoStats.altAcc  = ["Altitude Accuracy:", position.coords.altitudeAccuracy];
			geoStats.head    = ["Heading:", position.coords.heading];
			geoStats.sped    = ["Speed:", position.coords.speed];
			geoStats.timStp  = ["Timestamp:", position.timestamp];
			console.log(geoStats.latit);
//Inserting all the datat into the html doc
		geoTxt.innerHTML = '<ul><li>' + geoStats.latit[0] + " " + geoStats.latit[1] + '</li>' +
								'<li>' + geoStats.longi[0] + " " + geoStats.longi[1] + '</li>' +
								'<li>' + geoStats.alti[0] + " " + geoStats.alti[1] + '</li>' +
								'<li>' + geoStats.acc[0] + " " + geoStats.acc[1] + '</li>' +
								'<li>' + geoStats.altAcc[0] + " " + geoStats.altAcc[1] + '</li>' +
								'<li>' + geoStats.head[0] + " " + geoStats.head[1] + '</li>' +
								'<li>' + geoStats.sped[0] + " " + geoStats.sped[1] + '</li>' +
								'<li>' + geoStats.timStp[0] + " " + geoStats.timStp[1] + '</li>' +
							'</ul>';
		
		geoMapFunc();
	}
// onError Callback receives a PositionError object
    var onError = function (error) {
		var errorTxt = document.getElementById('geoTextError');
		errorTxt.innerHTML = '<ul><li>code: ' + " " + error.code + '</li>' +
                '<li>message: ' + error.message + '</li>' + '</ul>';
    };
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
//Compass API Section
var onCompLoad = function(){
alert("onload");
	var onSuccess = function (heading) {
	alert("SuccessCOMp");
		var compassTxt = document.getElementById('compassText');
		compassText.innerHTML = '<ul><li>' + heading.magneticHeading + '</li></ul>';
	    
	};

	function onError(error) {
	    alert('CompassError: ' + error.code);
	};

	navigator.compass.getCurrentHeading(onSuccess, onError);
};
//Contacts
function onContLoad() {
	alert("contatcs");
		var contactsLk = document.getElementById('contactsText');
        var myContact = navigator.contacts.create({"displayName": "Test User"});
        myContact.note = "This contact has a note.";
		alert(myContact.note[0] +  ", " + myContact.note[1]);
		contactsLk.innerHTML = '<ul><li>' + myContact + '</ul></li>';
        console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
    }
//Camera access
var accessCamera = function(){
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
	    destinationType: Camera.DestinationType.FILE_URI,
	    targetWidth: 250,
	    targetHeight: 450}); 

	function onSuccess(imageURI) {
	    localStorage.setItem("photourl",imageURI);
	    displayImage();
	}

	function onFail(message) {
	    alert('Failed because: ' + message);
	}
};
//Twitter API Section
//var loadTwitter = function () {
    //alert("twt");
    if ($("#twtLink").click()) {
    $(function () {
        $.getJSON("http://search.twitter.com/search.json?q=class&schedule&include_entities=true&callback=?",
        function(data) {
            console.log(data);
           // alert("funTwt");
            //alert(data.completed_in);
            
            $("#data-msg").html("<p>Data Success</p>");
            for (var i=0, j=data.results.length; i<j; i++) {
                $("#twetData").append("<li>" + "<p>" + "<img src='" + data.results[i].profile_image_url + "' />" + "<br />" + data.results[i].text + ", <em>" + data.results[i].created_at + "</em>" + "</p>" + "</li>");
            }
            /*var getJSONTwt = document.getElementById("getJSON");
            getJSONTwt.innerHTML = "<ul><li>Twitter Info</li></ul>";
            //$("#getJSON").html("<p>Info Fetched</p>");
            for (i=0, j=data.results.length; i<j; i++) {
                getJSONTwt.append("<img src='" + data.results[i].profile_image_url + "' />" + "<p>" + data.results[i].from_user + "</p>" + "<p>" + data.results[i].text + "</p>" + "<br />");
            }*/
        });
    });
	}
//Facebook API Section
//alert("facebkLink");
    if ($("#facebkLink").click()) {
	 alert("funFacebk1");
    $(function () {
	 alert("funFacebk2");
        $.getJSON("https://graph.facebook.com/search?q=courses",
        function(dataFacebk) {
            console.log(dataFacebk);
            alert("funFacebk3");
            //alert(dataFacebk.completed_in);
            
            $("#data-msg-facbk").html("<p>Data Success</p>");
            for (var f=0, b=dataFacebk.data.length; f<b; f++) {
                $("#facbkData").append("<li>" + "<p id='fBkTxt'>" + "<img src='" + dataFacebk.data[f].picture + "' />" + "<br />" + dataFacebk.data[f].from.name + "<br />" + dataFacebk.data[f].message + ", <em>" + dataFacebk.data[f].updated_time + "</em>" + "</p>" + "</li>");
            }
            /*var getJSONTwt = document.getElementById("getJSON");
            getJSONTwt.innerHTML = "<ul><li>Twitter Info</li></ul>";
            //$("#getJSON").html("<p>Info Fetched</p>");
            for (i=0, j=data.results.length; i<j; i++) {
                getJSONTwt.append("<img src='" + data.results[i].profile_image_url + "' />" + "<p>" + data.results[i].from_user + "</p>" + "<p>" + data.results[i].text + "</p>" + "<br />");
            }*/
        });
    });
	}
//};

//};

