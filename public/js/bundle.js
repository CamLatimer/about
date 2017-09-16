(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.addEventListener('load', function () {
  var navItems = document.querySelectorAll('.nav__list li');
  var demos = document.querySelectorAll('.content__text');
  var demoImgs = document.querySelectorAll('img');
  var headers = document.querySelectorAll('.demo__header');
  var navArrows = document.querySelectorAll('nav h1');
  var index = 0;

  navItems.forEach(function (item, i) {
    item.addEventListener('click', function () {
      index = i;
      showDemo(index, item);
    });
  });

  navArrows.forEach(function (item, i) {
    item.addEventListener('click', function () {
      if (item.classList.contains('forward')) {
        index = index === 4 ? 0 : index + 1;
      } else {
        index = index === 0 ? 4 : index - 1;
      }
      showDemo(index);
    });
  });

  function showDemo(demoIndex, item) {
    if (item) {
      document.querySelector('.highlight').classList.remove('highlight');
      item.classList.add('highlight');
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsT0FBTyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFVO0FBQ3hDLE1BQUksV0FBVyxTQUFTLGdCQUFULENBQTBCLGVBQTFCLENBQWY7QUFDQSxNQUFJLFFBQVEsU0FBUyxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBWjtBQUNBLE1BQUksV0FBVyxTQUFTLGdCQUFULENBQTBCLEtBQTFCLENBQWY7QUFDQSxNQUFJLFVBQVUsU0FBUyxnQkFBVCxDQUEwQixlQUExQixDQUFkO0FBQ0EsTUFBSSxZQUFZLFNBQVMsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBaEI7QUFDQSxNQUFJLFFBQVEsQ0FBWjs7QUFFQSxXQUFTLE9BQVQsQ0FBaUIsVUFBUyxJQUFULEVBQWUsQ0FBZixFQUFpQjtBQUNoQyxTQUFLLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVU7QUFDdkMsY0FBUSxDQUFSO0FBQ0EsZUFBUyxLQUFULEVBQWdCLElBQWhCO0FBQ0QsS0FIRDtBQUlELEdBTEQ7O0FBT0EsWUFBVSxPQUFWLENBQWtCLFVBQVMsSUFBVCxFQUFlLENBQWYsRUFBaUI7QUFDakMsU0FBSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFVO0FBQ3ZDLFVBQUcsS0FBSyxTQUFMLENBQWUsUUFBZixDQUF3QixTQUF4QixDQUFILEVBQXNDO0FBQ3BDLGdCQUFRLFVBQVUsQ0FBVixHQUFjLENBQWQsR0FBa0IsUUFBUSxDQUFsQztBQUNELE9BRkQsTUFFTztBQUNMLGdCQUFRLFVBQVUsQ0FBVixHQUFjLENBQWQsR0FBa0IsUUFBUSxDQUFsQztBQUNEO0FBQ0QsZUFBUyxLQUFUO0FBQ0QsS0FQRDtBQVFELEdBVEQ7O0FBV0EsV0FBUyxRQUFULENBQWtCLFNBQWxCLEVBQTZCLElBQTdCLEVBQWtDO0FBQ2hDLFFBQUcsSUFBSCxFQUFRO0FBQ04sZUFBUyxhQUFULENBQXVCLFlBQXZCLEVBQXFDLFNBQXJDLENBQStDLE1BQS9DLENBQXNELFdBQXREO0FBQ0EsV0FBSyxTQUFMLENBQWUsR0FBZixDQUFtQixXQUFuQjtBQUNEO0FBQ0QsYUFBUyxhQUFULENBQXVCLFdBQXZCLEVBQW9DLFNBQXBDLENBQThDLE1BQTlDLENBQXFELFVBQXJEO0FBQ0EsYUFBUyxhQUFULENBQXVCLGFBQXZCLEVBQXNDLFNBQXRDLENBQWdELE1BQWhELENBQXVELFlBQXZEO0FBQ0EsUUFBSSxNQUFNLFNBQVMsYUFBVCxDQUF1QixVQUF2QixDQUFWO0FBQ0EsUUFBRyxHQUFILEVBQVEsSUFBSSxTQUFKLENBQWMsTUFBZCxDQUFxQixTQUFyQjtBQUNSLFVBQU0sU0FBTixFQUFpQixTQUFqQixDQUEyQixHQUEzQixDQUErQixVQUEvQjtBQUNBLGFBQVMsU0FBVCxFQUFvQixTQUFwQixDQUE4QixHQUE5QixDQUFrQyxTQUFsQztBQUNBLFlBQVEsU0FBUixFQUFtQixTQUFuQixDQUE2QixHQUE3QixDQUFpQyxZQUFqQztBQUNEO0FBRUYsQ0F4Q0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICBsZXQgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19saXN0IGxpJyk7XG4gIGxldCBkZW1vcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50X190ZXh0Jyk7XG4gIGxldCBkZW1vSW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xuICBsZXQgaGVhZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZW1vX19oZWFkZXInKTtcbiAgbGV0IG5hdkFycm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBoMScpO1xuICBsZXQgaW5kZXggPSAwO1xuXG4gIG5hdkl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSl7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBpbmRleCA9IGk7XG4gICAgICBzaG93RGVtbyhpbmRleCwgaXRlbSk7XG4gICAgfSlcbiAgfSlcblxuICBuYXZBcnJvd3MuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKXtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3J3YXJkJykpe1xuICAgICAgICBpbmRleCA9IGluZGV4ID09PSA0ID8gMCA6IGluZGV4ICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggPT09IDAgPyA0IDogaW5kZXggLSAxO1xuICAgICAgfVxuICAgICAgc2hvd0RlbW8oaW5kZXgpO1xuICAgIH0pXG4gIH0pXG5cbiAgZnVuY3Rpb24gc2hvd0RlbW8oZGVtb0luZGV4LCBpdGVtKXtcbiAgICBpZihpdGVtKXtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdobGlnaHQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93VGV4dCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dUZXh0Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dIZWFkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93SGVhZGVyJyk7XG4gICAgbGV0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93SW1nJyk7XG4gICAgaWYoaW1nKSBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd0ltZycpO1xuICAgIGRlbW9zW2RlbW9JbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvd1RleHQnKTtcbiAgICBkZW1vSW1nc1tkZW1vSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3Nob3dJbWcnKTtcbiAgICBoZWFkZXJzW2RlbW9JbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvd0hlYWRlcicpO1xuICB9XG5cbn0pXG4iXX0=
