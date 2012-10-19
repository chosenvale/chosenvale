$(document).ready(function(){

  // This section should only exist on the Contact page.
  var $trumpet_form = $('section#trumpet-application div.postage form');
  var $percussion_form = $('section#percussion-application div.postage form');

  // Declare form validation rules for jquery.validate

  // Handle valid form submission
  $trumpet_form.submit(function(e) {
    e.preventDefault();
    $trumpet_form.sendWithPostage();
  });
  $percussion_form.submit(function(e) {
    e.preventDefault();
    $percussion_form.sendWithPostage();
  });

});
