//Code for Native Features

document.addEventListener("deviceready", notiFire, false);
//Notification Call
$('#notification').on('click', function(){
	notiFire();
});

var notiFire = function(){
	document.addEventListener("deviceready", onDeviceReady, false);

	var alertDismissed = function() {
	    // do something
	}


	var onDeviceReady = function() {
		navigator.notification.alert(
		    'Your Notification Worked',  	// message
		    alertDismissed,         		// callback
		    'Notification Test',    		// title
		    ''                  		// buttonName
		);
	};
};
 
//Network Info Call
$('#network').on('click', function(){
	netFire();
});

var netFire = function(){
	document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        checkConnection();
    }

        function checkConnection() {
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';

            alert('Connection type: ' + states[networkState]);
        }
};
 
//Device Info Call
$('#network').on('click', function(){
	netFire();
});

//Code for Instagram API
$('#submit').on('click', function(){
 	var	searchTag = $('#searchtag').val();
		console.log(searchTag);
		event.preventDefault();
		var url = "https://api.instagram.com/v1/tags/" + searchTag + "/media/recent?callback=?&amp;client_id=fc637f7a1bd04468be5f4fd4bbbea550&amp;min_id=10";
		console.log(url);
		
		$.getJSON(url, screenOutput);
});

var screenOutput = function(info){

		alert("Search Complete");
		console.log(info);

		$("#data-msg").html("<h2>Search results:</h2>");

		$.each(info.data, function(index, photo){
			var pic = "<li><img src='" + photo.images.low_resolution.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + ", <em>(" + photo.user.username +")</em></h4></li>'";

			$("#data-output").append(pic);
		});
};



$('#news').on('pageinit', function(){
        
        //Code for USA Today
		$(function(){
				var url = "http://api.usatoday.com/open/articles/mobile/topnews?api_key=rafzauu4bcfd33yg379mjn9e";
				console.log(url);

				$.getJSON(url, screenOutput);
		});

		var screenOutput = function(info){

				alert("Done Loading");
				console.log(info);

				$("#data-msg").html("<h2>Top Stories:</h2>");

				$.each(info.data, function(index, photo){
					var news = "<li><img src=" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + ", <em>(" + photo.user.username +")</em></h4></li>";

					$("#news-output").append(news);
				});
		};
});