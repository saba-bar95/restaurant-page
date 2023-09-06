export default function makeHeader() {
  const div = document.createElement("div");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const listArr = ["home", "about", "menu", "contact", "order online"];

  div.appendChild(nav);
  nav.appendChild(ul);

  listArr.forEach((el) => {
    const list = document.createElement("li");
    if (el === "order online") {
      const button = document.createElement("button");
      list.appendChild(button);
      button.textContent = el;
      button.classList.add("order-btn");
      ul.appendChild(list);
      return;
    }
    list.textContent = el;
    ul.appendChild(list);
  });

  return div;
}
