//images animation on scroll
function Reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if(elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }else {
            reveals[i].classList.remove('active');
        }
    }
}

//function for mission animation to pop up
window.addEventListener('scroll', Reveal);

//Logo animation after page is done loading
document.addEventListener('DOMContentLoaded', function() {
    var toSlideElm = document.getElementsByClassName('toSlide');
    const toSlideLogo = document.getElementById('toSlideLogo');

    for(var x = 0; x < toSlideElm.length;x++){
        toSlideElm[x].classList.add('slideActive');
    }

    toSlideLogo.removeAttribute('id');
    toSlideLogo.classList.add('slideLogoActive');
});

//function for images crousell
$('#recipeCarousel').carousel({
    interval :3000
  })
  
  $('.carousel .carousel-item').each(function(){
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<2;i++) {
          next=next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });

  //function for suport mission

function SuportMission() {
    document.location.href = "views/contact.html";
}