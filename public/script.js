(function () {
  buttonClick();
  setHeaderHeight();
  changeMobileDisplay();
  closeMobileMenu();
})();

function buttonClick(params) {
  let menuButton = document.getElementById("button");
  menuButton.addEventListener("click", () => {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display = "block";

    if (mobileMenu.offsetHeight === 0) {
      mobileMenu.style.height = "300px";
    } else {
      mobileMenu.style.height = 0;
    }
  });
}

function setHeaderHeight(params) {
  var header = document.getElementById("header");
  header.style.height = window.innerHeight + "px";
  window.addEventListener("resize", () => {
    header.style.height = window.innerHeight + "px";
  });
}

function changeMobileDisplay(params) {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementsByClassName("nav-link");

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
      mobileMenu.style.display = "none";
      mobileMenu.style.height = "0px";
    });
  }
}

function closeMobileMenu(params) {
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  const mobileMenu = document.getElementById("mobile-menu");
  function toggleMobileMenuDisplay(e) {
    if (e.matches) {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  }
  mediaQuery.addEventListener("change", toggleMobileMenuDisplay);
}
