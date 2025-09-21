import "./public/styling/styles.css";
import {
  renderAbout,
  renderContact,
  renderHome,
  renderMenu,
} from "./tabs/index.js";

function addButtonHandler(buttonId, renderer) {
  const button = document.querySelector(`#${buttonId}`);
  button.addEventListener("click", (event) => {
    const prevTab = document.querySelector(".tab.active");
    if (!!prevTab) {
      prevTab.classList.remove("active");
    }

    const clickedTab = event.target.parentElement;
    clickedTab.classList.add("active");

    renderContent(renderer);
  });
}

function renderContent(renderTabContents) {
  const content = document.querySelector("#content");

  content.replaceChildren();

  const mainDiv = renderTabContents();
  content.appendChild(mainDiv);
}

addButtonHandler("aboutTab", renderAbout);
addButtonHandler("contactTab", renderContact);
addButtonHandler("homeTab", renderHome);
addButtonHandler("menuTab", renderMenu);

const defaultTabButton = document.querySelector("#homeTab");
defaultTabButton.dispatchEvent(new Event("click"));
