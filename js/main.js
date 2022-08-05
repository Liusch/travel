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

(function  () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuCloseItem = document.querySelector('.header__nav-close');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav-active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav-active');
  });
}());