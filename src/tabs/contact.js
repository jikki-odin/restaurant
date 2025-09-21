import "../public/styling/contact.css";

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
  const mainDiv = document.createElement("div");
  mainDiv.id = "contactContent";

  const mainParagraph = document.createElement("p");
  mainParagraph.classList.add("preamble");
  mainParagraph.textContent = content.mainParagraph;
  mainDiv.appendChild(mainParagraph);

  const contactSection = document.createElement("div");
  contactSection.classList.add("contact-info");

  const addressDiv = document.createElement("div");
  addressDiv.classList.add("address");

  const addressHeading = document.createElement("h2");
  addressHeading.textContent = "Address";
  addressDiv.appendChild(addressHeading);

  const addressContentDiv = document.createElement("div");
  addressContentDiv.classList.add("address-lines");

  for (const line of content.address.lines) {
    const paragraph = document.createElement("p");
    paragraph.textContent = line;
    addressContentDiv.appendChild(paragraph);
  }

  addressDiv.appendChild(addressContentDiv);
  contactSection.appendChild(addressDiv);

  const secondaryContacts = document.createElement("div");
  secondaryContacts.classList.add("secondary-contacts");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = `Phone: ${content.phone}`;
  secondaryContacts.appendChild(phoneNumber);

  const email = document.createElement("p");
  email.textContent = `Email: ${content.email}`;
  secondaryContacts.appendChild(email);

  const fax = document.createElement("p");
  fax.textContent = `Fax: ${content.fax}`;
  secondaryContacts.appendChild(fax);

  contactSection.appendChild(secondaryContacts);
  mainDiv.appendChild(contactSection);

  return mainDiv;
}
