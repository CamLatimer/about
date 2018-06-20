(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

document.addEventListener("DOMContentLoaded", function () {

  var navItems = document.querySelectorAll('.nav__list li');
  var demos = document.querySelectorAll('.content__text');
  var demoImgs = document.querySelectorAll('img');
  var headers = document.querySelectorAll('.demo__header');
  var navArrows = document.querySelectorAll('.navToggles');
  var index = 0;

  // set index to element's index # when clicked then show/hide elements
  navItems.forEach(function (item, i) {
    item.addEventListener('click', function () {
      index = i;
      showDemo(index);
    });
  });

  // change index with nav arrows
  navArrows.forEach(function (item, i) {
    item.addEventListener('click', function () {
      if (item.classList.contains('forward')) {
        index = index === 3 ? 0 : index + 1;
      } else {
        index = index === 0 ? 3 : index - 1;
      }
      showDemo(index);
    });
  });

  // highlight selected project in nav menu and show-hide header and images
  function showDemo(demoIndex) {
    document.querySelector('.highlight').classList.remove('highlight');
    navItems[demoIndex].classList.add('highlight');

    document.querySelector('.showText').classList.remove('showText');
    document.querySelector('.showHeader').classList.remove('showHeader');
    var img = document.querySelector('.showImg');
    if (img) img.classList.remove('showImg');
    demos[demoIndex].classList.add('showText');
    demoImgs[demoIndex].classList.add('showImg');
    headers[demoIndex].classList.add('showHeader');
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVzs7QUFFdkQsTUFBSSxXQUFXLFNBQVMsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBZjtBQUNBLE1BQUksUUFBUSxTQUFTLGdCQUFULENBQTBCLGdCQUExQixDQUFaO0FBQ0EsTUFBSSxXQUFXLFNBQVMsZ0JBQVQsQ0FBMEIsS0FBMUIsQ0FBZjtBQUNBLE1BQUksVUFBVSxTQUFTLGdCQUFULENBQTBCLGVBQTFCLENBQWQ7QUFDQSxNQUFJLFlBQVksU0FBUyxnQkFBVCxDQUEwQixhQUExQixDQUFoQjtBQUNBLE1BQUksUUFBUSxDQUFaOztBQUVBO0FBQ0EsV0FBUyxPQUFULENBQWlCLFVBQVMsSUFBVCxFQUFlLENBQWYsRUFBaUI7QUFDaEMsU0FBSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFVO0FBQ3ZDLGNBQVEsQ0FBUjtBQUNBLGVBQVMsS0FBVDtBQUNELEtBSEQ7QUFJRCxHQUxEOztBQU9GO0FBQ0UsWUFBVSxPQUFWLENBQWtCLFVBQVMsSUFBVCxFQUFlLENBQWYsRUFBaUI7QUFDakMsU0FBSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFVO0FBQ3ZDLFVBQUcsS0FBSyxTQUFMLENBQWUsUUFBZixDQUF3QixTQUF4QixDQUFILEVBQXNDO0FBQ3BDLGdCQUFRLFVBQVUsQ0FBVixHQUFjLENBQWQsR0FBa0IsUUFBUSxDQUFsQztBQUNELE9BRkQsTUFFTztBQUNMLGdCQUFRLFVBQVUsQ0FBVixHQUFjLENBQWQsR0FBa0IsUUFBUSxDQUFsQztBQUNEO0FBQ0QsZUFBUyxLQUFUO0FBQ0QsS0FQRDtBQVFELEdBVEQ7O0FBV0E7QUFDQSxXQUFTLFFBQVQsQ0FBa0IsU0FBbEIsRUFBNEI7QUFDMUIsYUFBUyxhQUFULENBQXVCLFlBQXZCLEVBQXFDLFNBQXJDLENBQStDLE1BQS9DLENBQXNELFdBQXREO0FBQ0EsYUFBUyxTQUFULEVBQW9CLFNBQXBCLENBQThCLEdBQTlCLENBQWtDLFdBQWxDOztBQUVBLGFBQVMsYUFBVCxDQUF1QixXQUF2QixFQUFvQyxTQUFwQyxDQUE4QyxNQUE5QyxDQUFxRCxVQUFyRDtBQUNBLGFBQVMsYUFBVCxDQUF1QixhQUF2QixFQUFzQyxTQUF0QyxDQUFnRCxNQUFoRCxDQUF1RCxZQUF2RDtBQUNBLFFBQUksTUFBTSxTQUFTLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBVjtBQUNBLFFBQUcsR0FBSCxFQUFRLElBQUksU0FBSixDQUFjLE1BQWQsQ0FBcUIsU0FBckI7QUFDUixVQUFNLFNBQU4sRUFBaUIsU0FBakIsQ0FBMkIsR0FBM0IsQ0FBK0IsVUFBL0I7QUFDQSxhQUFTLFNBQVQsRUFBb0IsU0FBcEIsQ0FBOEIsR0FBOUIsQ0FBa0MsU0FBbEM7QUFDQSxZQUFRLFNBQVIsRUFBbUIsU0FBbkIsQ0FBNkIsR0FBN0IsQ0FBaUMsWUFBakM7QUFDRDtBQUVGLENBM0NEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuXG4gIGxldCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2xpc3QgbGknKTtcbiAgbGV0IGRlbW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnRfX3RleHQnKTtcbiAgbGV0IGRlbW9JbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG4gIGxldCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbW9fX2hlYWRlcicpO1xuICBsZXQgbmF2QXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdlRvZ2dsZXMnKTtcbiAgbGV0IGluZGV4ID0gMDtcblxuICAvLyBzZXQgaW5kZXggdG8gZWxlbWVudCdzIGluZGV4ICMgd2hlbiBjbGlja2VkIHRoZW4gc2hvdy9oaWRlIGVsZW1lbnRzXG4gIG5hdkl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSl7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBpbmRleCA9IGk7XG4gICAgICBzaG93RGVtbyhpbmRleCk7XG4gICAgfSlcbiAgfSlcblxuLy8gY2hhbmdlIGluZGV4IHdpdGggbmF2IGFycm93c1xuICBuYXZBcnJvd3MuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKXtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3J3YXJkJykpe1xuICAgICAgICBpbmRleCA9IGluZGV4ID09PSAzID8gMCA6IGluZGV4ICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggPT09IDAgPyAzIDogaW5kZXggLSAxO1xuICAgICAgfVxuICAgICAgc2hvd0RlbW8oaW5kZXgpO1xuICAgIH0pXG4gIH0pXG5cbiAgLy8gaGlnaGxpZ2h0IHNlbGVjdGVkIHByb2plY3QgaW4gbmF2IG1lbnUgYW5kIHNob3ctaGlkZSBoZWFkZXIgYW5kIGltYWdlc1xuICBmdW5jdGlvbiBzaG93RGVtbyhkZW1vSW5kZXgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdobGlnaHQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbiAgICBuYXZJdGVtc1tkZW1vSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dUZXh0JykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd1RleHQnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvd0hlYWRlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dIZWFkZXInKTtcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dJbWcnKTtcbiAgICBpZihpbWcpIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93SW1nJyk7XG4gICAgZGVtb3NbZGVtb0luZGV4XS5jbGFzc0xpc3QuYWRkKCdzaG93VGV4dCcpO1xuICAgIGRlbW9JbWdzW2RlbW9JbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvd0ltZycpO1xuICAgIGhlYWRlcnNbZGVtb0luZGV4XS5jbGFzc0xpc3QuYWRkKCdzaG93SGVhZGVyJyk7XG4gIH1cblxufSlcbiJdfQ==
