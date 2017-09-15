(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.addEventListener('load', function () {
  console.log('hello');
  var navItems = document.querySelectorAll('.nav__list li');
  var demos = document.querySelectorAll('.content__text');
  var demoImgs = document.querySelectorAll('img');
  var headers = document.querySelectorAll('.demo__header');
  navItems.forEach(function (item, index) {

    item.addEventListener('click', function () {
      document.querySelector('.highlight').classList.remove('highlight');
      document.querySelector('.showText').classList.remove('showText');
      document.querySelector('.showHeader').classList.remove('showHeader');
      var img = document.querySelector('.showImg');
      if (img) img.classList.remove('showImg');

      demos[index].classList.add('showText');
      demoImgs[index].classList.add('showImg');
      headers[index].classList.add('showHeader');
      item.classList.add('highlight');
    });
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsT0FBTyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFVO0FBQ3hDLFVBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxNQUFJLFdBQVcsU0FBUyxnQkFBVCxDQUEwQixlQUExQixDQUFmO0FBQ0EsTUFBSSxRQUFRLFNBQVMsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQVo7QUFDQSxNQUFJLFdBQVcsU0FBUyxnQkFBVCxDQUEwQixLQUExQixDQUFmO0FBQ0EsTUFBSSxVQUFVLFNBQVMsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBZDtBQUNBLFdBQVMsT0FBVCxDQUFpQixVQUFTLElBQVQsRUFBZSxLQUFmLEVBQXFCOztBQUdwQyxTQUFLLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVU7QUFDdkMsZUFBUyxhQUFULENBQXVCLFlBQXZCLEVBQXFDLFNBQXJDLENBQStDLE1BQS9DLENBQXNELFdBQXREO0FBQ0EsZUFBUyxhQUFULENBQXVCLFdBQXZCLEVBQW9DLFNBQXBDLENBQThDLE1BQTlDLENBQXFELFVBQXJEO0FBQ0EsZUFBUyxhQUFULENBQXVCLGFBQXZCLEVBQXNDLFNBQXRDLENBQWdELE1BQWhELENBQXVELFlBQXZEO0FBQ0EsVUFBSSxNQUFNLFNBQVMsYUFBVCxDQUF1QixVQUF2QixDQUFWO0FBQ0EsVUFBRyxHQUFILEVBQVEsSUFBSSxTQUFKLENBQWMsTUFBZCxDQUFxQixTQUFyQjs7QUFFUixZQUFNLEtBQU4sRUFBYSxTQUFiLENBQXVCLEdBQXZCLENBQTJCLFVBQTNCO0FBQ0EsZUFBUyxLQUFULEVBQWdCLFNBQWhCLENBQTBCLEdBQTFCLENBQThCLFNBQTlCO0FBQ0EsY0FBUSxLQUFSLEVBQWUsU0FBZixDQUF5QixHQUF6QixDQUE2QixZQUE3QjtBQUNBLFdBQUssU0FBTCxDQUFlLEdBQWYsQ0FBbUIsV0FBbkI7QUFFRCxLQVpEO0FBZ0JELEdBbkJEO0FBb0JELENBMUJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG4gIGxldCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2xpc3QgbGknKTtcbiAgbGV0IGRlbW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnRfX3RleHQnKTtcbiAgbGV0IGRlbW9JbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG4gIGxldCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbW9fX2hlYWRlcicpO1xuICBuYXZJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KXtcblxuXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaGxpZ2h0JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvd1RleHQnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93VGV4dCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dIZWFkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93SGVhZGVyJyk7XG4gICAgICBsZXQgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dJbWcnKTtcbiAgICAgIGlmKGltZykgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dJbWcnKTtcblxuICAgICAgZGVtb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3Nob3dUZXh0Jyk7XG4gICAgICBkZW1vSW1nc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvd0ltZycpO1xuICAgICAgaGVhZGVyc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvd0hlYWRlcicpO1xuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcblxuICAgIH0pXG5cblxuXG4gIH0pXG59KVxuIl19
