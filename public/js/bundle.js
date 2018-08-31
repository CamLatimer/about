(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var btns = document.querySelectorAll('.panelTrig');
var contentPanels = document.querySelectorAll('.panel');
var contactForm = document.getElementById('contactForm');

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
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
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sT0FBTyxTQUFTLGdCQUFULENBQTBCLFlBQTFCLENBQWI7QUFDQSxJQUFNLGdCQUFnQixTQUFTLGdCQUFULENBQTBCLFFBQTFCLENBQXRCO0FBQ0EsSUFBSSxjQUFjLFNBQVMsY0FBVCxDQUF3QixhQUF4QixDQUFsQjs7QUFFQSxLQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxLQUFLLE1BQXhCLEVBQWdDLEdBQWhDLEVBQW9DO0FBQ2xDLE9BQUssQ0FBTCxFQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQVU7QUFDMUMsUUFBSSxRQUFRLEtBQUssa0JBQWpCO0FBQ0EsUUFBRyxNQUFNLEtBQU4sQ0FBWSxTQUFmLEVBQXlCO0FBQ3ZCLFlBQU0sS0FBTixDQUFZLFNBQVosR0FBd0IsSUFBeEI7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJLGdCQUFnQixNQUFNLFlBQTFCO0FBQ0EsWUFBTSxLQUFOLENBQVksR0FBWixHQUFrQixDQUFsQjtBQUNBLFlBQU0sS0FBTixDQUFZLFNBQVosR0FBd0IsZ0JBQWdCLElBQXhDO0FBQ0EsVUFBRyxTQUFTLE1BQU0sYUFBTixDQUFvQixLQUFwQixDQUEwQixTQUFuQyxJQUFnRCxDQUFuRCxFQUFxRDtBQUNuRCx5QkFBaUIsU0FBUyxNQUFNLGFBQU4sQ0FBb0IsS0FBcEIsQ0FBMEIsU0FBbkMsQ0FBakI7QUFDQSxjQUFNLGFBQU4sQ0FBb0IsS0FBcEIsQ0FBMEIsU0FBMUIsR0FBc0MsYUFBdEM7QUFDRDtBQUNGO0FBQ0YsR0FiRDtBQWNEOztBQUVELFlBQVksZ0JBQVosQ0FBNkIsUUFBN0IsRUFBdUMsVUFBUyxLQUFULEVBQWU7QUFDcEQsTUFBTSxRQUFRLGNBQWMsV0FBZCxDQUFkO0FBQ0EsTUFBTSxVQUFVLGdCQUFnQixXQUFoQixDQUFoQjs7QUFFQSxNQUFHLFVBQVUsT0FBYixFQUFxQjtBQUNuQixVQUFNLGNBQU47QUFDRCxHQUZELE1BRU8sSUFBSSxZQUFZLE9BQWhCLEVBQXdCO0FBQzdCLFVBQU0sY0FBTjtBQUNEO0FBRUYsQ0FWRDs7QUFZQSxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsRUFBNEI7QUFDMUIsTUFBSSxTQUFTLDJKQUFiO0FBQ0EsTUFBSSxZQUFZLE9BQU8sSUFBUCxDQUFZLEtBQUssUUFBTCxDQUFjLEtBQTFCLENBQWhCO0FBQ0EsTUFBRyxjQUFjLEtBQWpCLEVBQXVCO0FBQ3JCLFNBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsV0FBcEIsR0FBa0MsS0FBbEM7QUFDQSxhQUFTLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsS0FBdEMsQ0FBNEMsT0FBNUMsR0FBc0QsT0FBdEQ7QUFDQSxXQUFPLE9BQVA7QUFDRDtBQUNGOztBQUVELFNBQVMsZUFBVCxDQUF5QixJQUF6QixFQUE4QjtBQUM1QixNQUFHLEtBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsSUFBbkIsT0FBOEIsRUFBOUIsSUFBb0MsSUFBdkMsRUFBNEM7QUFDMUMsU0FBSyxPQUFMLENBQWEsS0FBYixDQUFtQixXQUFuQixHQUFpQyxLQUFqQztBQUNBLGFBQVMsYUFBVCxDQUF1QixlQUF2QixFQUF3QyxLQUF4QyxDQUE4QyxPQUE5QyxHQUF3RCxPQUF4RDtBQUNBLFdBQU8sT0FBUDtBQUNEO0FBQ0YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsVHJpZycpO1xuY29uc3QgY29udGVudFBhbmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYW5lbCcpO1xubGV0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RGb3JtJyk7XG5cbmZvcihsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKXtcbiAgYnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgbGV0IHBhbmVsID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaWYocGFuZWwuc3R5bGUubWF4SGVpZ2h0KXtcbiAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkaXNwbGF5SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0XG4gICAgICBwYW5lbC5zdHlsZS50b3AgPSAwO1xuICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gZGlzcGxheUhlaWdodCArICdweCc7XG4gICAgICBpZihwYXJzZUludChwYW5lbC5wYXJlbnRFbGVtZW50LnN0eWxlLm1heEhlaWdodCkgPiAwKXtcbiAgICAgICAgZGlzcGxheUhlaWdodCArPSBwYXJzZUludChwYW5lbC5wYXJlbnRFbGVtZW50LnN0eWxlLm1heEhlaWdodCk7XG4gICAgICAgIHBhbmVsLnBhcmVudEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gZGlzcGxheUhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmNvbnRhY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgY29uc3QgZW1haWwgPSB2YWxpZGF0ZUVtYWlsKGNvbnRhY3RGb3JtKTtcbiAgY29uc3QgbWVzc2FnZSA9IHZhbGlkYXRlTWVzc2FnZShjb250YWN0Rm9ybSk7XG5cbiAgaWYoZW1haWwgPT09ICdlcnJvcicpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2Vycm9yJyl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG59KTtcblxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChmb3JtKXtcbiAgbGV0IHJlZ2V4cCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICBsZXQgZW1haWxUZXN0ID0gcmVnZXhwLnRlc3QoZm9ybS5fcmVwbHl0by52YWx1ZSk7XG4gIGlmKGVtYWlsVGVzdCA9PT0gZmFsc2Upe1xuICAgIGZvcm0uX3JlcGx5dG8uc3R5bGUuYm9yZGVyQ29sb3IgPSAncmVkJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWxFcnJvcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHJldHVybiAnZXJyb3InO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTWVzc2FnZShmb3JtKXtcbiAgaWYoZm9ybS5tZXNzYWdlLnZhbHVlLnRyaW0oKSA9PT0gJycgfHwgbnVsbCl7XG4gICAgZm9ybS5tZXNzYWdlLnN0eWxlLmJvcmRlckNvbG9yID0gJ3JlZCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VFcnJvcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHJldHVybiAnZXJyb3InO1xuICB9XG59XG4iXX0=
