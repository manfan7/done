/* gsap.fromTo(
  ".section-3",
  {
    opacity: 0,
    y: 400,
  },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".section-2",
      start: "top 350px",
      end: "top 100px",
      scrub: true,
    },
  }
); 

gsap.fromTo(
  ".service-centr-logo",
  {
    opacity: 0,
    y: 1000,
  },
  {
    opacity: 1,
    y: 0,

    scrollTrigger: {
      trigger: ".service-centr-logo",
      start: "top 2550px",
      end: "top 1200px",
      scrub: true,
    },
  }
);
gsap.fromTo(
  ".service-centr-text",
  {
    opacity: 0,
    y: 1000,
  },
  {
    opacity: 1,
    y: 0,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".section-4",
      start: "top 350px",
      end: "top 50px",
      scrub: true,
    },
  }
);
 gsap.fromTo(
  ".service-centr-images-item",
  {
    opacity: 0,
    y: 1500,
  },
  {
    opacity: 1,
    y: 0,

    scrollTrigger: {
      trigger: ".service-centr-descr-text",
      //start: "top -4700px",
      //end: "bottom",
      scrub: true,
    },
  }
); */
/*---------scroll-------------------*/
const scrollItems = document.querySelectorAll(".scroll-item");
const scrollItemsimages = document.querySelectorAll(".scroll-itemimages");
const scrollItemsdescr = document.querySelectorAll(".scroll-itemdescr");
const scrollAnimation = (selector) => {
  let windowHeight = window.innerHeight;
  scrollItems.forEach((el) => {
    let blockPosition = el.getBoundingClientRect().top;

    if (blockPosition < windowHeight - 150) {
      el.classList.add("animation-class");
    } else {
      el.classList.remove("animation-class");
    }
  });
};
const scrollAnimation1 = (selector) => {
  let windowHeight = window.innerHeight;
  scrollItemsimages.forEach((el) => {
    let blockPosition = el.getBoundingClientRect().top;

    if (blockPosition < windowHeight - 200) {
      el.classList.add("animation-class");
    } else {
      el.classList.remove("animation-class");
    }
  });
};
const scrollAnimation2 = (selector) => {
  let windowHeight = window.innerHeight;
  scrollItemsdescr.forEach((el) => {
    let blockPosition = el.getBoundingClientRect().top;

    if (blockPosition < windowHeight - 350) {
      el.classList.add("animation-class");
    } else {
      el.classList.remove("animation-class");
    }
  });
};
scrollAnimation(scrollItems);
scrollAnimation1(scrollItemsimages);
scrollAnimation2(scrollItemsdescr);
window.addEventListener("scroll", () => {
  scrollAnimation(scrollItems);
  scrollAnimation1(scrollItemsimages);
  scrollAnimation2(scrollItemsdescr);
});
/*-----------------scroll to cena------------*/
const cena = document.querySelectorAll(".cenalink");
const cenaMobile = document.querySelector(".cenatabmobile");

for (let item of cena) {
  item.addEventListener("click", function () {
    const activeTab = document.querySelector(".content.active");
    let activeCena = activeTab.querySelectorAll("." + item.dataset.goto);

    for (const link of activeCena) {
      const goToBlockValue = link.getBoundingClientRect().top + scrollY - 50;
      window.scrollTo({
        top: goToBlockValue,
        left: 0,
        behavior: "smooth",
      });
    }
  });
}
tabs();
/*------------------mobilemenu----------------*/
const burger = document.querySelector(".burgerMenu");
const nav = document.querySelector(".nav");
burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});
cenaMobile.addEventListener("click", () => {
  setTimeout(() => {
    nav.classList.remove("open");
  }, 50);
  const activeTab = document.querySelector(".content.active");
  let activeCena = activeTab.querySelector("." + cenaMobile.dataset.goto);
  console.log(activeCena);
  let main = document.querySelector(".content-mobi-main");
  const maincena = document.querySelector(".cenatablinkmain");
  if (activeTab.classList.contains("content-dizel-service")) {
    detectActiveCena(activeCena);
  } else if (activeTab.classList.contains(main)) {
    detectActiveCena(maincena);
  } else {
    let content = document.querySelectorAll(".content");
    content.forEach((item) => item.classList.remove("active"));
    main.classList.add("active");
    detectActiveCena(maincena);
  }
});
function detectActiveCena(item) {
  const goToBlockValue = item.getBoundingClientRect().top + scrollY - 50;
  window.scrollTo({
    top: goToBlockValue,
    left: 0,
    behavior: "smooth",
  });
}

function checkScreenWidth() {
  if (window.innerWidth === 540) {
    tabs();
  }
}

// Запускаем проверку ширины экрана при загрузке страницы
checkScreenWidth();

// Добавляем обработчик события resize, чтобы проверять ширину экрана при изменении размера окна
window.addEventListener("resize", checkScreenWidth);
