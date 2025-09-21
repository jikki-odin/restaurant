import "./public/styling/styles.css";
import {
  renderAbout,
  renderContact,
  renderHome,
  renderMenu,
} from "./tabs/index.js";

function addButtonHandler(buttonId, renderer) {
  const button = document.querySelector(`#${buttonId}`);
  button.addEventListener("click", () => renderContent(renderer));
}

function renderContent(renderTabContents) {
  const content = document.querySelector("#content");

  content.replaceChildren();

  const children = renderTabContents();
  for (const child of children) {
    content.appendChild(child);
  }
}

addButtonHandler("aboutTab", renderAbout);
addButtonHandler("contactTab", renderContact);
addButtonHandler("homeTab", renderHome);
addButtonHandler("menuTab", renderMenu);
