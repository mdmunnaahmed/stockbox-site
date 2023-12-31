"user strict";

// Preloader
$(window).on("load", function () {
  $(".preloader").fadeOut(1300);
});

// Menu Click Event
let trigger = $(".header-trigger");
let dropdown = $(".menu");
if (trigger || dropdown) {
  trigger.each(function () {
    $(this).on("click", function (e) {
      e.stopPropagation();
      dropdown.toggleClass("active");
      trigger.toggleClass("active");
      $(".overlay").toggleClass("active-color");
    });
  });
  dropdown.each(function () {
    $(this).on("click", function (e) {
      e.stopPropagation();
    });
  });
  $(document).on("click", function () {
    if (parseInt(screenSize) < parseInt(991)) {
      dropdown.removeClass("active");
      trigger.removeClass("active");
      $(".overlay").removeClass("active-color");
    }
  });
}

// Submenu Click Event
$(".menu .menu-item .menu-link").on("click", function (e) {
  if (parseInt(screenSize) < parseInt(991)) {
    $(this).siblings(".sub-menu").slideToggle();
  }
});

//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-submenu");

let count = $(".menu > li").length;
function menuGap() {
  if (count >= 8) {
    $(".menu").css("gap", "0 10px");
  }
}
menuGap()

// Detect Screen Size
let screenSize = window.innerWidth;
window.addEventListener("resize", function (e) {
  screenSize = window.innerWidth;

  menuGap()
});

// Sticky Menu
var header = document.querySelector(".header");
if (header) {
  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
  });
}

// Scroll To Top Event
var scrollTop = $(".scrollToTop");
$(window).on("scroll", function () {
  if ($(this).scrollTop() < 500) {
    scrollTop.removeClass("active");
  } else {
    scrollTop.addClass("active");
  }
});

// Click event to scroll to top
$(".scrollToTop").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    300
  );
  return false;
});

// Active Path Active
var path = location.pathname.split("/");
var current = location.pathname.split("/")[path.length - 1];
$(".menu li a").each(function () {
  if ($(this).attr("href").indexOf(current) !== -1 && current != "") {
    $(this).addClass("active");
  }
});

new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 50, // default
  mobile: false, // default
  live: true, // default
}).init();

//Faq
$(".faq-item__title").on("click", function (e) {
  var element = $(this).parent(".faq-item");
  if (element.hasClass("open")) {
    element.removeClass("open");
    element.find(".faq-item__content").removeClass("open");
    element.find(".faq-item__content").slideUp(300, "swing");
  } else {
    element.addClass("open");
    element.children(".faq-item__content").slideDown(300, "swing");
    element
      .siblings(".faq-item")
      .children(".faq-item__content")
      .slideUp(300, "swing");
    element.siblings(".faq-item").removeClass("open");
    element
      .siblings(".faq-item")
      .find(".faq-item__content")
      .slideUp(300, "swing");
  }
});

$(window).on("load", function () {
  $("[data-paroller-factor]").paroller();
});
