const buttons = document.querySelectorAll("button");
const buttons_text = document.querySelectorAll("button > div > span");

const indicator = document.querySelector(".indicator");

const nav = document.querySelector("nav");

buttons.forEach((button) => button.addEventListener("click", clickItem));

function clickItem(e) {
  let selected_item = e.target;
  let inner_text = selected_item.querySelector("span");
  inner_text.className = "selected-text";

  indicator.style.top = `${
    -nav.getBoundingClientRect().top + selected_item.getBoundingClientRect().top
  }px`;

  buttons_text.forEach((el) => {
    if (el !== inner_text) {
      el.className = "deselected-text";
    }
  });
}
