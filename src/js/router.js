import Login from "../pages/login/login";
import Landing from "../pages/landing/landing";

const routes = [
  { hash: "", view: Landing },
  { hash: "#login", view: Login },
  // { hash: "#blocks", view: Blockly },
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
    if (p.type == 'reload' || p.type == 'navigate' || p.type == 'back_forward')
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