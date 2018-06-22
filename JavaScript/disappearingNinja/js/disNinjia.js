$(document).ready(function () {
    $('img').click(function () {
        $(this).css('visibility','hidden');
    })

    $('input').click(function () {
        $('img').css('visibility','visible');
    })
})