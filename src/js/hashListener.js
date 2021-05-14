import SignUp from "./views/SignUp";
import Login from "../pages/login/login";
import PostView from "./views/PostView";
import About from "./views/About";

const routes = [
  { hash: "#", view: About },
  { hash: "#signup", view: SignUp },
  { hash: "#niks", view: PostView },
  { hash: "#login", view: Login }
];

var match;


window.addEventListener("hashchange", async function() {
  match = routes.find(potentialMatch => potentialMatch.hash == location.hash);
  document.querySelector("#app").innerHTML = await new match.view().getHtml();
  console.log(match.hash+" found it")
    console.log(location.hash)
    
  });
  