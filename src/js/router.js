import Login from "../pages/login/login";
import Landing from "../pages/landing/landing";
import Sample from "../pages/sample/sample";
import { getUserFromCookie } from "./UserManager";

const routes = [
  { hash: "", view: Landing },
  { hash: "#login", view: Login },
  { hash: "#sample", view: Sample },
  // { hash: "#blocks", view: Blockly },
];

var match;

async function loadContent() {
  getUserFromCookie();
  match = routes.find(potentialMatch => potentialMatch.hash == location.hash);
  document.querySelector("#app").innerHTML = await new match.view().getHtml();
  console.log(match.hash + " found it");
  console.log(location.hash);
  new match.view().afterInit();
}

function hashLoad() {
  getUserFromCookie();
  var perfEntries = performance.getEntriesByType("navigation");
  for (var i = 0; i < perfEntries.length; i++) {
    var p = perfEntries[i];
    console.log("type = " + p.type);
    if (p.type == 'reload' || p.type == 'navigate' || p.type == 'back_forward')
      loadContent();
  }
}

//tried using a named function, but wouldn't trigger 
window.addEventListener("hashchange", async function () {
  getUserFromCookie();
  match = routes.find(potentialMatch => potentialMatch.hash == location.hash);
  document.querySelector("#app").innerHTML = await new match.view().getHtml();
  console.log(match.hash + " found it");
  console.log(location.hash);
  new match.view().afterInit();
});
hashLoad();

export const navToPage = (page = '') => {
  window.location.href = '/blocks.html';
}