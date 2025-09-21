const content = {
  mainParagraph:
    "Look, you already know what I'm gonna say here. Do not contact me. Do not give this information out. Leave me in peace, I beg you.",
  address: {
    lines: [
      "Top corner house",
      "Southern Wall",
      "Lasting Integrity, Shadesmar",
    ],
  },
  phone: "867-5309",
  email: "kelek@willshapers.org",
  fax: "Are you kidding?",
};

export default function render() {
  const children = [];

  const mainParagraph = document.createElement("p");
  mainParagraph.textContent = content.mainParagraph;
  children.push(mainParagraph);

  const addressDiv = document.createElement("div");

  const addressHeading = document.createElement("h2");
  addressHeading.textContent = "Address";
  addressDiv.appendChild(addressHeading);

  for (const line of content.address.lines) {
    const paragraph = document.createElement("p");
    paragraph.textContent = line;
    addressDiv.appendChild(paragraph);
  }

  children.push(addressDiv);

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = `Phone: ${content.phone}`;
  children.push(phoneNumber);

  const email = document.createElement("p");
  email.textContent = `Email: ${content.email}`;
  children.push(email);

  const fax = document.createElement("p");
  fax.textContent = `Fax: ${content.fax}`;
  children.push(fax);

  return children;
}
