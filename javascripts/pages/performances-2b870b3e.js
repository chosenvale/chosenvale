function videoWidth(){return 550}function videoHeight(){return Math.floor(videoWidth()/1.8)}function getVideo(e){$.getScript(oEmbedEndpoint+"?url="+e+"&byline=false&width="+videoWidth()+"&height="+videoHeight()+"&callback="+oEmbedCallback)}function setupGallery(e){var i=$.grep(e,function(e){return 51099433==e.id});getVideo(i[0].url);for(var t=0;t<e.length;t++){var l='<li class="span6"><a href="'+e[t].url+'" class="thumbnail"><img src="'+e[t].thumbnail_small+'" class="thumb" />';l+="<p>"+e[t].title+"</p></a></li>",$("div.related ul.thumbnails").append(l)}$("div.related ul.thumbnails a").click(function(e){return e.preventDefault(),getVideo(this.href),!1})}function switchVideo(e){$(".embed").html(unescape(e.html)),$(".details .title").html(unescape(e.title)),$(".details .description").html(unescape(e.description.replace(/\n/g,"<br />")))}$(document).ready(function(){0!=$("section#video").length&&(console.log("Performances page!"),$.getScript(apiEndpoint+vimeoUsername+"/videos.json?callback="+videosCallback))});var apiEndpoint="http://vimeo.com/api/v2/",oEmbedEndpoint="http://vimeo.com/api/oembed.json",oEmbedCallback="switchVideo",videosCallback="setupGallery",vimeoUsername="user13986449";