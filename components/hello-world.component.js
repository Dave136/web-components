class HelloWorld extends WC {

  // example: <h2 text="Hola"></h2>   # Hola
  static get observedAttributes() {
    return ['name'];
  }

  get initialState() {
    return {
      text: 'Sample with State'
    }
  }

  get style() {
    return (
      `h1 {color: red}`
    )
  }

  get template() {
    return `<h1>${this.state.text} - attr: ${this.getAttribute('name')} - Styles: ${this.insertStyle()} :3 </h1>`;
  }

  get isShadow() {
    return true;
  }
}

customElements.define('hello-world', HelloWorld);