'use strict';

class WC extends HTMLElement {
  // Lifecycle components
  constructor() {
    super();
    console.log('constructor', this);
    // Comprueba si es shadow
    if(this.isShadow) {
      this.shadow = this.attachShadow({mode: 'open'});
    }

    this.state = Object.freeze(this.initialState);
  }

  connectedCallback() {
    console.info('connectedCallback', this);
    this.render(); // Se llama al conectarse al DOM
  }

  disconnectedCallback() {
    console.info('disconnectedCallback', this);
  }

  // Se llama cuando se añade un atributo
  attributeChangedCallback(attr, oldValue, newValue, namespace) {
    console.info('attributeChangedCallback', this);
    this.render();
  }

  adoptedCallback() {
    console.info('adoptedCallback', this);
  }

  // ****************************************
  get template() {
    return '';
  }

  get content() {
    let content = this.shadow || this;
    return content.innerHTML;
  }

  set content(value) {
    let content = this.shadow || this;
    content.innerHTML = value;
  }

  // Se llama cuando el componente
  // se conecta en el DOM
  render() {
    this.content = this.template;
  }

  // Shadow DOM
  // Este caracteristica encapsula el codigo
  // No permite que elementos fuera de su entorno
  // accedan a el, ni tampoco sean modificados sus estilos
  get isShadow() {
    return false;
  }


  // State
  // Son parametros donde los componentes
  // estan pendiente y cada cambio lo renderiza
  get initialState() {
    return {};
  }

  set setState(newState) {
    this.state = newState;
    this.render(); // Cualquier cambio se ve reflejado inmediatamente
  }


  // Styles
  insertStyle() {
    if (!this.isShadow) {
      console.warn('Inline styles can collide when not using shadow elements');
    }

    return `<style>${this.style}</style>`
  }

}