//Function to get the user search term from search field
var storeData = function (){
 
    var	searchTag = $('#searchtag').val();

    console.log(searchTag);
    return searchTag;
};


$('#submit').on('click', function (){
    
});



var searchResults = $(function(searchTag){

	var	searchTag = $('#searchtag').val();

	var url = "https://api.instrgram.com/vl/tags/" + searchTag + "media/recent?callback=?&amp;client_id=xxxxxx";
	
	$.getJSON(url, screenOutput);
});

var screenOutput = function(info){

	alert("Search Complete");
	console.log(info);

	$("#data-mesg").html("<h2>Search results:</h2>");

	$.each(info.data, function(index, photo){
		var searchPic = "<li><img src=" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + ", <em>(" + photo.user.username +")</em></h4></li>";

		$("data-output").append(searchPic);
	});
};