const mediaQueryList = window.matchMedia("(orientation: portrait)");

$(function () {
  setHeaderHeight();
  applyResize();
  handleOrientationChange(mediaQueryList);
  orientationChangeHandler();
});

function setHeaderHeight() {
  $("#header").css({ height: $(window).height() + "px" });
}

function applyResize() {
  $(window).on("resize", function () {
    $("#header").css({ height: $(window).height() + "px" });
  });
}

function changeMobileMenuDisplay(params) {
  if ($(window).width() > 768) {
    $("#mobile-menu").css("display", "none");
  } else {
    $("#mobile-menu").css("display", "block");
  }
}

function handleOrientationChange(e) {
  if (e.matches) {
    changeMobileMenuDisplay();
    setHeaderHeight();
  } else {
    changeMobileMenuDisplay();
    setHeaderHeight();
  }
}

function orientationChangeHandler(params) {
  mediaQueryList.addEventListener("change", handleOrientationChange);
}
