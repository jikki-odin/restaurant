const content = {
  mainParagraph:
    "This Restar-aunt is strictly BYOB (Bring Your Own Broams). Prices below reflect this policy. Soulcasting is optional.",
  menuItems: [
    {
      name: "Diamond Broam",
      description: "Clean, with a smooth finish. A local favorite.",
      price: "1 Diamond Broam",
    },
    {
      name: "Ruby Broam",
      description: "Spicy, but subtle.",
      price: "1 Ruby Broam",
    },
    {
      name: "Emerald Broam",
      description: "Sweet and minty, like toothpaste and leaves.",
      price: "1 Ruby Broam",
    },
    {
      name: "Manifest Water",
      description: "Condensation from a peak that has never known warmth.",
      price: "Free",
    },
  ],
};

export default function render() {
  const children = [];

  const mainParagraph = document.createElement("p");
  mainParagraph.textContent = content.mainParagraph;
  children.push(mainParagraph);

  for (const { name, description, price } of content.menuItems) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const nameHeading = document.createElement("h2");
    nameHeading.classList.add("name");
    nameHeading.textContent = name;
    menuItem.appendChild(nameHeading);

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.classList.add("description");
    descriptionParagraph.textContent = description;
    menuItem.appendChild(descriptionParagraph);

    const priceLine = document.createElement("div");
    priceLine.classList.add("price");
    priceLine.textContent = price;
    menuItem.appendChild(priceLine);

    children.push(menuItem);
  }

  return children;
}
