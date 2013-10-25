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