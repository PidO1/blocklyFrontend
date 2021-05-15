import AbstractView from "../../js/views/AbstractView";


export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Login");
  }

  modified = [false, false];

  async afterInit() {
    document.getElementById('loginShowPassword').addEventListener('click', () => {
      var x = document.getElementById("loginPassword");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    });
    document.getElementById('loginEmail').addEventListener('change', () => {
      this.modified[0] = true;
      if (this.modified[0] && this.modified[1])
        document.getElementById('loginButtonLogin').style.flex = '2';
    });
    document.getElementById('loginPassword').addEventListener('change', () => {
      this.modified[1] = true;
      if (this.modified[0] && this.modified[1])
        document.getElementById('loginButtonLogin').style.flex = '2';
    });
  }

  //@html:start
async getHtml() {
return `
<section class="login">
  <form class="middle">
    <h2>Login</h2>
    <input name="email" autocomplete="true" type="email" placeholder="Email" id="loginEmail" />
    <input name="password" autocomplete="true" type="password" placeholder="Password" id="loginPassword" />
    <p style="display: flex; justify-content: flex-end;">
      <input type="checkbox" id="loginShowPassword"/>
      <label for="loginShowPassword">Show Password</label> 
    </p> 
    <div class="button-bar">
      <button id='loginButtonRegister' type="button">Register</button>
      <button id='loginButtonLogin' type="button">Login</button> 
    </div>
  </form>
</section>

`;
}
//@html:end
}