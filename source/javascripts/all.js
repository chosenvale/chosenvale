//= require jquery
//= require bootstrap
//= require_tree ./pages

!function ($) {

  $(function(){

    // bugfix: IE doesn't preload display:none images
    // see http://stackoverflow.com/questions/476679/preloading-images-with-jquery
    function iePreload(arrayOfImageTags) {
      $(arrayOfImageTags).each(function(){
        src = $(this).attr('src')
        $('<img/>')[0].src = src;
      });
    }
    var $mainCarouselImages = $('div#main-carousel div.carousel-inner div.item img');
    iePreload($mainCarouselImages);

    // Activate all tooltip links
    $('a[rel="tooltip"]').click(function(e) { e.preventDefault() } );
    $('a[rel="tooltip"]').tooltip();

    // Trigger subnav affix with custom offset:
    //  - Main menu sticky on desktop but not on tablet
    var $subnav = $('.subnav')
    if ($subnav.length) {
      var $offset = $subnav.offset().top
        , $offmin = $offset - $('.navbar').height()
      $subnav.affix({
        offset: {
          top: function () {
            return $(window).width() > 890 ? $offmin : $offmin+$('.navbar').height()
          }
        }
      })
      // event handler for subnav scrolling
      var offset = 102
      $subnav.find('li a').click(function(event) {
        event.preventDefault();
        $($(this).attr('href'))[0].scrollIntoView();
        scrollBy(0, -offset);
      });
    }


    // Activate all buttons
    $('div.btn-group').button();

    // Toggle Trumpet/Percussion forms.
    $('div.btn-group#active-application').find('.btn').bind('click', function(event) {
      if ( $(this).attr('id') === 'trumpet' ) {
        $('#trumpet-application').removeClass('hidden');
        $('#percussion-application').addClass('hidden');
      } else if ( $(this).attr('id') === 'percussion' ) {
        $('#trumpet-application').addClass('hidden');
        $('#percussion-application').removeClass('hidden');
      }
    })

    // Toggle Colin Currie Scholarship extra fields.
    $('div.btn-group#scholarship').find('.btn').bind('click', function(event) {
      if ( $(this).attr('id') === 'yes' ) {
        $('div#scholarship-extra').removeClass('hidden');
        event.preventDefault();
      } else if ( $(this).attr('id') === 'no' ) {
        $('div#scholarship-extra').addClass('hidden');
        event.preventDefault();
      }
    })

  })

}(window.jQuery)

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35699266-1']);
_gaq.push(['_setSiteSpeedSampleRate', 100]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


// luckyorange.com tracking code
var __wtw_lucky_ref_id = 813583;
var __wtw_lucky_setup_key = {};
__wtw_lucky_setup_key.id = '8743';
__wtw_lucky_setup_key.key = 'TjPVmnKAK9AQYyKRDhE8aZRpvmWvzXrJ';

  (function() {
    var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
    wa.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://ca340059') + '.luckyorange.com/w.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
    })();
