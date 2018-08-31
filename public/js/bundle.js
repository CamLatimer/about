(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var btns = document.querySelectorAll('.panelTrig');
var contentPanels = document.querySelectorAll('.panel');
var contactForm = document.getElementById('contactForm');

btns.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      var displayHeight = panel.scrollHeight;
      panel.style.top = 0;
      panel.style.maxHeight = displayHeight + 'px';
      if (parseInt(panel.parentElement.style.maxHeight) > 0) {
        displayHeight += parseInt(panel.parentElement.style.maxHeight);
        panel.parentElement.style.maxHeight = displayHeight;
      }
    }
  });
});

contactForm.addEventListener('submit', function (event) {
  var email = validateEmail(contactForm);
  var message = validateMessage(contactForm);

  if (email === 'error') {
    event.preventDefault();
  } else if (message === 'error') {
    event.preventDefault();
  }
});

function validateEmail(form) {
  var regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var emailTest = regexp.test(form._replyto.value);
  if (emailTest === false) {
    form._replyto.style.borderColor = 'red';
    document.querySelector('.emailError').style.display = 'block';
    return 'error';
  }
}

function validateMessage(form) {
  if (form.message.value.trim() === '' || null) {
    form.message.style.borderColor = 'red';
    document.querySelector('.messageError').style.display = 'block';
    return 'error';
  }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sT0FBTyxTQUFTLGdCQUFULENBQTBCLFlBQTFCLENBQWI7QUFDQSxJQUFNLGdCQUFnQixTQUFTLGdCQUFULENBQTBCLFFBQTFCLENBQXRCO0FBQ0EsSUFBSSxjQUFjLFNBQVMsY0FBVCxDQUF3QixhQUF4QixDQUFsQjs7QUFHQSxLQUFLLE9BQUwsQ0FBYSxVQUFTLEdBQVQsRUFBYyxLQUFkLEVBQXFCO0FBQ2hDLE1BQUksZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBVTtBQUN0QyxRQUFJLFFBQVEsS0FBSyxrQkFBakI7QUFDQSxRQUFHLE1BQU0sS0FBTixDQUFZLFNBQWYsRUFBeUI7QUFDdkIsWUFBTSxLQUFOLENBQVksU0FBWixHQUF3QixJQUF4QjtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUksZ0JBQWdCLE1BQU0sWUFBMUI7QUFDQSxZQUFNLEtBQU4sQ0FBWSxHQUFaLEdBQWtCLENBQWxCO0FBQ0EsWUFBTSxLQUFOLENBQVksU0FBWixHQUF3QixnQkFBZ0IsSUFBeEM7QUFDQSxVQUFHLFNBQVMsTUFBTSxhQUFOLENBQW9CLEtBQXBCLENBQTBCLFNBQW5DLElBQWdELENBQW5ELEVBQXFEO0FBQ25ELHlCQUFpQixTQUFTLE1BQU0sYUFBTixDQUFvQixLQUFwQixDQUEwQixTQUFuQyxDQUFqQjtBQUNBLGNBQU0sYUFBTixDQUFvQixLQUFwQixDQUEwQixTQUExQixHQUFzQyxhQUF0QztBQUNEO0FBQ0Y7QUFDRixHQWJEO0FBY0QsQ0FmRDs7QUFpQkEsWUFBWSxnQkFBWixDQUE2QixRQUE3QixFQUF1QyxVQUFTLEtBQVQsRUFBZTtBQUNwRCxNQUFNLFFBQVEsY0FBYyxXQUFkLENBQWQ7QUFDQSxNQUFNLFVBQVUsZ0JBQWdCLFdBQWhCLENBQWhCOztBQUVBLE1BQUcsVUFBVSxPQUFiLEVBQXFCO0FBQ25CLFVBQU0sY0FBTjtBQUNELEdBRkQsTUFFTyxJQUFJLFlBQVksT0FBaEIsRUFBd0I7QUFDN0IsVUFBTSxjQUFOO0FBQ0Q7QUFFRixDQVZEOztBQVlBLFNBQVMsYUFBVCxDQUF1QixJQUF2QixFQUE0QjtBQUMxQixNQUFJLFNBQVMsMkpBQWI7QUFDQSxNQUFJLFlBQVksT0FBTyxJQUFQLENBQVksS0FBSyxRQUFMLENBQWMsS0FBMUIsQ0FBaEI7QUFDQSxNQUFHLGNBQWMsS0FBakIsRUFBdUI7QUFDckIsU0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixXQUFwQixHQUFrQyxLQUFsQztBQUNBLGFBQVMsYUFBVCxDQUF1QixhQUF2QixFQUFzQyxLQUF0QyxDQUE0QyxPQUE1QyxHQUFzRCxPQUF0RDtBQUNBLFdBQU8sT0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBUyxlQUFULENBQXlCLElBQXpCLEVBQThCO0FBQzVCLE1BQUcsS0FBSyxPQUFMLENBQWEsS0FBYixDQUFtQixJQUFuQixPQUE4QixFQUE5QixJQUFvQyxJQUF2QyxFQUE0QztBQUMxQyxTQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLFdBQW5CLEdBQWlDLEtBQWpDO0FBQ0EsYUFBUyxhQUFULENBQXVCLGVBQXZCLEVBQXdDLEtBQXhDLENBQThDLE9BQTlDLEdBQXdELE9BQXhEO0FBQ0EsV0FBTyxPQUFQO0FBQ0Q7QUFDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWxUcmlnJyk7XG5jb25zdCBjb250ZW50UGFuZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsJyk7XG5sZXQgY29udGFjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEZvcm0nKTtcblxuXG5idG5zLmZvckVhY2goZnVuY3Rpb24oYnRuLCBpbmRleCkge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGxldCBwYW5lbCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGlmKHBhbmVsLnN0eWxlLm1heEhlaWdodCl7XG4gICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZGlzcGxheUhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodFxuICAgICAgcGFuZWwuc3R5bGUudG9wID0gMDtcbiAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IGRpc3BsYXlIZWlnaHQgKyAncHgnO1xuICAgICAgaWYocGFyc2VJbnQocGFuZWwucGFyZW50RWxlbWVudC5zdHlsZS5tYXhIZWlnaHQpID4gMCl7XG4gICAgICAgIGRpc3BsYXlIZWlnaHQgKz0gcGFyc2VJbnQocGFuZWwucGFyZW50RWxlbWVudC5zdHlsZS5tYXhIZWlnaHQpO1xuICAgICAgICBwYW5lbC5wYXJlbnRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IGRpc3BsYXlIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9KVxufSlcblxuY29udGFjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpe1xuICBjb25zdCBlbWFpbCA9IHZhbGlkYXRlRW1haWwoY29udGFjdEZvcm0pO1xuICBjb25zdCBtZXNzYWdlID0gdmFsaWRhdGVNZXNzYWdlKGNvbnRhY3RGb3JtKTtcblxuICBpZihlbWFpbCA9PT0gJ2Vycm9yJyl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnZXJyb3InKXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbn0pO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGZvcm0pe1xuICBsZXQgcmVnZXhwID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gIGxldCBlbWFpbFRlc3QgPSByZWdleHAudGVzdChmb3JtLl9yZXBseXRvLnZhbHVlKTtcbiAgaWYoZW1haWxUZXN0ID09PSBmYWxzZSl7XG4gICAgZm9ybS5fcmVwbHl0by5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbEVycm9yJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgcmV0dXJuICdlcnJvcic7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlKGZvcm0pe1xuICBpZihmb3JtLm1lc3NhZ2UudmFsdWUudHJpbSgpID09PSAnJyB8fCBudWxsKXtcbiAgICBmb3JtLm1lc3NhZ2Uuc3R5bGUuYm9yZGVyQ29sb3IgPSAncmVkJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZUVycm9yJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgcmV0dXJuICdlcnJvcic7XG4gIH1cbn1cbiJdfQ==
