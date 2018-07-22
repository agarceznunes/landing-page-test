$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: true,
    autoplay: true,
    dots: true,
    loop: true,
    responsiveRefreshRate : 200,
    navContainer: '#customNav',
    dotsContainer: '#customDots',
  })
});