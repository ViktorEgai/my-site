const swiper = new Swiper('.swiper-container', {  
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    319: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    440: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 5
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 5
    }
    
  },
  // Navigation arrows
  navigation: {
    nextEl: '.portfolio__button-next',
    prevEl: '.portfolio__button-prev',
  },
});

// табы 
  var tabsItem=$(".portfolio__slide");
  var contentItem=$(".portfolio__content-item");
  tabsItem.on("click",function(event){
    var activeContent=$(this).attr("data-target");
    tabsItem.removeClass("portfolio__slide--active");
    contentItem.removeClass("portfolio__content-item--active");
    $(activeContent).addClass("portfolio__content-item--active");
    $(this).addClass("portfolio__slide--active")
  });

  $('.header__button').on('click', function() {
    $('.nav__list').toggleClass('nav__list--visible');
  });
  $(document).click(function(event){
    if(!$(event.target).closest(".header__button, .nav__list--visible").length){
      $("body").find(".nav__list").removeClass("nav__list--visible");
      }
  });
  $(document).scroll(function(){
    $(".nav__list").removeClass("nav__list--visible")
  });

  // наверх
  var toTop=$(".to-top");
  $(window).scroll(function(){
    if($(this).scrollTop()>200){
      toTop.addClass("to-top--visible")
    }else{
      toTop.removeClass("to-top--visible")}
    });
  $(".to-top").click(function(){$('body,html').animate({scrollTop:0},400)});

  $("#navbar").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top;$('body,html').animate({scrollTop:top},500)});