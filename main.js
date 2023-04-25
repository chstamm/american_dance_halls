//Mobile Nav

function setUpNav() {
  let nav = document.querySelector(".sidenav");
  let buttons = document.querySelectorAll(".nav-toggle");
  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      if (nav.classList.contains("open")) nav.classList.remove("open");
      else nav.classList.add("open");
    });
  });
  let links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

setUpNav();

// Image Carousal

document.addEventListener("DOMContentLoaded", () => {
  const scrollLeftBtn = document.querySelector("#scroll-left");
  const scrollRightBtn = document.querySelector("#scroll-right");
  const galleryWrapper = document.querySelector(".gallery-wrapper");

  scrollLeftBtn.addEventListener("click", () => {
    galleryWrapper.scrollBy(-300, 0);
    
  });

  scrollRightBtn.addEventListener("click", () => {
    galleryWrapper.scrollBy(300, 0);
    
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      galleryWrapper.scrollBy(-300, 0);
    } else if (event.key === "ArrowRight") {
      galleryWrapper.scrollBy(300, 0);
    }
  });
});
