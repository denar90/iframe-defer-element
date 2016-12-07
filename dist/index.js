'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);
var availableAttributes = ['data-width', 'data-height', 'data-src'];

var DeferedIframe = function (_CustomElement2) {
  _inherits(DeferedIframe, _CustomElement2);

  function DeferedIframe() {
    _classCallCheck(this, DeferedIframe);

    var _this = _possibleConstructorReturn(this, (DeferedIframe.__proto__ || Object.getPrototypeOf(DeferedIframe)).call(this));

    var iframe = document.createElement('iframe');
    // Create shadow DOM for the component.
    var shadowRoot = _this.attachShadow({ mode: 'open' });

    _this.setAttributes(_this, iframe);
    shadowRoot.appendChild(iframe);
    return _this;
  }

  _createClass(DeferedIframe, [{
    key: 'setAttributes',
    value: function setAttributes(element, iframe) {
      // set available attributes
      availableAttributes.forEach(function (name) {
        var value = element.getAttribute(name);
        var elementAttrName = name.replace('data-', '');

        if (value !== undefined) {
          iframe.setAttribute(elementAttrName, value);
        }
      });
      // set required attributes
      element.setAttribute('allowfullscreen', '');
      element.setAttribute('frameborder', 0);
    }
  }]);

  return DeferedIframe;
}(_CustomElement);

window.addEventListener('load', function () {
  customElements.define('defered-iframe', DeferedIframe);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLHNCQUFzQixDQUFDLFlBQUQsRUFBZSxhQUFmLEVBQThCLFVBQTlCLENBQTVCOztJQUVNLGE7OztBQUVKLDJCQUFjO0FBQUE7O0FBQUE7O0FBR1osUUFBTSxTQUFTLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0E7QUFDQSxRQUFNLGFBQWEsTUFBSyxZQUFMLENBQWtCLEVBQUMsTUFBTSxNQUFQLEVBQWxCLENBQW5COztBQUVBLFVBQUssYUFBTCxRQUF5QixNQUF6QjtBQUNBLGVBQVcsV0FBWCxDQUF1QixNQUF2QjtBQVJZO0FBU2I7Ozs7a0NBRWEsTyxFQUFTLE0sRUFBUTtBQUM3QjtBQUNBLDBCQUFvQixPQUFwQixDQUE0QixVQUFTLElBQVQsRUFBZTtBQUN6QyxZQUFNLFFBQVEsUUFBUSxZQUFSLENBQXFCLElBQXJCLENBQWQ7QUFDQSxZQUFNLGtCQUFrQixLQUFLLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLEVBQXRCLENBQXhCOztBQUVBLFlBQUksVUFBVSxTQUFkLEVBQXlCO0FBQ3ZCLGlCQUFPLFlBQVAsQ0FBb0IsZUFBcEIsRUFBcUMsS0FBckM7QUFDRDtBQUNGLE9BUEQ7QUFRQTtBQUNBLGNBQVEsWUFBUixDQUFxQixpQkFBckIsRUFBd0MsRUFBeEM7QUFDQSxjQUFRLFlBQVIsQ0FBcUIsYUFBckIsRUFBb0MsQ0FBcEM7QUFDRDs7Ozs7O0FBR0gsT0FBTyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFNO0FBQ3BDLGlCQUFlLE1BQWYsQ0FBc0IsZ0JBQXRCLEVBQXdDLGFBQXhDO0FBQ0QsQ0FGRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXZhaWxhYmxlQXR0cmlidXRlcyA9IFsnZGF0YS13aWR0aCcsICdkYXRhLWhlaWdodCcsICdkYXRhLXNyYyddO1xuXG5jbGFzcyBEZWZlcmVkSWZyYW1lIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAvLyBDcmVhdGUgc2hhZG93IERPTSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVzKHRoaXMsIGlmcmFtZSk7XG4gICAgc2hhZG93Um9vdC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICB9XG5cbiAgc2V0QXR0cmlidXRlcyhlbGVtZW50LCBpZnJhbWUpIHtcbiAgICAvLyBzZXQgYXZhaWxhYmxlIGF0dHJpYnV0ZXNcbiAgICBhdmFpbGFibGVBdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICAgIGNvbnN0IGVsZW1lbnRBdHRyTmFtZSA9IG5hbWUucmVwbGFjZSgnZGF0YS0nLCAnJyk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoZWxlbWVudEF0dHJOYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gc2V0IHJlcXVpcmVkIGF0dHJpYnV0ZXNcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywgJycpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdmcmFtZWJvcmRlcicsIDApO1xuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2RlZmVyZWQtaWZyYW1lJywgRGVmZXJlZElmcmFtZSk7XG59KTtcbiJdfQ==