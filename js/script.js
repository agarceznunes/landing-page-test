// SESSION 2 CAROUSEL
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
//END OF SESSION 2 CAROUSEL

// SESSION 3 ACCORDION
var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var setClasses = this.classList.contains('active');
      setClass(acc, 'active', 'remove');
      setClass(panel, 'show', 'remove');
        
      if (!setClasses) {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      }
  });
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}
// END OF SESSION 3 ACCORDION

// FORM MASKS
$("#phone").mask("(99) 99999-9999");
// END OF FORM MASKS

// FORM VALIDATION CLASS
$("form").validate({
  rules: {
    email: {
      required: true,
      email: true,
    }
  },
  messages: {
    email: {
      email: "Por favor, insira um e-mail válido."
    }
  },
  errorClass: "error",
});
// END OF FORM VALIDATION CLASS