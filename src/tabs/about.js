import "../public/styling/about.css";

const content = {
  background: {
    paragraphs: [
      "Why are you looking here? Why'd you click on this? What business is it of yours? I'm nobody. I'm worthless. You're better off not knowing.",
      "Fine. If you must know, my name isn't Restares. That's what those fool Sons of Honor call me. My real name is Kalak, known in Vorinism as Kelek'Elin, Herald of the Almighty.",
      "I came here on the run from the Ghostbloods. They want to kill me, I think, though I don't know how they'd manage it. Regardless, I know things they'd like to learn, and I'd rather they didn't get them out of me.",
      "Now please, go back to your table and stop asking me so many questions.",
    ],
  },
  hours: [
    {
      day: "Jesel",
      isOpen: true,
      times: {
        open: "10AM",
        close: "6PM",
      },
    },
    {
      day: "Nanel",
      isOpen: true,
      times: {
        open: "10AM",
        close: "6PM",
      },
    },
    {
      day: "Chachel",
      isOpen: true,
      times: {
        open: "10AM",
        close: "6PM",
      },
    },
    {
      day: "Vevel",
      isOpen: true,
      times: {
        open: "10AM",
        close: "2PM",
      },
    },
    {
      day: "Palahel",
      isOpen: false,
    },
  ],
};

export default function render() {
  const mainDiv = document.createElement("div");
  mainDiv.id = "aboutContent";

  const backgroundDiv = document.createElement("div");
  backgroundDiv.classList.add("background");

  for (const line of content.background.paragraphs) {
    const paragraph = document.createElement("p");
    paragraph.textContent = line;
    backgroundDiv.appendChild(paragraph);
  }

  mainDiv.appendChild(backgroundDiv);

  const hoursDiv = document.createElement("div");
  hoursDiv.classList.add("hours");

  const hoursHeading = document.createElement("h2");
  hoursHeading.textContent = "Hours";
  hoursDiv.appendChild(hoursHeading);

  const hoursList = document.createElement("ul");
  hoursDiv.classList.add("hours");

  // TODO: make this a table or otherwise more standard format
  for (const entry of content.hours) {
    const listItem = document.createElement("li");

    listItem.textContent = entry.isOpen
      ? `${entry.day}: ${entry.times.open} - ${entry.times.close}`
      : `${entry.day}: Closed`;

    hoursList.appendChild(listItem);
  }

  hoursDiv.appendChild(hoursList);
  mainDiv.appendChild(hoursDiv);

  return mainDiv;
}
