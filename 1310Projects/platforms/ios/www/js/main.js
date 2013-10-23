//Code for Native Features
//Notification Call
	document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
    	$("#notificationtest").on('click', notifyTest);
    	$("#networktest").on('click', netTest);
    	$("#getpicture").on('click', getPic);
    	$("#getgeolocation").on('click', getLocation);
    	$("#compasstest").on('click', getCompass);
    }

    function alertDismissed() {
            // do something
    }
    
//Notification Call 
    var notifyTest = function() {
        navigator.notification.alert(
            'AVF 1310 Demo!',  	
            alertDismissed,      
            'Notification Alert', 
            'Clear' 
        );
        navigator.notification.beep(1);
        navigator.notification.vibrate(2000);
    };

	
//Network Status Call

	var netTest = function() {
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

            navigator.notification.alert(
	            'Connection type: ' + states[networkState],  	
	            alertDismissed,      
	            'Connection Alert', 
	            'Clear' 
        	);
        navigator.notification.beep(1);
        navigator.notification.vibrate(2000);
    };

//Camera Call
	var getPic = function(){
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    	destinationType: Camera.DestinationType.DATA_URL
		});

		function onSuccess(imageData) {
		    var image = document.getElementById('myImage');
		    image.src = "data:image/jpeg;base64," + imageData;
		}

		function onFail(message) {
	    	alert('Failed because: ' + message);
		}
	};

// Geolocation Call
	var getLocation = function(){
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
		
		function onSuccess(position) {
	    alert('Latitude: '          + position.coords.latitude          + '\n' +
	          'Longitude: '         + position.coords.longitude         + '\n' +
	          'Timestamp: '         + position.timestamp                + '\n');
		};

		function onError(error) {
		    alert('code: '    + error.code    + '\n' +
		          'message: ' + error.message + '\n');
		}
	}; 



//Compass Call
	var getCompass = function(){
		navigator.compass.getCurrentHeading(onSuccess, onError);
		
		function onSuccess(heading) {
		    alert('Heading: ' + heading.magneticHeading);
		};

		function onError(error) {
		    alert('CompassError: ' + error.code);
		};
	};


//Code for Instagram API
$('#submit').on('click', function(){
    var searchTag = $('#searchtag').val();
        
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
        var pic = "<li><img src='" + photo.images.thumbnail.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + ", <em>(" + photo.user.username +")</em></h4></li>'";

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