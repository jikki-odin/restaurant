import renderHome from "./home.js";
import renderAbout from "./about.js";
import renderMenu from "./menu.js";
import renderContact from "./contact.js";

const homeTab = document.querySelector("#homeTab");
const aboutTab = document.querySelector("#aboutTab");
const menuTab = document.querySelector("#menuTab");
const contactTab = document.querySelector("#contactTab");

homeTab.addEventListener("click", () => {
  renderContent(renderHome);
});

aboutTab.addEventListener("click", () => {
  renderContent(renderAbout);
});

menuTab.addEventListener("click", () => {
  renderContent(renderMenu);
});

contactTab.addEventListener("click", () => {
  renderContent(renderContact);
});

function renderContent(renderTabContents) {
  const content = document.querySelector("#content");

  content.replaceChildren();

  const children = renderTabContents();
  for (const child of children) {
    content.appendChild(child);
  }
}

console.log("Ayy lmao");
