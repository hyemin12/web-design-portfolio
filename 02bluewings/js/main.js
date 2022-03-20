$(function () {
  $(".slide").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });

  var current = 0;
  var banner = $(".imgWrap li");
  var i;
  var overbtn = false;

  function prevMove() {
    if (overbtn == false) {
      overbtn = true;
      i = current - 1;
      if (i == -1) {
        i = 4;
      }

      slideMove("prev");
    }
  }
  function nextMove() {
    if (overbtn == false) {
      overbtn = true;
      i = current + 1;
      if (i == 5) {
        i = 0;
      }

      slideMove("next");
    }
  }
  function slideMove(view) {
    var currentEl = banner.eq(current);
    var nextEl = banner.eq(i);

    if (view == "prev") {
      currentEl
        .css({ left: 0 })
        .stop()
        .animate({ left: "100%" }, 1000, function () {
          overbtn = false;
        });
      nextEl.css({ left: "-100%" }).stop().animate({ left: "0" }, 1000);
    } else {
      currentEl = banner.eq(current);
      nextEl = banner.eq(i);

      currentEl
        .css({ left: 0 })
        .stop()
        .animate({ left: "-100%" }, 1000, function () {
          overbtn = false;
        });
      nextEl.css({ left: "100%" }).stop().animate({ left: "0" }, 1000);
    }

    current = i;
  }
  $(".prev").click(function () {
    prevMove();
  });
  $(".next").click(function () {
    nextMove();
  });
  function trigger() {
    $(".next").trigger("click");
    $(".btn-next").trigger("click");
  }
  setInterval(trigger, 5000);

  var y = 0;
  $(".btn-prev").click(function () {
    y--;
    if (y == -1) {
      y = 4;
    }

    detailMove();
  });
  $(".btn-next").click(function () {
    y++;
    if (y == 5) {
      y = 0;
    }

    detailMove();
  });
  function detailMove() {
    console.log(y);
    var num = y * 890 * -1;
    $(".detail>ul").stop().animate({ left: num }, 300);
    console.log(num);
  }
});
