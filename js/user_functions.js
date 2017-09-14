 $(window).scroll(function(){
    if ($(window).scrollTop() > 800) {
        $('.block-head').addClass('scroll');
    }
    else {
        $('.block-head').removeClass('scroll')
    }
});
