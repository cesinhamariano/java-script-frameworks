$(document).ready(function () {
    $("#menu ul li").css("color", "#fff");
    $('#menu ul li').prepend('<span></span>');
    $('#menu ul li').each(function () {
        var texto = $(this).find('a').text();
        $(this).find('span').text(texto);
    });
    $('#menu ul li').hover(function () {
        $(this).find('span').stop().animate({
            marginLeft: "+15px"
        }, 300);
    }, function () {
        $(this).find('span').stop().animate({
            marginLeft: "0px"
        }, 300);
    });
});