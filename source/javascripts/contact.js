//= require jquery
//= require jquery.validate.js

$(document).ready(function(){

  // This section should only exist on the Contact page.
  var $section = $('section#contact-us');

  // Search children of the relevant section if it exists.
  var $ready   = $section.find('#contact');
  var $sending = $section.find('#sending');
  var $sent    = $section.find('#sent');
  var $failure = $section.find('#failure');

  var $contact_form = $ready.find('form');

  // Declare form validation rules for jquery.validate
  $contact_form.validate({
    rules: {
      "message[from_name]": {
        required: true
      },
      "message[from_email]": {
        required: true,
        email: true
      },
      "message[subject]": {
        required: true
      },
      "message[text]": {
        required: true
      }
    },
    highlight: function(label) {
      $(label).closest('.control-group').addClass('error');
      $(label).closest('.control-group').removeClass('success');
    },
    success: function(label) {
      label
        .text('OK!').addClass('valid')
        .closest('.control-group').addClass('success');
    }
  });

  // State helpers
  function showSendingMessage() {
    $ready.addClass('hidden');
    $sending.removeClass('hidden');
    $sent.addClass('hidden');
    $failure.addClass('hidden');
  }
  function showSentMessage() {
    $ready.addClass('hidden');
    $sending.addClass('hidden');
    $sent.removeClass('hidden');
    $failure.addClass('hidden');
  }
  function showFailureMessage() {
    $ready.addClass('hidden');
    $sending.addClass('hidden');
    $sent.addClass('hidden');
    $failure.removeClass('hidden');
  }
  function showContactForm() {
    $ready.removeClass('hidden');
    $sending.addClass('hidden');
    $sent.addClass('hidden');
    $failure.addClass('hidden');
  }

  // Always allow users to return to the "ready" state
  $('button.show-contact-form').bind('click', function(event) {
    showContactForm();
  });

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

  // Handle form submission with validation
  $contact_form.submit(function(e) {
    if ( $contact_form.valid() ) {
      var $form = $(this);
      var data = $form.serializeFormJSON();
      var url = 'http://entio-postage.herokuapp.com/messages/send.json?callback=?';
      showSendingMessage();
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
          showSentMessage();
        },
        error: function(e) {
          console.log(e.message);
          showFailureMessage();
        }
      });      
    }
    e.preventDefault();
  });
  
});
