import "./menu.css";

export default function menu() {
  const div = document.createElement("div");
  div.setAttribute("id", "menu");
  const h1 = document.createElement("h1");
  h1.textContent = "BURGER";
  div.appendChild(h1);

  return div;
}
