const heroBg = document.querySelector(".hero__bg");
/* const heroDate = document.querySelector("demo"); */
const heroHeading = document.querySelector(".hero__heading");

//heading er skriften på billederne der vil blive vist
const heroArray = [
  {
    ImageSrc: "assets/media/beer-glas-cover.jpg",
    /* Date: "", */
    heading: "når vi skal i sommerhus",
  },

  {
    ImageSrc: "assets/media/strand.webp",
    /* Date: "", */
    heading: "når vi skal i sommerhus",
  },

  {
    ImageSrc: "assets/media/drinks-cover.webp",
    /* Date: "", */
    heading: "når vi skal i sommerhus",/* det er hvad der står på heroen */
  },
];

let slideIndex = 0;

function showSlide() {
  heroBg.src = heroArray[slideIndex].ImageSrc;
  heroHeading.innerHTML = heroArray[slideIndex].heading;
}

function nextSlide() {
  slideIndex++;

  if (slideIndex >= heroArray.length) {
    slideIndex = 0;
  }

  showSlide();
}

let slideInteval = setInterval(nextSlide, 3000);/* det er så lang tid det tager at skifte slide */
