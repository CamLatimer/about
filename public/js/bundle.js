(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.addEventListener('load', function () {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsT0FBTyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFVOztBQUV4QyxNQUFJLFdBQVcsU0FBUyxnQkFBVCxDQUEwQixlQUExQixDQUFmO0FBQ0EsTUFBSSxRQUFRLFNBQVMsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQVo7QUFDQSxNQUFJLFdBQVcsU0FBUyxnQkFBVCxDQUEwQixLQUExQixDQUFmO0FBQ0EsTUFBSSxVQUFVLFNBQVMsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBZDtBQUNBLE1BQUksWUFBWSxTQUFTLGdCQUFULENBQTBCLGFBQTFCLENBQWhCO0FBQ0EsTUFBSSxRQUFRLENBQVo7O0FBRUE7QUFDQSxXQUFTLE9BQVQsQ0FBaUIsVUFBUyxJQUFULEVBQWUsQ0FBZixFQUFpQjtBQUNoQyxTQUFLLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVU7QUFDdkMsY0FBUSxDQUFSO0FBQ0EsZUFBUyxLQUFUO0FBQ0QsS0FIRDtBQUlELEdBTEQ7O0FBT0Y7QUFDRSxZQUFVLE9BQVYsQ0FBa0IsVUFBUyxJQUFULEVBQWUsQ0FBZixFQUFpQjtBQUNqQyxTQUFLLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVU7QUFDdkMsVUFBRyxLQUFLLFNBQUwsQ0FBZSxRQUFmLENBQXdCLFNBQXhCLENBQUgsRUFBc0M7QUFDcEMsZ0JBQVEsVUFBVSxDQUFWLEdBQWMsQ0FBZCxHQUFrQixRQUFRLENBQWxDO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZ0JBQVEsVUFBVSxDQUFWLEdBQWMsQ0FBZCxHQUFrQixRQUFRLENBQWxDO0FBQ0Q7QUFDRCxlQUFTLEtBQVQ7QUFDRCxLQVBEO0FBUUQsR0FURDs7QUFXQTtBQUNBLFdBQVMsUUFBVCxDQUFrQixTQUFsQixFQUE0QjtBQUMxQixhQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsU0FBckMsQ0FBK0MsTUFBL0MsQ0FBc0QsV0FBdEQ7QUFDQSxhQUFTLFNBQVQsRUFBb0IsU0FBcEIsQ0FBOEIsR0FBOUIsQ0FBa0MsV0FBbEM7O0FBRUEsYUFBUyxhQUFULENBQXVCLFdBQXZCLEVBQW9DLFNBQXBDLENBQThDLE1BQTlDLENBQXFELFVBQXJEO0FBQ0EsYUFBUyxhQUFULENBQXVCLGFBQXZCLEVBQXNDLFNBQXRDLENBQWdELE1BQWhELENBQXVELFlBQXZEO0FBQ0EsUUFBSSxNQUFNLFNBQVMsYUFBVCxDQUF1QixVQUF2QixDQUFWO0FBQ0EsUUFBRyxHQUFILEVBQVEsSUFBSSxTQUFKLENBQWMsTUFBZCxDQUFxQixTQUFyQjtBQUNSLFVBQU0sU0FBTixFQUFpQixTQUFqQixDQUEyQixHQUEzQixDQUErQixVQUEvQjtBQUNBLGFBQVMsU0FBVCxFQUFvQixTQUFwQixDQUE4QixHQUE5QixDQUFrQyxTQUFsQztBQUNBLFlBQVEsU0FBUixFQUFtQixTQUFuQixDQUE2QixHQUE3QixDQUFpQyxZQUFqQztBQUNEO0FBRUYsQ0EzQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuXG4gIGxldCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2xpc3QgbGknKTtcbiAgbGV0IGRlbW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnRfX3RleHQnKTtcbiAgbGV0IGRlbW9JbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG4gIGxldCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbW9fX2hlYWRlcicpO1xuICBsZXQgbmF2QXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdlRvZ2dsZXMnKTtcbiAgbGV0IGluZGV4ID0gMDtcblxuICAvLyBzZXQgaW5kZXggdG8gZWxlbWVudCdzIGluZGV4ICMgd2hlbiBjbGlja2VkIHRoZW4gc2hvdy9oaWRlIGVsZW1lbnRzXG4gIG5hdkl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSl7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBpbmRleCA9IGk7XG4gICAgICBzaG93RGVtbyhpbmRleCk7XG4gICAgfSlcbiAgfSlcblxuLy8gY2hhbmdlIGluZGV4IHdpdGggbmF2IGFycm93c1xuICBuYXZBcnJvd3MuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKXtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3J3YXJkJykpe1xuICAgICAgICBpbmRleCA9IGluZGV4ID09PSAzID8gMCA6IGluZGV4ICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggPT09IDAgPyAzIDogaW5kZXggLSAxO1xuICAgICAgfVxuICAgICAgc2hvd0RlbW8oaW5kZXgpO1xuICAgIH0pXG4gIH0pXG5cbiAgLy8gaGlnaGxpZ2h0IHNlbGVjdGVkIHByb2plY3QgaW4gbmF2IG1lbnUgYW5kIHNob3ctaGlkZSBoZWFkZXIgYW5kIGltYWdlc1xuICBmdW5jdGlvbiBzaG93RGVtbyhkZW1vSW5kZXgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdobGlnaHQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbiAgICBuYXZJdGVtc1tkZW1vSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dUZXh0JykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd1RleHQnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvd0hlYWRlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dIZWFkZXInKTtcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dJbWcnKTtcbiAgICBpZihpbWcpIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93SW1nJyk7XG4gICAgZGVtb3NbZGVtb0luZGV4XS5jbGFzc0xpc3QuYWRkKCdzaG93VGV4dCcpO1xuICAgIGRlbW9JbWdzW2RlbW9JbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvd0ltZycpO1xuICAgIGhlYWRlcnNbZGVtb0luZGV4XS5jbGFzc0xpc3QuYWRkKCdzaG93SGVhZGVyJyk7XG4gIH1cblxufSlcbiJdfQ==
