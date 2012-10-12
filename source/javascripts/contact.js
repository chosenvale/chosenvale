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

  // $contact_form.valid();
  
});

