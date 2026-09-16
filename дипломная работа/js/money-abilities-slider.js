export const moneyAbilitiesSlider = () => {
  new Swiper(".money__abilities-slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
  });
};
