(function () {
  toogleMobileMenuHeightOnButtonClick();
  closeMobileMenuOnClick();
  closeMobileMenuOnBigScreen();
  animateButtonBars();
  mobileMenuTop();
})();

function toogleMobileMenuHeightOnButtonClick(params) {
  document.getElementById("button").addEventListener("click", () => {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display = "block";

    if (mobileMenu.offsetHeight === 0) {
      let height = mobileMenu.childElementCount * 60;
      mobileMenu.style.height = height + "px";
    } else {
      mobileMenu.style.height = 0;
    }
  });
}

function closeMobileMenuOnClick(params) {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementsByClassName("nav-link");

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
      mobileMenu.style.display = "none";
      mobileMenu.style.height = "0px";
      document.getElementById("button").classList.remove("open");
    });
  }
}

function closeMobileMenuOnBigScreen() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (window.innerWidth > 768) {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}

function animateButtonBars() {
  const menuButton = document.getElementById("button");
  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
  });
}

function mobileMenuTop(params) {
  const height = document.getElementById("navbar").clientHeight;
  document.getElementById("mobile-menu").style.top = height;
}
