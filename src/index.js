import makeHeader from "./components/header/header";
import home from "./components/home/home";
import menu from "./components/menu/menu";
import contact from "./components/contact/contact";
import "./index.css";

const content = document.querySelector("#content");
content.appendChild(makeHeader());
content.appendChild(home());

const header = document.querySelector(".header");
const nav = document.querySelector("nav");
const listNodes = document.querySelectorAll(".child-list");

nav.addEventListener("click", function (e) {
  if (e.target.classList.contains("child-list")) {
    listNodes.forEach((el) => {
      el.classList.remove("selected");
    });
    e.target.classList.add("selected");

    if (header.nextElementSibling) {
      header.nextElementSibling.remove();
      if (e.target.classList.contains("menu")) content.appendChild(menu());
      if (e.target.classList.contains("home")) content.append(home());
      if (e.target.classList.contains("contact")) content.append(contact());
    }
  }
});
