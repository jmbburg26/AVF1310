//Function to get the user search term from search field
var storeData = function(){

		var	searchTag = $('#searchtag').val();

		var url = "https://api.instagram.com/v1/media/" + searchtag + "?lat=48.858844&lng=2.294351&?access_token=47395760.f59def8.0c2a11ced6a74f0bb5088750077bf5a7";
		
		console.log(url);

	var screenOutput = function(info){

		alert("Search Complete");
		console.log(info);

		$("#data-msg").html("<h2>Search results:</h2>");

		$.each(info.data, function(index, photo){
			var searchPic = "<li><img src=" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + ", <em>(" + photo.user.username +")</em></h4></li>";

			$("#data-output").append(searchPic);
		});
	};
    $.getJSON(url, screenOutput());
};


$('#submit').on('click', function(){
    storeData();
});