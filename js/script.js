let menu = document.querySelector("#menu");
let header = document.querySelector("header");

function toggle() {
  header.classList.toggle("toggle");
  $("#menu").toggleClass("fa-solid fa-xmark");
  $("#menu").toggleClass("fas fa-bars");
}

$(document).ready(function () {
  // $("#menu").click(function () {
  //   // $("#menu").removeClass("fa-solid fa-xmark");

  //   $("header").toggleClass("toggle");
  // });

  $(window).on("scroll load", function () {
    $("#menu").toggleClass("fas fa-bars");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});
