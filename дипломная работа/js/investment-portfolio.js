// progressbar.js
export function initProgressBar() {
  const arc = document.querySelector("#arc");
  const percentText = document.querySelector("#percent");
  const badge = document.querySelector("#badge");
  const slider = document.querySelector("#slider");

  const radius = 305;
  const arcLength = Math.PI * radius;

  arc.style.strokeDasharray = arcLength;

  function update() {
    const value = Number(slider.value);
    percentText.textContent = "до " + value + "%";

    const offset = arcLength - (arcLength * value) / 100;
    arc.style.strokeDashoffset = offset;

    let risk;
    if (value < 30) {
      risk = "Низкий риск";
    } else if (value < 75) {
      risk = "Средний риск";
    } else {
      risk = "Высокий риск";
    }
    badge.textContent = risk;
  }

  slider.addEventListener("input", update);
  update();
}
