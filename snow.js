const body = document.querySelector("body");
const MIN_DURATION = 10;
function letItSnow() {
  const div = document.createElement("div");
  div.classList.add("snowflake");
  const delay = Math.random() * 10;
  const initialOpacity = Math.random();
  const duration = Math.random() * 20 + MIN_DURATION;

  div.style.left = `${Math.random() * window.screen.width}px`;
  div.style.animationDelay = delay + "s";
  div.style.opacity = initialOpacity;
  div.style.animationDuration = duration + "s";
  body.appendChild(div);
}

for (let i = 0; i < 50; i++) {
  letItSnow();
}
