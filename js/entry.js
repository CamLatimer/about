window.addEventListener('load', function(){
  let navItems = document.querySelectorAll('.nav__list li');
  let demos = document.querySelectorAll('.content__text');
  let demoImgs = document.querySelectorAll('img');
  let headers = document.querySelectorAll('.demo__header');
  let navArrows = document.querySelectorAll('nav h1');
  let index = 0;

  navItems.forEach(function(item, i){
    item.addEventListener('click', function(){
      index = i;
      showDemo(index, item);
    })
  })

  navArrows.forEach(function(item, i){
    item.addEventListener('click', function(){
      if(item.classList.contains('forward')){
        index = index === 4 ? 0 : index + 1;
      } else {
        index = index === 0 ? 4 : index - 1;
      }
      showDemo(index);
    })
  })

  function showDemo(demoIndex, item){
    if(item){
      document.querySelector('.highlight').classList.remove('highlight');
      item.classList.add('highlight');
    }
    document.querySelector('.showText').classList.remove('showText');
    document.querySelector('.showHeader').classList.remove('showHeader');
    let img = document.querySelector('.showImg');
    if(img) img.classList.remove('showImg');
    demos[demoIndex].classList.add('showText');
    demoImgs[demoIndex].classList.add('showImg');
    headers[demoIndex].classList.add('showHeader');
  }

})
