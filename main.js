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
  let links = document.querySelectorAll ("nav a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open")
    }
)
  })
}

setUpNav();
