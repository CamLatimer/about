const btns = document.querySelectorAll('.panelTrig');
const contentPanels = document.querySelectorAll('.panel');
let contactForm = document.getElementById('contactForm');


btns.forEach(function(btn, index) {
  btn.addEventListener('click', function(){
    let panel = this.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      let displayHeight = panel.scrollHeight
      panel.style.top = 0;
      panel.style.maxHeight = displayHeight + 'px';
      if(parseInt(panel.parentElement.style.maxHeight) > 0){
        displayHeight += parseInt(panel.parentElement.style.maxHeight);
        panel.parentElement.style.maxHeight = displayHeight;
      }
    }
  })
})

contactForm.addEventListener('submit', function(event){
  const email = validateEmail(contactForm);
  const message = validateMessage(contactForm);

  if(email === 'error'){
    event.preventDefault();
  } else if (message === 'error'){
    event.preventDefault();
  }

});

function validateEmail(form){
  let regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailTest = regexp.test(form._replyto.value);
  if(emailTest === false){
    form._replyto.style.borderColor = 'red';
    document.querySelector('.emailError').style.display = 'block';
    return 'error';
  }
}

function validateMessage(form){
  if(form.message.value.trim() === '' || null){
    form.message.style.borderColor = 'red';
    document.querySelector('.messageError').style.display = 'block';
    return 'error';
  }
}
