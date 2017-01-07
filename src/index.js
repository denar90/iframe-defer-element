import { loaded } from 'document-promises';

customElements.define('iframe-defer', class extends HTMLElement {
  connectedCallback() {
    loaded.then(() => {
      if (!this.closest(':root')) return;

      const iframe = document.createElement('iframe');

      for (const attr of this.attributes) {
        iframe.setAttribute(attr.name, attr.value);
      }

      this.append(iframe);
    });
  }
});
