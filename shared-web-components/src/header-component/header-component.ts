import * as styles from './header-component.module.css';

export class HeaderComponent extends HTMLElement {
    static get observedAttributes() {
        return ['text']; // Specify which attributes to observe
    }

    connectedCallback() {
        this.render(this.getAttribute('text'));
    }

    attributeChangedCallback(name: string, newValue: string) {
        if (name === 'text') {
            this.render(newValue);
        }
    }

    private render(text: string | null = 'Hello World!') {
        this.innerHTML = `<p class="${styles.header}">${text}</p>`;
    }
}

customElements.define('header-component', HeaderComponent);
