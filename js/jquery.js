$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayHoverPause: true,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  responsiveClass: true,
  // navText: ["<img scr='img/multicar-left.png'>", "<img scr='img/multicar-right.png'>"],
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: true,
      loop: true
    }
  }
})