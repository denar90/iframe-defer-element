'use strict';

const availableAttributes = ['data-width', 'data-height', 'data-src'];

class DeferedIframe extends HTMLElement {

  constructor() {
    super();

    const iframe = document.createElement('iframe');
    // Create shadow DOM for the component.
    const shadowRoot = this.attachShadow({mode: 'open'});

    this.setAttributes(this, iframe);
    shadowRoot.appendChild(iframe);
  }

  setAttributes(element, iframe) {
    // set available attributes
    availableAttributes.forEach(function(name) {
      const value = element.getAttribute(name);
      const elementAttrName = name.replace('data-', '');

      if (value !== undefined) {
        iframe.setAttribute(elementAttrName, value);
      }
    });
    // set required attributes
    element.setAttribute('allowfullscreen', '');
    element.setAttribute('frameborder', 0);
  }
}

window.addEventListener('load', () => {
  customElements.define('defered-iframe', DeferedIframe);
});
