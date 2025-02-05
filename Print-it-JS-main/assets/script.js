const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const buttonNext = document.getElementById("next");
const buttonPrev = document.getElementById("precedent");
const slide = document.getElementById("slide");
const tagline = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");
let index = 0;

buttonNext.addEventListener("click", () => {
  index = index + 1;
  if (index === slides.length) {
    index = 0;
  }
  slide.src = `./assets/images/slideshow/${slides[index].image}`;
  tagline.innerHTML = slides[index].tagLine;
  updatesDots();
});

buttonPrev.addEventListener("click", () => {
  index = index - 1;
  if (index === -1) {
    index = slides.length - 1;
  }
  slide.src = `./assets/images/slideshow/${slides[index].image}`;
  tagline.innerHTML = slides[index].tagLine;
  updatesDots();
});

for (let i = 0; i < dots.length; i++) {
  // créer bouton
  dots[i].addEventListener("click", () => {
    index = i;
    slide.src = `./assets/images/slideshow/${slides[index].image}`;
    tagline.innerHTML = slides[index].tagLine;
    updatesDots();
  });
}

function updatesDots() {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// function changeSlide(index) {
//   slide.src = `./assets/images/slideshow/${slides[index].image}`;
//   tagline.innerHTML = slides[index].tagLine;
//   dots.forEach((dot, i) => dot.classList.toggle("dot_selected", index === i));
// }

// buttonNext.addEventListener("click", () => {
//   index = (index + 1) % slides.length;
//   changeSlide(index);
// });

// buttonPrev.addEventListener("click", () => {
//   index = (index - 1 + slides.length) % slides.length;
//   changeSlide(index);
// });
