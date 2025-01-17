$(function () {
  "use strict";

  // loader
  // $.fakeLoader({
  //   spinner: "spinner2",
  //   bgColor: "#0c3129",
  // });

  // smooth scroll
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 50,
        },
        850
      );
    }
  });
  //navbar item hover
  $("ul.navbar-nav li.dropdown").hover(
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(500);
    },
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(500);
    }
  );

  // navbar on scroll
  $(window).on("scroll", function () {
    var onScroll = $(this).scrollTop();

    if (onScroll > 50) {
      $(".navbar").addClass("navbar-fixed");
    } else {
      $(".navbar").removeClass("navbar-fixed");
    }
  });

  // porfolio filterizr
  $(".filtr-container").imagesLoaded(function () {
    var filterizr = $(".filtr-container").filterizr();
  });

  // portfolio filter
  $(".portfolio-filter-menu li").on("click", function () {
    $(".portfolio-filter-menu li").removeClass("active");
    $(this).addClass("active");
  });

  // portfolio magnific popup
  $(".portfolio").each(function () {
    // the containers for all your galleries
    $(this).magnificPopup({
      delegate: ".portfolio-popup", // the selector for portfolio item
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });
});

function openHome(){
  // videoLoader
  var videoLoader = document.getElementById("videoLoader");
  videoLoader.classList.add("fadeOut");
  setTimeout(function () {
    videoLoader.style.display = "none";
  }, 1000);

}
