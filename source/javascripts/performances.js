var apiEndpoint = 'http://vimeo.com/api/v2/';
var oEmbedEndpoint = 'http://vimeo.com/api/oembed.json'
var oEmbedCallback = 'switchVideo';
var videosCallback = 'setupGallery';
var vimeoUsername = 'user13986449';

// Get the user's videos
$(document).ready(function() {
  $.getScript(apiEndpoint + vimeoUsername + '/videos.json?callback=' + videosCallback);
});

function videoWidth() {
  // TODO: make responsive
  return 550;
}

function videoHeight() {
  return Math.floor((videoWidth() / 1.8));
}

function getVideo(url) {
  $.getScript(oEmbedEndpoint + '?url=' + url + '&byline=false&width='+ videoWidth() +'&height='+videoHeight()+'&callback=' + oEmbedCallback);
}

function setupGallery(videos) {
  // Load the first video
  getVideo(videos[0].url);

  // Add the videos to the gallery
  for (var i = 0; i < videos.length; i++) {
    var html = '<li><a href="' + videos[i].url + '"><img src="' + videos[i].thumbnail_large + '" class="thumb" />';
    html += '<p>' + videos[i].title + '</p></a></li>';
    $('#thumbs ul').append(html);
  }

  // Switch to the video when a thumbnail is clicked
  $('#thumbs a').click(function(event) {
    event.preventDefault();
    getVideo(this.href);
    return false;
  });

}

function switchVideo(video) {
  $('#embed').html(unescape(video.html));
  $('#details .title').html(unescape(video.title))
  $('#details .description').html(unescape(video.description.replace(/\n/g, '<br />')))
}
