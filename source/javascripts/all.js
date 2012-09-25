//= require jquery
//= require bootstrap
//= require_tree .

!function ($) {

  $(function(){

    // Activate all tooltip links
    $('a[rel="tooltip"]').tooltip();

    // Activate all buttons
    $('div.btn-group').button();

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


    $('#active-application').find('.btn').bind('click', function(event) {
      if ( $(this).attr('id') === 'trumpet' ) {
        $('section#trumpet-application').removeClass('hidden');
        $('section#percussion-application').addClass('hidden');         
      } else if ( $(this).attr('id') === 'percussion' ) {
        $('section#trumpet-application').addClass('hidden');         
        $('section#percussion-application').removeClass('hidden');    
      }
    })


  })

}(window.jQuery)
