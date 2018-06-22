

    function getTheFirstName() {
        var firstName = $('#firstName').val();
        $('#userInput').append('<td>'+firstName+'</td>');

    }

    function getTheLastName() {
        var lastName = $('#lastName').val();
        $('#userInput').append('<td>'+lastName+'</td>');

    }

    function getemailAdress() {
        var emailAdress = $('#emailAdress').val();
        $('#userInput').append('<td>'+emailAdress+'</td>');

    }

    function getContact() {
        var contact = $('#contact').val();
        $('#userInput').append('<td>'+contact+'</td>');

    }
$(document).ready(function () {
    $('#input').click(function () {
      getTheFirstName();
      getTheLastName();
      getemailAdress();
      getContact();

      return false;
    })
})