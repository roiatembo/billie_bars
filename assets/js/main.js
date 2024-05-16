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
  perPage: 3,
  perMove: 5,
  pagination: false,
  focus: 0,
  arrows: false,
  autoplay: true,
  speed: 170000,
  interval: 0
});

carouselSplide.mount();

var threeColumnSplide = new Splide(".splide-three-column", {
  type: "loop",
  perPage: 3,
  perMove: 1,
  gap: 10,
});

threeColumnSplide.mount();

var fourColumnSplide = new Splide(".splide-four-column", {
  type: "loop",
  perPage: 4,
  perMove: 1,
  gap: 10,
});

fourColumnSplide.mount();