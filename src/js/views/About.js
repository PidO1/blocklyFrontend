import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        alert("gethtml")
        return `
            <h1>About Page</h1>
            <p>What we are all about </p>
        `;
    }
}