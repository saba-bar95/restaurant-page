import "./header.css";

export default function makeHeader() {
  const div = document.createElement("div");
  div.classList.add("header");
  div.setAttribute("id", "header");
  const container = document.createElement("div");
  container.classList.add("header-container");

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const listArr = ["home", "menu", "contact", "order online"];
  const h1 = document.createElement("h1");
  h1.textContent = "Burger Queen";

  div.appendChild(container);
  container.appendChild(h1);
  container.appendChild(nav);
  nav.appendChild(ul);

  listArr.forEach((el) => {
    const list = document.createElement("li");
    list.classList.add("child-list");
    if (el !== "order online") list.classList.add(el);
    if (el === "home") list.classList.add("selected");
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
