import AbstractView from "../../js/views/AbstractView";


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    //@html:start
async getHtml() {
return `
<section class="login">
  <h1>Login</h1>
  <p>Hello World</p>
  <p>This is the login page</p>
  <div>text in a div</div>
</section>
`;
}
//@html:end
}