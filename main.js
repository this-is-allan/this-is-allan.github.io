$(function() {
  moveProgressBar();
})

function moveProgressBar() {
  $('.progress-wrap').each(function () {
    let each_bar = $(this).data('progress-percent') + '%';

    $(this, '.progress').animate({
      width: each_bar
    }, 500)
  })
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    dots: false,
    center: true,
    mouseDrag: true,
    adaptiveHeight: false,
    responsive: {
      0: {
        items: 1,
        // center: false,
      },
      800: {
        items: 2,
      }
    }
  });
});