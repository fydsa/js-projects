const buttons = document.querySelectorAll("button");

const indicator = document.querySelector(".indicator");

const nav = document.querySelector("nav");

const svg_path = document.querySelectorAll("path");

svg_path.forEach((el) => el.setAttribute("fill", "#c0c0c0"));

svg_path.forEach((el) => el.setAttribute("stroke-width", "0.7"));

svg_path.forEach((el) => el.setAttribute("stroke", "#c0c0c0"));

buttons.forEach((button) => button.addEventListener("click", clickItem));

const initial_selected_item = document.getElementById("2");

let initial_selected_item_text = initial_selected_item.querySelector("span");
let initial_selected_item_svg = initial_selected_item.querySelector("svg");

initial_selected_item_text.className = "selected-text";

initial_selected_item_svg.setAttribute("stroke", "#ffffff");
initial_selected_item_svg.style.opacity = "1";

localStorage.setItem("stored_selected_item_id", "2");

function clickItem(e) {
  let previous_selected_item = document.getElementById(
    localStorage.getItem("stored_selected_item_id")
  );

  let previous_selected_item_text =
    previous_selected_item.querySelector("span");
  let previous_selected_item_svg = previous_selected_item.querySelector("svg");

  previous_selected_item_text.className = "deselected-text";

  previous_selected_item_svg.setAttribute("stroke", "#c0c0c0");
  previous_selected_item_svg.style.opacity = "0.5";

  let selected_item = e.target;

  localStorage.setItem(
    "stored_selected_item_id",
    selected_item.querySelector("div").getAttribute("id")
  );

  let inner_text = selected_item.querySelector("span");
  let inner_svg = selected_item.querySelector("svg");

  inner_text.className = "selected-text";

  inner_svg.setAttribute("stroke", "#ffffff");
  inner_svg.style.opacity = "1";

  indicator.style.top = `${
    -nav.getBoundingClientRect().top +
    selected_item.getBoundingClientRect().top -
    2
  }px`;
}
