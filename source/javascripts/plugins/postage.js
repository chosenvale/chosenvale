$(document).ready(function(){

  // Permit form data to be converted to json
  $.fn.serializeFormJSON = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };

  // Show correct transmission state
  $.fn.postageState = function($state) {
    $viewState = {}
    $container = this.closest('.postage');

    $viewState['ready']    = $container.find('.ready');
    $viewState['sending']  = $container.find('.sending');
    $viewState['sent']     = $container.find('.sent');
    $viewState['failure']  = $container.find('.failure');

    $.each($viewState, function(stateString, stateContainer) {
      if (stateString == $state) {
        // console.log('Showing .'+stateString+'.');
        stateContainer.removeClass('hidden');
      } else {
        // console.log('Hiding .'+stateString+'.')        
        stateContainer.addClass('hidden');
      }
    });
  }

  $.fn.sendWithPostage = function() {
    $form = $(this);
    if ( $form.valid() ) {
      var data = $form.serializeFormJSON();
      var url = 'http://entio-postage.herokuapp.com/messages/send.json?callback=?';
      $form.postageState('sending');
      $.ajax({
        type: 'POST',
        url: url,
        async: false,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        data: data,
        success: function(json) {
          console.log(json);
          $form.postageState('sent');
          // $form.find(':input').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
          $form.validate().resetForm();
        },
        error: function(e) {
          console.log(e.message);
          $form.postageState('failure');
        }
      });      
    }
  }

  // Always allow users to return to the "ready" state
  $('button.show-contact-form').bind('click', function(event) {
    $(this).postageState('ready');
  });

});
