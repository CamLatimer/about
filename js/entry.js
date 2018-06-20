document.addEventListener("DOMContentLoaded", function() {

  let navItems = document.querySelectorAll('.nav__list li');
  let demos = document.querySelectorAll('.content__text');
  let demoImgs = document.querySelectorAll('img');
  let headers = document.querySelectorAll('.demo__header');
  let navArrows = document.querySelectorAll('.navToggles');
  let index = 0;

  // set index to element's index # when clicked then show/hide elements
  navItems.forEach(function(item, i){
    item.addEventListener('click', function(){
      index = i;
      showDemo(index);
    })
  })

// change index with nav arrows
  navArrows.forEach(function(item, i){
    item.addEventListener('click', function(){
      if(item.classList.contains('forward')){
        index = index === 3 ? 0 : index + 1;
      } else {
        index = index === 0 ? 3 : index - 1;
      }
      showDemo(index);
    })
  })

  // highlight selected project in nav menu and show-hide header and images
  function showDemo(demoIndex){
    document.querySelector('.highlight').classList.remove('highlight');
    navItems[demoIndex].classList.add('highlight');

    document.querySelector('.showText').classList.remove('showText');
    document.querySelector('.showHeader').classList.remove('showHeader');
    let img = document.querySelector('.showImg');
    if(img) img.classList.remove('showImg');
    demos[demoIndex].classList.add('showText');
    demoImgs[demoIndex].classList.add('showImg');
    headers[demoIndex].classList.add('showHeader');
  }

})
