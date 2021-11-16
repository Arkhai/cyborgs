$('.parallax-window').parallax({imageSrc: 'img/intro.jpg'});

$(function(){
    $('.nav-link').click(function(){
        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: ($(id).offset().top - 76)
        }, 500);
        return false;
    });
});