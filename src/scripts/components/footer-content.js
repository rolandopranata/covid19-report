class FooterContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="container">
            <p class="footer text-center">&copy;2021. dibuat oleh Rolando Pranata.</p>
        </footer>`;
    }
}

customElements.define('footer-content', FooterContent);