import "./home.css";

export default function home() {
  const div = document.createElement("div");
  div.setAttribute("id", "home");
  const h1 = document.createElement("h1");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const button = document.createElement("button");

  h1.textContent = "ALL THE INGREDIENTS FOR AN UNFORGETTABLE GET TOGETHER";
  p1.textContent =
    "What lifts any get together to another level? Answer: when delicious";
  p1.textContent +=
    "cuisine is combined with laughs, chatter, fun and a real sense of occasion.";
  p2.textContent =
    "Food unites everyone. Anniversaries, birthdays, retirements, christenings or";
  p2.textContent +=
    "whatever else should be marked, are all celebrated in The Restaurant.";
  button.classList.add("order-btn");
  button.textContent = "order online";

  div.appendChild(h1);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(button);
  return div;
}
