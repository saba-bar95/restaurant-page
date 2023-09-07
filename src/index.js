import makeHeader from "./header";
import makeMainContent from "./main-content";
import "./styles.css";

const content = document.querySelector("#content");
content.appendChild(makeHeader());
content.appendChild(makeMainContent());
const mainContent = document.querySelector(".main-content");
const nav = document.querySelector("nav");
const listNodes = document.querySelectorAll(".child-list");

nav.addEventListener("click", function (e) {
  listNodes.forEach((el) => {
    el.classList.remove("selected");
  });
  if (e.target.classList.contains("child-list"))
    e.target.classList.add("selected");
});
