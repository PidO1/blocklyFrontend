import SignUp from "./views/SignUp";
import Login from "../pages/login/login";
import PostView from "./views/PostView";
import About from "./views/About";
import dashboard from "../pages/dashboard/dashboard";
import users from "../pages/users/users";
import landing from "../pages/landing/landing";

const routes = [
  { hash: "", view: landing },
  { hash: "#", view: About },
  { hash: "#signup", view: SignUp },
  { hash: "#niks", view: PostView },
  { hash: "#login", view: Login },
  { hash: "#dashboard", view:dashboard },
  { hash: "#users", view:users},
  { hash: "#user_dashboard", view:user_dashboard},
  {hash: '#add_admin', view:add_admin}

];

var match;

async function loadContent() {
  match = routes.find(potentialMatch => potentialMatch.hash == location.hash);
  document.querySelector("#app").innerHTML = await new match.view().getHtml();
  console.log(match.hash + " found it");
  console.log(location.hash);
  new match.view().afterInit();
}

function hashLoad() {
  var perfEntries = performance.getEntriesByType("navigation");
  for (var i = 0; i < perfEntries.length; i++) {
    var p = perfEntries[i];
    console.log("type = " + p.type);
    if (p.type == 'reload' || p.type == 'navigation' || p.type == 'back_forward')
      loadContent();
  }
}

//tried using a named function, but wouldn't trigger 
window.addEventListener("hashchange", async function() {
  match = routes.find(potentialMatch => potentialMatch.hash == location.hash);
  document.querySelector("#app").innerHTML = await new match.view().getHtml();
  console.log(match.hash + " found it");
  console.log(location.hash);
  new match.view().afterInit();
});
hashLoad();