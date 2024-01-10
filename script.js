
    // JavaScript for Drag and Drop functionality
    function allowDrop(ev) {
      ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }

      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }


    // JavaScript for Custom Element
    class CustomDropdown extends HTMLElement {
      constructor() {
        super();
        const template = document.getElementById('custom-dropdown').content;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.cloneNode(true));
      }
    }
    customElements.define('custom-dropdown', CustomDropdown);