   $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
	
	function toggleSong(){
	  var song = document.querySelector('audio');
        if (song.paused == true) {
            console.log('Playing');
            $('.play-icon').removeClass('fa-play').addClass('fa-pause');
            song.play();
        } else {
            console.log('Pausing');
            $('.play-icon').removeClass('fa-pause').addClass('fa-play');
            song.pause();
        }
	}
    $('.play-icon').on('click', function() {
      toggleSong();
    });
    $('body').on('keypress', function(event) {
                if (event.keyCode == 32) {
                    toggleSong();
                }
            });
			
function updateCurrentTime(){
var song=document.querySelector('audio');
var duration=Math.floor(song.duration);
duration=fancyTimeFormat(duration);
$('.song-duration').text(duration);

var currentTime=Math.floor(song.currentTime);
currentTime=fancyTimeFormat(currentTime);
$('.time-elapsed').text(currentTime);
}
var songs = [{
        'name': 'Rolling in the deep',
        'artist': 'Adele',
        'album': '21',
        'duration': '2:56',
       'fileName': 'song1.mp3'
    },
    {
        'name': 'No Promises',
        'artist': 'Shayne Ward',
        'album': '',
        'duration': '3:15',
        'fileName': 'song2.mp3'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3'
    }]


window.onload=function(){
function songclick(songName,position)
{
var songid='#song'+position;
$(songid).click(function() {
var audio = document.querySelector('audio');
var currentSong=audio.src;
if(currentSong.search(songName)!=-1)
{
toggleSong();
}
else{
audio.src =songName;
toggleSong();
}

});
}

 for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        songclick(obj.fileName,i+1)
    }


updateCurrentTime();
setInterval(function(){
updateCurrentTime();
},1000);

}
function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
