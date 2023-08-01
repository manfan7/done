"use strict";
//==========================================

// Табы
const tabs = () => {
  function bindTabs(
    titleClass,
    contentClass,
    activeClass,
    startTitleClass,
    startContentClass
  ) {
    const title = document.querySelectorAll(titleClass);
    const content = document.querySelectorAll(contentClass);
    const startTitle = document.querySelector(startTitleClass);
    const startContent = document.querySelector(startContentClass);

    // Обработчик нажатия клавиш на табах
    /* title.forEach((item, index) => {
      item.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          // Если нажата клавиша влево, выбираем предыдущий таб
          const prevIndex = (index - 1 + title.length) % title.length;
          title[prevIndex].focus();
          event.preventDefault();
        } else if (event.key === "ArrowRight") {
          // Если нажата клавиша вправо, выбираем следующий таб
          const nextIndex = (index + 1) % title.length;
          title[nextIndex].focus();
          event.preventDefault();
        } else if (event.key === "Enter" || event.key === " ") {
          // Если нажата клавиша Enter или пробел, активируем таб
          item.click();
          event.preventDefault();
        }
      });
    }); */

    // Обработчик кликов на табах
    title.forEach((item) =>
      item.addEventListener("click", () => {
        setTimeout(() => {
          nav.classList.remove("open");
        }, 50);
        if (item.classList.contains(activeClass)) {
          return;
        }
        title.forEach((element) => {
          element.classList.remove(activeClass);
        });

        item.classList.add(activeClass);

        content.forEach((element) => {
          element.classList.remove(activeClass);
        });

        const activeContent = document.querySelector("#" + item.dataset.tab);
        activeContent.classList.add(activeClass);
      })
    );

    // При первой загрузке страницы, активны эти табы
    startTitle.classList.add(activeClass);
    startContent.classList.add(activeClass);
  }

  // Табы со знаменитостями
  bindTabs(".selectRazd", ".content", "active", '[data-tab="tab-1"]', "#tab-1");
  bindTabs(
    ".selectmobile",
    ".content",
    "active",
    '[data-tab="tab-10"]',
    "#tab-10"
  );
};
const animationImage = document.querySelector(".logo-mobile-maz");
const animationText = document.querySelector(".maz-content-descr");
const animationMazText = document.querySelector(".maz-opisanie-descr");
const upscrolljs = document.querySelector(".upscrollingjs");
const downscrolljs = document.querySelector(".downscrolljs");
let topage = document.querySelectorAll(".nav-item-link");
topage.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("link1")) {
      setTimeout(function () {
        animationImage.classList.add("scroll-itemanimation");
        animationText.classList.add("scroll-itemanimationdescr");
        animationMazText.classList.add("scroll-uptext");
      }, 300);
    } else if (item.classList.contains("link2")) {
      setTimeout(function () {
        upscrolljs.classList.add("animation-class");
        downscrolljs.classList.add("animation-class");
      }, 300);
    } else {
      animationImage.classList.remove("scroll-itemanimation");
      animationText.classList.remove("scroll-itemanimationdescr");
      animationMazText.classList.remove("scroll-uptext");
      upscrolljs.classList.remove("animation-class");
      downscrolljs.classList.remove("animation-class");
    }
  });
});
