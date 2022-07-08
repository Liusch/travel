const swiper = new Swiper('.reviews__slider', {
    // Optional parameters
    //direction: 'vertical', 
    // spaceBetween: -400,
    effect: 'coverflow',
    coverflowEffect: {
    slideShadows: false,
   

  },
    grabCursor: true,
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });