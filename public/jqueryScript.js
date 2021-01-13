const mediaQueryList = window.matchMedia("(orientation: portrait)");
var regularMenuPositionTop;
$(function () {
  setHeaderHeight();
  applyResize();
  handleOrientationChange(mediaQueryList);
  orientationChangeHandler();
  fixRegularMenuPosition();
  changeRegularMenuHeight();
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

function changeRegularMenuHeight(params) {
  if ($(window).height() < 540) {
    $(".nav-item").addClass("change-height");
  } else {
    $(".nav-item").removeClass("change-height");
  }
}

function handleOrientationChange(e) {
  if (e.matches) {
    changeRegularMenuHeight();
    changeMobileMenuDisplay();
    setHeaderHeight();
  } else {
    changeRegularMenuHeight();
    changeMobileMenuDisplay();
    setHeaderHeight();
  }
}

function orientationChangeHandler(params) {
  mediaQueryList.addEventListener("change", handleOrientationChange);
  mediaQueryList.addEventListener("change", fixRegularMenuPosition);
}

function fixRegularMenuPosition() {
  regularMenuPositionTop = $("#scroll-button").offset().top;

  $(window).on("scroll", function () {
    fixRegularMenu();
  });

  fixRegularMenu();
}

function fixRegularMenu() {
  if ($(window).scrollTop() > regularMenuPositionTop) {
    $("#regular-menu").addClass("fixed");
  } else {
    $("#regular-menu").removeClass("fixed");
  }
}
