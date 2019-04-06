

$('.page-transition').on('click', function(){
  let data = $(this).data('transition')
  $($(".active:first").data('transition').element).addClass('hidden')
  $(data.element).removeClass('hidden')
  $('.active').removeClass('active')
  $(`${data.element}-link`).addClass('active')
})
