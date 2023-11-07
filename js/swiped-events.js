var swipedir;
function swipedetect(e, t) {
  var n,
    i,
    d,
    c = t || function (e) {};
  document.addEventListener(
    "touchstart",
    function (e) {
      var t = e.changedTouches[0];
      (swipedir = "none"),
        (dist = 0),
        (n = t.pageX),
        t.pageY,
        (d = new Date().getTime());
    },
    !1
  ),
    document.addEventListener("touchmove", function (e) {}, !1),
    document.addEventListener(
      "touchend",
      function (e) {
        var t = e.changedTouches[0];
        (i = t.pageX - n),
          new Date().getTime() - d <= 300 &&
            Math.abs(i) >= 80 &&
            (swipedir = i < 0 ? "left" : "right"),
          c(swipedir);
      },
      !1
    );
}
window.addEventListener(
  "load",
  function () {
    var e = document.getElementById("touchsurface2");
    document.getElementById("inner");
    swipedetect(e, function (e) {
      return "left" == e ? next() : "right" == e ? prev() : void 0;
    });
  },
  !1
);
