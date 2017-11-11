$(document).ready(function(){
      $('.carousel-portret').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:true,
        navText:["<i class='fa fa-chevron-left nav-position' aria-hidden='true'></i>","<i class='fa fa-chevron-right nav-position' aria-hidden='true'></i>"],
        responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:4,
          }
        }
      });
      $('.carousel-quote').owlCarousel({
        loop:true,
        responsiveClass:true,
        dotdata: true,
        dotsContainer: '.dotsCont',
        margin:10, //Зацикливаем слайдер
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
        0:{
        items:1
        },
        600:{
        items:1
        },
        1000:{
        items:1
        }
        }
      });
     
});