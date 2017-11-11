var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 200){
        $(".menu").css({"background": "#555"})
    }
    if(200 > scrolled){
        $(".menu").css({"background": "transparent"})         
    }
}