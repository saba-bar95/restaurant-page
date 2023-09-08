import "./contact.css";

export default function contact() {
  const div = document.createElement("div");
  div.setAttribute("id", "contact");
  const h1 = document.createElement("h1");
  h1.textContent = "contact";
  div.appendChild(h1);
  return div;
}
