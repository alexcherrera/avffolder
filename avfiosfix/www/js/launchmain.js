console.log("main");

    document.addEventListener("deviceready", DeviceReady, false);
function onDeviceReady () {

//Geolocation API Section
	$("#geoLink").on("click", function () {
		alert("hello2");
		loadGeo();
	});
//Compass API Section
	$("#compassLink").on("click", function () {
		alert("hello1");
		onCompLoad();
	});
//Contacts API Section
	$("#contLink").on("click", function () {
		alert("contactLnkhome");
		onContLoad();
	});
	
//Twitter API Section
	$("#twtLink").on("click", function () {
		alert("Twitter");
		//loadTwitter();
		//twtJson();
	});
//Facebook API Section
	$("#facebkLink").on("click", function () {
		alert("facebkLink");
		//loadTwitter();
		//twtJson();
	});
	
}

onDeviceReady();
//document.addEventListener("deviceready", onDeviceReady, false);