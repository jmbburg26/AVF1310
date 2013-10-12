$('#submit').on('click', function(){
 	var	searchTag = $('#searchtag').val();
		//var tag = "kittens";
		console.log(searchTag);
		
		var url = "https://api.instagram.com/v1/tags/" + searchTag + "/media/recent?callback=?&amp;client_id=fc637f7a1bd04468be5f4fd4bbbea550&amp;min_id=5";
		
		console.log(url);

		$.getJSON(url, screenOutput);
});

var screenOutput = function(info){

		alert("Search Complete");
		console.log(info);

		$("#data-msg").html("<h2>Search results:</h2>");

		$.each(info.data, function(index, photo){
			var pic = "<li><img src=" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + ", <em>(" + photo.user.username +")</em></h4></li>";

			$("#data-output").append(pic);
		});
};

