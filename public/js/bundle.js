(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.addEventListener('load', function () {
  console.log('hello');
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
    console.log(demoIndex);
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
    console.log(demoIndex);
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsT0FBTyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFVO0FBQ3hDLFVBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxNQUFJLFdBQVcsU0FBUyxnQkFBVCxDQUEwQixlQUExQixDQUFmO0FBQ0EsTUFBSSxRQUFRLFNBQVMsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQVo7QUFDQSxNQUFJLFdBQVcsU0FBUyxnQkFBVCxDQUEwQixLQUExQixDQUFmO0FBQ0EsTUFBSSxVQUFVLFNBQVMsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBZDtBQUNBLE1BQUksWUFBWSxTQUFTLGdCQUFULENBQTBCLFFBQTFCLENBQWhCO0FBQ0EsTUFBSSxRQUFRLENBQVo7O0FBRUEsV0FBUyxPQUFULENBQWlCLFVBQVMsSUFBVCxFQUFlLENBQWYsRUFBaUI7QUFDaEMsU0FBSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFVO0FBQ3ZDLGNBQVEsQ0FBUjtBQUNBLGVBQVMsS0FBVCxFQUFnQixJQUFoQjtBQUNELEtBSEQ7QUFJRCxHQUxEOztBQU9BLFlBQVUsT0FBVixDQUFrQixVQUFTLElBQVQsRUFBZSxDQUFmLEVBQWlCO0FBQ2pDLFNBQUssZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVTtBQUN2QyxVQUFHLEtBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0IsU0FBeEIsQ0FBSCxFQUFzQztBQUNwQyxnQkFBUSxVQUFVLENBQVYsR0FBYyxDQUFkLEdBQWtCLFFBQVEsQ0FBbEM7QUFDRCxPQUZELE1BRU87QUFDTCxnQkFBUSxVQUFVLENBQVYsR0FBYyxDQUFkLEdBQWtCLFFBQVEsQ0FBbEM7QUFDRDtBQUNELGVBQVMsS0FBVDtBQUNELEtBUEQ7QUFRRCxHQVREOztBQVdBLFdBQVMsUUFBVCxDQUFrQixTQUFsQixFQUE2QixJQUE3QixFQUFrQztBQUNoQyxZQUFRLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsUUFBRyxJQUFILEVBQVE7QUFDTixlQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsU0FBckMsQ0FBK0MsTUFBL0MsQ0FBc0QsV0FBdEQ7QUFDQSxXQUFLLFNBQUwsQ0FBZSxHQUFmLENBQW1CLFdBQW5CO0FBQ0Q7QUFDRCxhQUFTLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0MsU0FBcEMsQ0FBOEMsTUFBOUMsQ0FBcUQsVUFBckQ7QUFDQSxhQUFTLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsU0FBdEMsQ0FBZ0QsTUFBaEQsQ0FBdUQsWUFBdkQ7QUFDQSxRQUFJLE1BQU0sU0FBUyxhQUFULENBQXVCLFVBQXZCLENBQVY7QUFDQSxRQUFHLEdBQUgsRUFBUSxJQUFJLFNBQUosQ0FBYyxNQUFkLENBQXFCLFNBQXJCO0FBQ1IsVUFBTSxTQUFOLEVBQWlCLFNBQWpCLENBQTJCLEdBQTNCLENBQStCLFVBQS9CO0FBQ0EsYUFBUyxTQUFULEVBQW9CLFNBQXBCLENBQThCLEdBQTlCLENBQWtDLFNBQWxDO0FBQ0EsWUFBUSxTQUFSLEVBQW1CLFNBQW5CLENBQTZCLEdBQTdCLENBQWlDLFlBQWpDO0FBQ0EsWUFBUSxHQUFSLENBQVksU0FBWjtBQUNEO0FBRUYsQ0EzQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbiAgbGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fbGlzdCBsaScpO1xuICBsZXQgZGVtb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudF9fdGV4dCcpO1xuICBsZXQgZGVtb0ltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcbiAgbGV0IGhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVtb19faGVhZGVyJyk7XG4gIGxldCBuYXZBcnJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgaDEnKTtcbiAgbGV0IGluZGV4ID0gMDtcblxuICBuYXZJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpe1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgaW5kZXggPSBpO1xuICAgICAgc2hvd0RlbW8oaW5kZXgsIGl0ZW0pO1xuICAgIH0pXG4gIH0pXG5cbiAgbmF2QXJyb3dzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSl7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygnZm9yd2FyZCcpKXtcbiAgICAgICAgaW5kZXggPSBpbmRleCA9PT0gNCA/IDAgOiBpbmRleCArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IGluZGV4ID09PSAwID8gNCA6IGluZGV4IC0gMTtcbiAgICAgIH1cbiAgICAgIHNob3dEZW1vKGluZGV4KTtcbiAgICB9KVxuICB9KVxuXG4gIGZ1bmN0aW9uIHNob3dEZW1vKGRlbW9JbmRleCwgaXRlbSl7XG4gICAgY29uc29sZS5sb2coZGVtb0luZGV4KTtcbiAgICBpZihpdGVtKXtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdobGlnaHQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93VGV4dCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dUZXh0Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dIZWFkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93SGVhZGVyJyk7XG4gICAgbGV0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93SW1nJyk7XG4gICAgaWYoaW1nKSBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd0ltZycpO1xuICAgIGRlbW9zW2RlbW9JbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvd1RleHQnKTtcbiAgICBkZW1vSW1nc1tkZW1vSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3Nob3dJbWcnKTtcbiAgICBoZWFkZXJzW2RlbW9JbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvd0hlYWRlcicpO1xuICAgIGNvbnNvbGUubG9nKGRlbW9JbmRleCk7XG4gIH1cblxufSlcbiJdfQ==
