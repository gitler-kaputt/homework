export const initSlider = () => {
  const DEFAULT_SPEED = 0.5;

  const slider = document.querySelector(".slider");
  if (!slider) return;

  const wrapper = document.querySelector(".slider-track");
  wrapper.innerHTML = wrapper.innerHTML;

  let speed = DEFAULT_SPEED;
  let position = 0;

  let isDragging = false;
  let startX = 0;
  let startPosition = 0;

  slider.addEventListener("mouseenter", () => {
    speed = DEFAULT_SPEED / 2;
  });

  slider.addEventListener("mouseleave", () => {
    speed = DEFAULT_SPEED;
  });

  slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startPosition = position;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const currentX = e.clientX;
    const diffX = currentX - startX;

    position = startPosition + diffX;
    updatePosition();
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  function updatePosition() {
    wrapper.style.transform = `translateX(${position}px)`;
  }

  function animate() {
    if (isDragging) {
      requestAnimationFrame(animate);
      return;
    }

    position -= speed;

    if (Math.abs(position) >= wrapper.scrollWidth / 2) {
      position = 0;
    }

    wrapper.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
};

initSlider();
