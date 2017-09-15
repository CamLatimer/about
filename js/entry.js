window.addEventListener('load', function(){
  console.log('hello');
  let navItems = document.querySelectorAll('.nav__list li');
  let demos = document.querySelectorAll('.content__text');
  let demoImgs = document.querySelectorAll('img');
  let headers = document.querySelectorAll('.demo__header');
  navItems.forEach(function(item, index){


    item.addEventListener('click', function(){
      document.querySelector('.highlight').classList.remove('highlight');
      document.querySelector('.showText').classList.remove('showText');
      document.querySelector('.showHeader').classList.remove('showHeader');
      let img = document.querySelector('.showImg');
      if(img) img.classList.remove('showImg');

      demos[index].classList.add('showText');
      demoImgs[index].classList.add('showImg');
      headers[index].classList.add('showHeader');
      item.classList.add('highlight');

    })



  })
})
