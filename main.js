$(document).ready(function() {
	var source = $("#cds-template").html();
    var musicTemplate = Handlebars.compile(source);


	$.ajax({
		url:"https://flynn.boolean.careers/exercises/api/array/music",
		method: "GET",
		success: function(data) {
			var playList = data.response;
			for (var i = 0; i < playList.length; i++) {
				var music = playList[i];
				var playlistTemplate = {
                    coverAlbum: music.poster,
                    album: music.title,
                    singer: music.author,
                    year: music.year
                    // genere: album.genre
			    }

				var cardAlbum = musicTemplate(playlistTemplate);
                $('.container1').append(cardAlbum);
			}

		},

		error: function () {
            alert('non va');
        }

	})







});
