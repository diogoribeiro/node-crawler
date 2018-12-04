$(document).ready(function(){
  var tweetsContainer = $('.tweets');

  tweetsContainer.slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
  });


  tweetsContainer.show();
});
