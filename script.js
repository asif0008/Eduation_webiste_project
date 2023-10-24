// Swiper
var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    autoplay: {
      delay: 4000, 
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // AOS Animation
  AOS.init();
  