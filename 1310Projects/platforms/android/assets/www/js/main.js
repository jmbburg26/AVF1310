$('#submit').on('click', function (){
    storeData();
    console.log(searchTag);
});

//Function to get the user search term from search field
var storeData = function (key){
    if(!key){
            var userValues      = Math.floor(Math.random()*100000001);
        }else{
            userValues = key;
        }
      
    var key    = Math.floor(Math.random()*100000001);

    var	searchTag = $('#searchtag').val();

    localStorage.setItem(key, JSON.stringify(searchTag));
    //console.log(searchTag);
    return searchTag
};

var searchResults = $(function(searchTag){

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