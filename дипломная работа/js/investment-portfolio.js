const input = document.getElementById("slider");
const fillPath = document.getElementById("fill");
const percentEl = document.getElementById("percent");
const riskEl = document.getElementById("risk");

const targetValue = 100;
const radius = 250;
const arcLength = Math.PI * radius;

fillPath.style.strokeDasharray = arcLength;
fillPath.style.strokeDashoffset = arcLength;

export function getRiskCategory(value) {
  if (value <= 33) return { text: "Низкий риск", class: "risk-low" };
  if (value <= 66) return { text: "Средний риск", class: "risk-medium" };
  return { text: "Высокий риск", class: "risk-high" };
}

export function updateGauge(value) {
  const progress = Math.max(0, Math.min(1, value / targetValue));

  const offset = arcLength - progress * arcLength;
  fillPath.style.strokeDashoffset = offset;
  percentEl.textContent = `до ${value}%`;
  const risk = getRiskCategory(value);
  riskEl.textContent = risk.text;
  riskEl.className = "investment-portfolio__risk " + risk.class;
}

updateGauge(Number(input.value));

input.addEventListener("input", (e) => {
  let value = Number(e.target.value);
  value = Math.max(0, Math.min(targetValue, value));
  e.target.value = value;
  updateGauge(value);
});
