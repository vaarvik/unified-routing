interface HeaderComponentProps extends HTMLElement {
    text: string;
}

declare namespace JSX {
    interface IntrinsicElements {
        'header-component': HeaderComponentProps;
    }
}
