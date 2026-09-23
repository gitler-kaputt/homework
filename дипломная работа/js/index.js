import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import { countDownDate } from "./timer.js";
import { moneyAbilitiesSlider } from "./money-abilities-slider.js";
import { updateDashboard } from "./investment-portfolio.js";

try {
  const headerFixed = new HeaderFixed({
    HEADER: "header",
    HEADER_FIXED: "header--fixed",
  });

  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "header__menu",
      HEADER_MENU_OPEN: "header__menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      MENU_LINK: "menu__link",
      BREAKPOINT: 992,
      MAIN: "main",
    },
    headerFixed,
  );

  countDownDate();
  moneyAbilitiesSlider();
  updateDashboard();
} catch (error) {
  console.error(error);
}
