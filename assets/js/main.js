var heroSplide = new Splide(".splide-hero", {
  type: "loop",
  perPage: 1,
  perMove: 1,
  pagination: true,
  focus: 0,
});

heroSplide.mount();


var carouselSplide = new Splide(".splide-carousel", {
  type: "loop",
  drag: "free",
  focus: "center",
  autoWidth: true,
  gap: 40,
  pagination: false,
  arrows: false,
  perPage: 4,
  autoScroll: {
    speed: 1,
  },
});

carouselSplide.mount(window.splide.Extensions);

var threeColumnSplide = new Splide(".splide-three-column", {
  type: "loop",
  perPage: 3,
  perMove: 1,
  pagination: false,
  gap: 10,
  mediaQuery: "max",
  breakpoints: {
    1000: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  },
});

threeColumnSplide.mount();

var fourColumnSplide = new Splide(".splide-four-column", {
  type: "loop",
  perPage: 4,
  width: "90%",
  perMove: 1,
  pagination: false,
  arrows: true,
  gap: 10,
  mediaQuery: "max",
  breakpoints: {
    1230: {
      perPage: 3,
    },
    1000: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  },
});

fourColumnSplide.mount();


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}