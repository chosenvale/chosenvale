$(document).ready(function(){

  // This section should only exist on the Contact page.
  var $contact_form = $('section#contact-us div.postage form');

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

  // Handle valid form submission
  $contact_form.submit(function(e) {
    e.preventDefault();
    $contact_form.sendWithPostage();
  });
  
});
