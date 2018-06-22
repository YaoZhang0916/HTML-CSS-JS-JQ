
console.log( $('#1').attr("src"));

$(document).ready(function () {
    $('img').click(function () {

            $(this).attr('src',$(this).attr('data-alt-src'))


    })

})
