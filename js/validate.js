document.addEventListener('DOMContentLoaded', function(){
  var form = document.querySelector('.formWithValidation');

  var fields = form.querySelectorAll('.tell-input');
  var error = document.querySelectorAll('.error-text');

  console.log(error);

  function generateError (number) {
    error[number].classList.add('error-active');
    fields[number].classList.add('tell-error');
  }

  function removeValidation () {
    var errors = form.querySelectorAll('.error-active');
    var fieldsError = form.querySelectorAll('.tell-error')
    for (var i = 0; i < errors.length; i++) {
      errors[i].classList.remove('error-active');
      fieldsError[i].classList.remove('tell-error');
      console.log('remove', i);
    }
  }

  function checkFieldsPresence () {
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        generateError(i);
      }
    }
  }
  // form.addEventListener('input', function(){
  //   removeValidation();
  // });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    removeValidation();

    checkFieldsPresence();
    
    
  });

});