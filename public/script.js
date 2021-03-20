(function () {
  toogleMobileMenuHeightOnButtonClick();
  closeMobileMenuOnClickingNavLink();
  animateButtonBars();
})();

function toogleMobileMenuHeightOnButtonClick(params) {
  document.getElementById("button").addEventListener("click", () => {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display = "block";

    if (mobileMenu.offsetHeight === 0) {
      let height = mobileMenu.childElementCount * 60;
      mobileMenu.style.height = `${height}px`;
    } else {
      mobileMenu.style.height = 0;
    }
  });
}

function closeMobileMenuOnClickingNavLink(params) {
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

function animateButtonBars() {
  const menuButton = document.getElementById("button");
  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
  });
}
