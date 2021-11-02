const dot_one = document.querySelector("div > div:nth-child(1)");
const dot_three = document.querySelector("div > div:nth-child(3)");
const dot_five = document.querySelector("div > div:nth-child(5)");
const dot_two_four = document.querySelectorAll("div > div:nth-child(even)");

const loader = document.querySelector(".loader");

setInterval(() => {
  let dot_one_blink_animation = dot_one.style.animation;

  if (!dot_one_blink_animation.includes("blink-animation")) {
    dot_one.style.animation = "blink-animation 0.5s infinite 0s";
    dot_five.style.animation = "blink-animation 0.5s infinite 0.2s";
  } else {
    dot_one.style.animation = "none";
    dot_five.style.animation = "none";
  }

  let dot_two_blink_animation = dot_two_four[0].style.animation;

  if (!dot_two_blink_animation.includes("blink-animation")) {
    dot_two_four[0].style.animation = "blink-animation 0.5s infinite 0.06s";
    dot_two_four[1].style.animation = "blink-animation 0.5s infinite 0.16s";
  } else {
    dot_two_four.forEach((el) => {
      el.style.animation = "none";
    });
  }

  let dot_three_blink_animation = dot_three.style.animation;

  if (!dot_three_blink_animation.includes("blink-animation")) {
    dot_three.style.animation = "blink-animation 0.5s infinite 0.12s";
  } else {
    dot_three.style.animation = "none";
  }
}, 1000);

setInterval(() => {
  let loader_rotate_up = loader.style.animation;

  if (!loader_rotate_up.includes("loader-rotate-up")) {
    loader.style.animation = "loader-rotate-up 3s ease-out 1s";
  } else {
    loader.style.animation = "none";
  }
}, 4000);

setInterval(() => {
  let loader_rotate_down = loader.style.animation;

  if (!loader_rotate_down.includes("loader-rotate-down")) {
    loader.style.animation = "loader-rotate-down 3s ease-out 1s";
  } else {
    loader.style.animation = "none";
  }
}, 8000);

setInterval(() => {
  let dot_one_animation = dot_one.style.animation;

  if (!dot_one_animation.includes("resize-animation-one")) {
    dot_one.style.animation = "resize-animation-one 1s 0.2s";
    dot_five.style.animation = "resize-animation-one 1s 0.2s";
  } else {
    dot_one.style.animation = "none";
    dot_five.style.animation = "none";
  }

  let dot_two_animation = dot_two_four[0].style.animation;

  if (!dot_two_animation.includes("resize-animation-two")) {
    dot_two_four.forEach((el) => {
      el.style.animation = "resize-animation-two 1s 0.3s";
    });
  } else {
    dot_two_four.forEach((el) => {
      el.style.animation = "none";
    });
  }

  let dot_three_animation = dot_three.style.animation;

  if (!dot_three_animation.includes("resize-animation-three")) {
    dot_three.style.animation = "resize-animation-three 1.2s 0.2s";
  } else {
    dot_three.style.animation = "none";
  }
}, 3000);
