const content = {
  mainParagraph:
    "Who are you? What are you doing here? Listen, I don't want any trouble; I just want to be left alone. Especially if you're here asking questions about Ba-ado Mishram.",
  subParagraph:
    "Alright, if you insist on staying, know that I'm not a human, and I don't eat human food. Stormlight is all I have. If you want real food, go talk to Sixteen. He has food. I think.",
};

export default function render() {
  const children = [];

  const mainParagraph = document.createElement("p");
  mainParagraph.textContent = content.mainParagraph;
  children.push(mainParagraph);

  const subParagraph = document.createElement("p");
  subParagraph.textContent = content.subParagraph;
  children.push(subParagraph);

  return children;
}
