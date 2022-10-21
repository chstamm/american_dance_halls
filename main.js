
//Mobile Nav

function setUpNav() {
  let buttons = document.querySelectorAll(".nav-toggle");
  buttons.forEach((element) => {
    let nav = document.querySelector(".sidenav");
    element.addEventListener("click", () => {
      if (nav.classList.contains("open")) 
        nav.classList.remove("open");
      else nav.classList.add("open");
    });
  });
}

setUpNav();
