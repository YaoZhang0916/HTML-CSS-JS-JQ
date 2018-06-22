
$(document).ready(function () {
    $('#hide').click(function () {
        $('p').hide();
    })

    $('#show').click(function () {
        $('p').show();
    })

    $('#toogle').click(function () {
        $('p').toggle()
    })

    $('#slideDown').click(function () {
        $('p').slideDown()
    })

    $('#slideUp').click(function () {
        $('p').slideUp()
    })

    $('#slideToggle').click(function () {
        $('p').slideToggle()
    })

    $('#fadeIn').click(function () {
        $('p').fadeIn(3000);
    })

    $('#fadeOut').click(function () {
        $('p').fadeOut(3000);
    })

    $('#addClass').click(function () {
        $('h3').addClass('selected');
    })

    $('#before').click(function () {
        $('h3').before('<h2> very</h2>');
    })

    $('#after').click(function () {
        $('h3').after(' <h3>very<h3> ');
    })

    $('#append').click(function () {
        $('h3').append(' awesome ');
    })

    $('#html').click(function () {
        $('h3').html(' <h3>Thank you!</h3> ');
    })

    $('#attr').click(function () {
        $('h4').attr("color","blue");
    })

    $('#val').click(function () {
        var value=$('h3').text();
        alert(value);
       $("h4").val(value);

    })


    $('#div').data("test", { first: 16, last: "pizza!" });
    $('#span').text($('#div').data("test").first);
    alert($("#div").data("test").first);


})