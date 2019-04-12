var db = firebase.database()

$('.page-transition').on('click', function(){
  let data = $(this).data('transition')
  $($(".active:first").data('transition').element).addClass('hidden')
  $(data.element).removeClass('hidden')
  $('.active').removeClass('active')
  $(`${data.element}-link`).addClass('active')
})

db.ref('projects').once('value', (snap)=>{
  console.log(snap.val())
  snap.val().forEach((item)=>{
    $('#portfolio').append(`
      <div class="portfolio-container">
        <div class="project-container">
          <div id='${item.order}-project' class="project-header" data-info="#${item.order}-info">
            <h2>${item.name}</h2><i id='${item.order}-info-icon' class="fas fa-chevron-down fa-2x"></i>
          </div>
          <div id='${item.order}-info' class="project-information-container">
            <div class="project-information">
              <img src=${item.image} alt="question block">
              <div class="project-description">
                <p>${item.description}</p>
                <div class="project-links">
                  <a href=${item.repo} target='_blank'><button class='btn btn-primary' type="button">Github Repo</button></a>
                  <a href=${item.ghpage} target='_blank'><button class='btn btn-primary' type="button">Live Page</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `)
  })
  $('.project-header').on('click', function() {
    $($(this).data('info')).toggleClass('project-information-show')
    $(`${$(this).data('info')}-icon`).toggleClass('header-icon-rotate')
  })
})

function leaveMessage(e){
  e.preventDefault()
  db.ref('messages').push({
    name: $('#input-name').val(),
    email: $('#input-email').val(),
    message: $('#input-message').val()
  })
}

$('.contact-form').on('submit', leaveMessage)
