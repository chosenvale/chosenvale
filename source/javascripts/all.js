//= require jquery
//= require bootstrap
//= require_tree .

!function ($) {

  $(function(){

    // Activate all tooltip links
    $('a[rel="tooltip"]').tooltip();

    // Activate all buttons
    $('div.btn-group').button();

    // affix sub nav on scroll
    var $win = $(window)
      , $nav = $('.subnav')
      , navTop = $('.subnav').length && $('.subnav').offset().top - 60
      , isFixed = 0

    processScroll()

    $win.on('scroll', processScroll)

    function processScroll() {
      var i, scrollTop = $win.scrollTop()
      if (scrollTop >= navTop && !isFixed) {
        isFixed = 1
        $nav.addClass('subnav-fixed')
      } else if (scrollTop <= navTop && isFixed) {
        isFixed = 0
        $nav.removeClass('subnav-fixed')
      }
    }

  })

}(window.jQuery)
