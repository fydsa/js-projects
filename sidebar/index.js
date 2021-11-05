const buttons = document.querySelectorAll("button");
const buttons_text = document.querySelectorAll("button > div > span");

const indicator = document.querySelector(".indicator");

const nav = document.querySelector("nav");

const svg_path = document.querySelectorAll("path");

svg_path.forEach((el) => el.setAttribute("fill", "#c0c0c0"));

svg_path.forEach((el) => el.setAttribute("stroke-width", "1")); //#c0c0c0

svg_path.forEach((el) => el.setAttribute("stroke", "#c0c0c0"));

buttons.forEach((button) => button.addEventListener("click", clickItem));

function clickItem(e) {
  let selected_item = e.target;

  let inner_text = selected_item.querySelector("span");
  inner_text.className = "selected-text";

  indicator.style.top = `${
    -nav.getBoundingClientRect().top +
    selected_item.getBoundingClientRect().top -
    2
  }px`;

  buttons_text.forEach((el) => {
    if (el !== inner_text) {
      el.className = "deselected-text";
    }
  });
}
