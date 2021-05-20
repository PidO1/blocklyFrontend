import AbstractView from "../../js/AbstractView";
import { isUserSignedIn, login, register } from "../../js/UserManager";


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
    const form = document.getElementById('userForm');
    form.addEventListener('submit', (ev) => {
      document.getElementById('loginButtonLogin').style.flex = '2';
      const _register = ev.submitter.id == 'loginButtonRegister';
      var inputs = form.elements;
      if (_register) {
        register(inputs['email'].value,inputs['password'].value).catch((e)=>console.error(e));
      } else {
        login(inputs['email'].value,inputs['password'].value).catch((e)=>console.error(e));
      }
      ev.preventDefault();
      return false;
    })
  }

  //@html:start
async getHtml() {
return `
<section class="login">
  <form class="middle" id="userForm">
    <h2>Login</h2>
    <input name="email" autocomplete="true" type="email" placeholder="Your Email" id="loginEmail" required />
    <input name="password" autocomplete="true" type="password" placeholder="Your Password" id="loginPassword" required/>
    <p style="display: flex; justify-content: flex-end;">
      <input type="checkbox" id="loginShowPassword" />
      <label for="loginShowPassword">Show Password</label> 
    </p> 
    <div class="button-bar">
      <button id='loginButtonRegister' type="submit">Register</button>  
      <button id='loginButtonLogin' type="submit">Login</button>   
    </div>
  </form>
</section>

`;
}
//@html:end
}