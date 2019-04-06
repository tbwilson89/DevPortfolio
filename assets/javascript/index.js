

$('.page-transition').on('click', function(){
  let data = $(this).data('transition')
  $($(".active:first").data('transition').element).addClass('hidden')
  $(data.element).removeClass('hidden')
  $('.active').removeClass('active')
  $(`${data.element}-link`).addClass('active')
})

$('.project-header').on('click', function() {
  console.log('test')
  console.log(`${$(this).data('info')}-icon`)
  $($(this).data('info')).toggleClass('project-information-show')
  $(`${$(this).data('info')}-icon`).toggleClass('header-icon-rotate')
})
