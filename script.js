let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
//menu icon in the navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
      });

      let activeLink = document.querySelector('header nav a[href*=' + id + ']');
      activeLink.classList.add('active');

      // Update the URL path without triggering a page reload
      let updatedPath = window.location.href.split('#')[0] + '#' + id;
      history.replaceState(null, null, updatedPath);
    }
  });

  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

function showGallery(index) {
  var galleryDiv = $('#gallery' + index);
  $('.gallery1').hide();
  $('.gallery2').hide();
  $('.gallery3').hide();
  galleryDiv.fadeIn(500);
  $('html, body').animate({
    scrollTop: galleryDiv.offset().top
  }, 500);
}

$('.back-button').on('click', function() {
  $('.gallery1').fadeOut(500, function() {
    $('#gallery').fadeIn(500);
  });
  $('.gallery2').fadeOut(500, function() {
    $('#gallery').fadeIn(500);
  });
  $('.gallery3').fadeOut(500, function() {
    $('#gallery').fadeIn(500);
  });
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
});

ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.title , .btn', { origin: 'top' });
ScrollReveal().reveal('.service-box, .gallery-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .social-media', { origin: 'right' });
ScrollReveal().reveal('.home-content p, .about p, .contact-box', { origin: 'left' });
