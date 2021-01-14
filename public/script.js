(function () {
  toogleMobileMenuHeightOnButtonClick();
  closeMobileMenuOnClick();
  closeMobileMenuOnBigScreen();
})();

function toogleMobileMenuHeightOnButtonClick(params) {
  document.getElementById("button").addEventListener("click", () => {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display = "block";

    if (mobileMenu.offsetHeight === 0) {
      mobileMenu.style.height = "300px";
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
