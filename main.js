$(function() {
  moveProgressBar();
})

function moveProgressBar() {
  $('.progress-wrap').each(function () {
    let each_bar = $(this).data('progress-percent') + '%';
    console.log(each_bar)

    $(this, '.progress').animate({
      width: each_bar
    }, 500)
  })
}