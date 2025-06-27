(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("bg-primary shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("bg-primary shadow-sm").css("top", "-150px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Countdown Timer
  function countDownTimer() {
    const endTime = new Date("17 August 2025 15:35:00 GMT+07:00");
    const endTimestamp = Date.parse(endTime) / 1000;
    const nowTimestamp = Date.now() / 1000;
    const timeLeft = endTimestamp - nowTimestamp;

    const $price = $("#promo-price");
    const $normal = $("#normal-price");
    const $btn = $("#promo-btn");

    if (timeLeft <= 0) {
      // Promo expired
      $price.hide(); // Hide promo price
      $normal.removeClass("text-muted").css("font-size", "2rem"); // Show normal price
      $(".cdt").html(
        "<div class='text-danger fw-bold'>Promo telah berakhir</div>"
      );
      $btn
        .removeClass("btn-primary")
        .addClass("btn-secondary disabled")
        .text("Promo Berakhir");
      return;
    }

    let d = Math.floor(timeLeft / 86400);
    let h = Math.floor((timeLeft % 86400) / 3600);
    let m = Math.floor((timeLeft % 3600) / 60);
    let s = Math.floor(timeLeft % 60);

    if (d < 10) d = "0" + d;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    $("#cdt-days").html(
      d + "<span class='d-block' style='font-size:14px;'>Days</span>"
    );
    $("#cdt-hours").html(
      h + "<span class='d-block' style='font-size:14px;'>Hours</span>"
    );
    $("#cdt-minutes").html(
      m + "<span class='d-block' style='font-size:14px;'>Mins</span>"
    );
    $("#cdt-seconds").html(
      s + "<span class='d-block' style='font-size:14px;'>Secs</span>"
    );
  }

  // Run timer
  setInterval(countDownTimer, 1000);
  
})(jQuery);
