$(window).scroll(function() {
            $('.move').each(function(){
              var imagePos = $(this).offset().top;
              var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+300) {
                $(this).addClass('bounceIn');
              }
            });
            $('.move_about_right').each(function(){
              var imagePos = $(this).offset().top;
              var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+400) {
                $(this).addClass('bounceInRight');
              }
            });
            $('.move_about_left').each(function(){
              var imagePos = $(this).offset().top;
              var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+400) {
                $(this).addClass('bounceInLeft');
              }
            });
});