import * as styles from './header-component.module.css';

export class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // Initialization and manipulation of content moved here
        this.innerHTML = `<p class="${styles.header}">Hello World!</p>`;
    }
}

customElements.define('header-component', HeaderComponent);

declare global {
    interface HTMLElementTagNameMap {
        'header-component': HeaderComponent;
    }
}
