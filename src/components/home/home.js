import "./home.css";

export default function home() {
  const div = document.createElement("div");
  div.setAttribute("id", "home");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const button = document.createElement("button");

  h1.textContent = "Enjoy Our Delicios Meal";
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non quos quia";
  p.textContent += "minima ad a dicta sint atque optio assumenda.";
  button.classList.add("order-btn");
  button.textContent = "order online";

  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(button);
  return div;
}
