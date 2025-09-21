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

  const children = renderTabContents();
  for (const child of children) {
    content.appendChild(child);
  }
}

addButtonHandler("aboutTab", renderAbout);
addButtonHandler("contactTab", renderContact);
addButtonHandler("homeTab", renderHome);
addButtonHandler("menuTab", renderMenu);
