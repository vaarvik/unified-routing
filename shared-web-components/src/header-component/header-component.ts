declare global {
    interface HTMLElementTagNameMap {
        'header-component': SimpleHeaderComponent;
    }
}

export class SimpleHeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open',
        }).innerHTML = `<p style="color: red; display: block; width: 100px; height: 100px; background-color: blue; z-index: 99;">Hello World!</p>`;
    }
}

customElements.define('header-component', SimpleHeaderComponent);
