/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - Pending Tasks - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*

  - ✅ - Move calculations out the start function
  - ✅ - For resizing function create a "delete inline style" function
  - ✅ - See if it's possible to delete the touch-swipr javascript
  - ✅ - Finetune Index Responsiveness (Scroll & Grid)
  - ✅ - Show "Adjusting" Screen when resizing the window
  - ✅ - Scroll on Index in Large Desktop
  - ✅ - Up to 175% zoom need more columns (Fix Solution to 2 cols)


*/
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - Javascript Variables  - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var root = document.querySelector(":root"),
    root_var = getComputedStyle(root),
    get_gap = root_var.getPropertyValue("--gap");
var lastPage,
    wordsPage,
    posSpan,
    cntWidth,
    innerPages,
    pageTot,
    pageCur,
    pagina = $("#content"),
    pgwidth = pagina.width(),
    gap = parseInt(get_gap),
    areaWidth = Math.round(pgwidth),
    columnWidth = pgwidth - gap,
    animDuration = 400,
    contentPos = document.getElementById("content").scrollLeft,
    onContentScroll = 0,
    inner_Height = Math.abs(document.getElementById("inner").clientHeight);

var pages_chapter_1,
    pages_chapter_2,
    pages_chapter_3,
    pages_chapter_4,
    pages_chapter_5,
    pages_chapter_6,
    pages_chapter_7,
    pages_chapter_8,
    pages_chapter_9,
    pages_chapter_10,
    pages_chapter_11,
    pages_chapter_12,
    pages_chapter_13,
    pages_chapter_14,
    pages_chapter_15,
    pages_chapter_16,
    pages_chapter_17,
    pages_chapter_18,
    pages_chapter_19,
    pages_chapter_20,
    pages_chapter_21,
    pages_chapter_22,
    pages_chapter_23;

var span_1,
    span_2,
    span_3,
    span_4,
    span_5,
    span_6,
    span_7,
    span_8,
    span_9,
    span_10,
    span_11,
    span_12,
    span_13,
    span_14,
    span_15,
    span_16,
    span_17,
    span_18,
    span_19,
    span_20,
    span_21,
    span_22,
    span_23,
    chaptersSUM,
    pageTot_SUM;
var zoom = ((window.outerWidth - 10) / window.innerWidth) * 100;

var controlPress,
    commandPress,
    plusPress,
    minusPress,
    zoomStep = 1,
    columnsZoom = 2;

var togglePagesMove = 1;

pagesMove





/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - -  Swipe Detection Mobile - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var swipedir;
function swipedetect(e, t) {
  var n,
      i,
      d,
      c = t || function (e) {};
  document.addEventListener( "touchstart", function (e) {
      var t = e.changedTouches[0];
      (swipedir = "none"),
        (dist = 0),
        (n = t.pageX),
        t.pageY,
        (d = new Date().getTime());
    },
    !1
  ),
    document.addEventListener( "touchmove", function (e) {}, !1),
    document.addEventListener( "touchend",  function (e) {
        var t = e.changedTouches[0];
        (i = t.pageX - n),
          new Date().getTime() - d <= 300 &&
          Math.abs(i) >= 80 &&
          (swipedir = i < 0 ? "left" : "right"),
          c(swipedir);
    },!1
  );
}
window.addEventListener( "load", function () {
    var e = document.getElementById("touchsurface2");
    document.getElementById("inner");
    swipedetect(e, function (e) {
      return "left" == e ? next() : "right" == e ? prev() : void 0;
    });
  },
  !1
);



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - -  Show Chapters Notes  - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */


function showNote(clicked_class) {
  var x = Array.from(document.getElementsByClassName(clicked_class + "_text"));

  x.forEach((clicked_class) => {
    if (clicked_class.style.display === "none") {
        clicked_class.style.display = "block";
        document.getElementById("notes_bg").style.display = "block";
    } else {
        clicked_class.style.display = "none";
        document.getElementById("notes_bg").style.display = "none";
    }
  });
}

function closeNote() {
  var z = Array.from(document.getElementsByClassName("notes_close"));

  z.forEach((clicked_class) => {
    clicked_class.style.display = "none";
  });
}



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - ScrollPages define Page Current - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var scrollSwicth = 1;

function scrollPages(min, max) {
  setTimeout(() => {
    if (scrollSwicth == 1) {
      contentPos = document.getElementById("content").scrollLeft;

      pageCalc = (contentPos / pgwidth) + 1;
      
      
      const MIN = min ?? 1;
      const MAX = max ?? pageTot;
      roundingCalc = Math.ceil(pageCalc);
      parsed = parseInt(roundingCalc);
      pageCur = Math.min(Math.max(parsed, MIN), MAX);

      renderInfoPage();
      document.getElementById("content").scrollLeft = Math.ceil((pageCur-1) * pgwidth) ;
    }
  }, 1000);
}



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - Clicked On Content to Launch ScrollPages  - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function pagesMove() {
  if ( onContentScroll == 1) {
    setTimeout(() => {
      scrollPages();
    }, 200);
  }
}



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - -  Resizing Book  - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function resizingBookScreen() {
    var x = document.getElementById("resize_screen");
    if (x.style.display === "none") {
      x.style.display = "block";
      setTimeout(() => {
        x.style.opacity = "1";
      }, 0);
    } else {
      setTimeout(() => {
        x.style.opacity = "0";
        setTimeout(() => {
          x.style.display = "none";
        }, 200);
      }, 800);
    }
}



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - Resize Browser Window - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  function pagesHeight() {
    inner_Height = Math.abs(document.getElementById("inner").clientHeight);
    document.documentElement.style.setProperty( '--inner-height', inner_Height + 'px' );
  }

  pagesHeight();

  const appHeight = () => {
    document.documentElement.style.setProperty(
      "--app-height",
      `${window.innerHeight}px`
    );
  };
  var onResize = false;

  function resize() {
    pagesHeight(), positionZoom(), start(), renderInfoPage();
    setTimeout(() => {
      scrollPages();
    }, 2000);
  }

  window.addEventListener("resize", function() {
    if (!onResize) {
      removeStyleChapters();
      resizingBookScreen();
      onResize = true;
      setTimeout(() => {
        resize();
        setTimeout(() => {
          onResize = false;
          resizingBookScreen();
        }, 1000);
      }, 500);
    }
  });


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - -  Show Error Message - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */


function showError() {
  setTimeout(() => {
    var x = document.getElementById("errorModal");
    if (x.style.display === "none") {
      x.style.display = "flex";
      setTimeout(() => {
        x.style.opacity = "1";
      }, 100);
    } else {
      x.style.opacity = "0";
      setTimeout(() => {
        x.style.display = "none";
      }, 600);
    }
  }, 100)
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - -  Show Index Page  - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function showIndex() {
  setTimeout(() => {
    var x = document.getElementById("indexCredits");
    onContentScroll = 0;
    if (x.style.display === "none") {
      x.style.display = "block";
      setTimeout(() => {
        document.getElementById("indexCredits").style.opacity = "1";
      }, 500);
    } else {
      document.getElementById("indexCredits").style.opacity = "0";
      setTimeout(() => {
        x.style.display = "none";
        onContentScroll = 1;
      }, 1000);
    }
  }, 200)
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - -  Show Credits Page  - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function showCredits() {
  setTimeout(() => {
    var x = document.getElementById("credits");
    if (x.style.display === "none") {
      x.style.display = "block";
      setTimeout(() => {
        document.getElementById("credits").style.opacity = "1";
      }, 500);
    } else {
      document.getElementById("credits").style.opacity = "0";
      setTimeout(() => {
        x.style.display = "none";
      }, 1000);
    }
  }, 200)
}

var innerStart = Math.ceil(Math.abs(document.getElementById("inner").getBoundingClientRect().left));



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - -  Position Zoom  - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */


function positionZoom() {
    (elmSpan = $("#inner").append("<span></span>")),
    (posSpan = Math.floor( $("#inner").find("span:last-of-type").position().left )),
    (cntWidth = posSpan + (areaWidth + gap)),
    (pageTot = pageTot_SUM),
    (posSpan = Math.floor( $("#inner").find("span:last-of-type").remove ));
    
}


function getPositionDom() {
  $("#content").offset(), parseInt($("#content").css("left"), 10);
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - -  Render Pages Span  - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function renderInfoPage() {
  $("#infopage").html(pageCur + "  <span>/</span>  " + pageTot_SUM);
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - -   ################  - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function hasContentAnimateQueue() {
  return 0 !== $("#content").queue().length;
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - -   Button Next Page  - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function next() {
    if (togglePagesMove == 1) {
        togglePagesMove = 0;
        if (!hasContentAnimateQueue()) {
            if (pageCur >= 1 && pageCur < pageTot_SUM ) {
                contentPos = document.getElementById("content").scrollLeft;
                var t = document.getElementById("content").scrollLeft = pgwidth + contentPos; 
                var e = $("#content");
                    scrollSwicth = 0;
                    pageCur++,
                    renderInfoPage();

                    setTimeout(() => { scrollSwicth = 1;}, 2000);

            } else if (pageCur = pageTot_SUM) {
                scrollSwicth = 0;   
                var t = document.getElementById("content").scrollLeft = 0;
                pageCur = 1;
                renderInfoPage();

                setTimeout(() => { scrollSwicth = 1; }, 2000);
            }
        }
        setTimeout(() => { togglePagesMove = 1; }, 600);
    }
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - Button Previus Page - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function prev() {
    if (togglePagesMove == 1) {
        togglePagesMove = 0;
        if (!hasContentAnimateQueue()) {
            if (pageCur > 1) { 
                contentPos = document.getElementById("content").scrollLeft;
                var t = document.getElementById("content").scrollLeft = contentPos - pgwidth; 
                var e = $("#content");
                    scrollSwicth = 0;
                    pageCur--,
                    renderInfoPage();

                    setTimeout(() => { scrollSwicth = 1; }, 2000);
            } else if (pageCur = 1) {
                scrollSwicth = 0;
                var t = document.getElementById("content").scrollLeft = pgwidth * pageTot_SUM;
                pageCur = pageTot;
                renderInfoPage();

                setTimeout(() => { scrollSwicth = 1; }, 2000);
            }
        }
        setTimeout(() => { togglePagesMove = 1; }, 600);
    }
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - -   START FUNCTION  - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function start() {
  setTimeout(() => {
    var e = document.getElementById("prev"); e.addEventListener("click", prev),
        (e = document.getElementById("next")).addEventListener("click", next);
    
    var t = document.getElementById("inner"); 
        t.addEventListener("swiped-left", prev),
        t.addEventListener("swiped-right", prev);

    pgwidth = pagina.width();

    pages_chapter_1 = Math.ceil( Math.abs(document.getElementById("chapter_1").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_2 = Math.ceil( Math.abs(document.getElementById("chapter_2").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_3 = Math.ceil( Math.abs(document.getElementById("chapter_3").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_4 = Math.ceil( Math.abs(document.getElementById("chapter_4").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_5 = Math.ceil( Math.abs(document.getElementById("chapter_5").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_6 = Math.ceil( Math.abs(document.getElementById("chapter_6").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_7 = Math.ceil( Math.abs(document.getElementById("chapter_7").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_8 = Math.ceil( Math.abs(document.getElementById("chapter_8").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_9 = Math.ceil( Math.abs(document.getElementById("chapter_9").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_10 = Math.ceil( Math.abs(document.getElementById("chapter_10").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_11 = Math.ceil( Math.abs(document.getElementById("chapter_11").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_12 = Math.ceil( Math.abs(document.getElementById("chapter_12").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_13 = Math.ceil( Math.abs(document.getElementById("chapter_13").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_14 = Math.ceil( Math.abs(document.getElementById("chapter_14").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_15 = Math.ceil( Math.abs(document.getElementById("chapter_15").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_16 = Math.ceil( Math.abs(document.getElementById("chapter_16").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_17 = Math.ceil( Math.abs(document.getElementById("chapter_17").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_18 = Math.ceil( Math.abs(document.getElementById("chapter_18").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_19 = Math.ceil( Math.abs(document.getElementById("chapter_19").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_20 = Math.ceil( Math.abs(document.getElementById("chapter_20").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_21 = Math.ceil( Math.abs(document.getElementById("chapter_21").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_22 = Math.ceil( Math.abs(document.getElementById("chapter_22").clientHeight) / inner_Height ) + columnsZoom;
    pages_chapter_23 = Math.ceil( Math.abs(document.getElementById("chapter_23").clientHeight) / inner_Height ) + columnsZoom;

    span_1 = Math.abs(pages_chapter_1 * pgwidth);
    span_2 = Math.abs(pages_chapter_2 * pgwidth);
    span_3 = Math.abs(pages_chapter_3 * pgwidth);
    span_4 = Math.abs(pages_chapter_4 * pgwidth);
    span_5 = Math.abs(pages_chapter_5 * pgwidth);
    span_6 = Math.abs(pages_chapter_6 * pgwidth);
    span_7 = Math.abs(pages_chapter_7 * pgwidth);
    span_8 = Math.abs(pages_chapter_8 * pgwidth);
    span_9 = Math.abs(pages_chapter_9 * pgwidth);
    span_10 = Math.abs(pages_chapter_10 * pgwidth);
    span_11 = Math.abs(pages_chapter_11 * pgwidth);
    span_12 = Math.abs(pages_chapter_12 * pgwidth);
    span_13 = Math.abs(pages_chapter_13 * pgwidth);
    span_14 = Math.abs(pages_chapter_14 * pgwidth);
    span_15 = Math.abs(pages_chapter_15 * pgwidth);
    span_16 = Math.abs(pages_chapter_16 * pgwidth);
    span_17 = Math.abs(pages_chapter_17 * pgwidth);
    span_18 = Math.abs(pages_chapter_18 * pgwidth);
    span_19 = Math.abs(pages_chapter_19 * pgwidth);
    span_20 = Math.abs(pages_chapter_20 * pgwidth);
    span_21 = Math.abs(pages_chapter_21 * pgwidth);
    span_22 = Math.abs(pages_chapter_22 * pgwidth);
    span_23 = Math.abs(pages_chapter_23 * pgwidth);
    chaptersSUM = span_1 + span_2 + span_3 + span_4 + span_5 + span_6 + span_7 + span_8 + span_9 + span_10 + span_11 + span_12 + span_13 + span_14 + span_15 + span_16 + span_17 + span_18 + span_19 + span_20 + span_21 + span_22 + span_23;

    var css_chapter_1 = Math.abs(document.getElementById("chapter_1").setAttribute('style', 'width:' + span_1 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_1 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_1 + '; column-width: ' + pgwidth + 'px;'  ));
    var css_chapter_2 = Math.abs(document.getElementById("chapter_2").setAttribute('style', 'width:' + span_2 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_2 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_2 + '; column-width: ' + pgwidth + 'px;'  ));
    var css_chapter_3 = Math.abs(document.getElementById("chapter_3").setAttribute('style', 'width:' + span_3 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_3 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_3 + '; column-width: ' + pgwidth + 'px;'  ));
    var css_chapter_4 = Math.abs(document.getElementById("chapter_4").setAttribute('style', 'width:' + span_4 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_4 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_4 + '; column-width: ' + pgwidth + 'px;'  ));
    var css_chapter_5 = Math.abs(document.getElementById("chapter_5").setAttribute('style', 'width:' + span_5 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_5 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_5 + '; column-width: ' + pgwidth + 'px;'  ));
    var css_chapter_6 = Math.abs(document.getElementById("chapter_6").setAttribute('style', 'width:' + span_6 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_6 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_6 + '; column-width: ' + pgwidth + 'px;'  ));
    var css_chapter_7 = Math.abs(document.getElementById("chapter_7").setAttribute('style', 'width:' + span_7 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_7 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_7 + '; column-width: ' + pgwidth + 'px;'  ));
    var css_chapter_8 = Math.abs(document.getElementById("chapter_8").setAttribute('style', 'width:' + span_8 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_8 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_8 + '; column-width: ' + pgwidth + 'px;'  ));
    var css_chapter_9 = Math.abs(document.getElementById("chapter_9").setAttribute('style', 'width:' + span_9 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_9 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_9 + '; column-width: ' + pgwidth + 'px;'  ));
    var css_chapter_10 = Math.abs(document.getElementById("chapter_10").setAttribute('style', 'width:' + span_10 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_10 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_10 + '; column-width: ' + pgwidth + 'px;' ));
    var css_chapter_11 = Math.abs(document.getElementById("chapter_11").setAttribute('style', 'width:' + span_11 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_11 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_11 + '; column-width: ' + pgwidth + 'px;' ));
    var css_chapter_12 = Math.abs(document.getElementById("chapter_12").setAttribute('style', 'width:' + span_12 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_12 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_12 + '; column-width: ' + pgwidth + 'px;' ));
    var css_chapter_13 = Math.abs(document.getElementById("chapter_13").setAttribute('style', 'width:' + span_13 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_13 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_13 + '; column-width: ' + pgwidth + 'px;' ));
    var css_chapter_14 = Math.abs(document.getElementById("chapter_14").setAttribute('style', 'width:' + span_14 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_14 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_14 + '; column-width: ' + pgwidth + 'px;' ));
    var css_chapter_15 = Math.abs(document.getElementById("chapter_15").setAttribute('style', 'width:' + span_15 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_15 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_15 + '; column-width: ' + pgwidth + 'px;' ));
    var css_chapter_16 = Math.abs(document.getElementById("chapter_16").setAttribute('style', 'width:' + span_16 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_16 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_16 + '; column-width: ' + pgwidth + 'px;' ));
    var css_chapter_17 = Math.abs(document.getElementById("chapter_17").setAttribute('style', 'width:' + span_17 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_17 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_17 + '; column-width: ' + pgwidth + 'px;' ));
    var css_chapter_18 = Math.abs(document.getElementById("chapter_18").setAttribute('style', 'width:' + span_18 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_18 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_18 + '; column-width: ' + pgwidth + 'px;' ));
    var css_chapter_19 = Math.abs(document.getElementById("chapter_19").setAttribute('style', 'width:' + span_19 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_19 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_19 + '; column-width: ' + pgwidth + 'px;' ));
    var css_chapter_20 = Math.abs(document.getElementById("chapter_20").setAttribute('style', 'width:' + span_20 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_20 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_20 + '; column-width: ' + pgwidth + 'px;' ));
    var css_chapter_21 = Math.abs(document.getElementById("chapter_21").setAttribute('style', 'width:' + span_21 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_21 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_21 + '; column-width: ' + pgwidth + 'px;' ));
    var css_chapter_22 = Math.abs(document.getElementById("chapter_22").setAttribute('style', 'width:' + span_22 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_22 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_22 + '; column-width: ' + pgwidth + 'px;' ));
    var css_chapter_23 = Math.abs(document.getElementById("chapter_23").setAttribute('style', 'width:' + span_23 + 'px;  height:' + inner_Height + 'px; -webkit-column-count: ' + pages_chapter_23 + '; -webkit-column-width: ' + pgwidth + 'px; column-count: ' + pages_chapter_23 + '; column-width: ' + pgwidth + 'px;' ));

    var css_touchArea = Math.abs(document.getElementById("touch_area").setAttribute('style', 'height:' + inner_Height + 'px'));


    pageTot_SUM =  Math.floor( (chaptersSUM / pgwidth)  )
  

    var scroller = document.getElementById("content");  
    

    innerPages = Math.floor( $("#inner").width() );

        pageCur = 1;
        pageTot =  pageTot_SUM;

        pagina = $("#content"),
        pgwidth = pagina.width(),
        areaWidth = pgwidth,

        getPositionDom(), renderInfoPage();
  }, 1000)
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - Index Chapters Buttons Scroll - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var chapter_1 = 0;
var chapter_2 = span_1 ;
var chapter_3 = chapter_2 + span_2 ;
var chapter_4 = chapter_3 + span_3 ;
var chapter_5 = chapter_4 + span_4 ;
var chapter_6 = chapter_5 + span_5 ;
var chapter_7 = chapter_6 + span_6 ;
var chapter_8 = chapter_7 + span_7 ;
var chapter_9 = chapter_8 + span_8 ;
var chapter_10 = chapter_9 + span_9 ;
var chapter_11 = chapter_10 + span_10 ;
var chapter_12 = chapter_11 + span_11 ;
var chapter_13 = chapter_12 + span_12 ;
var chapter_14 = chapter_13 + span_13 ;
var chapter_15 = chapter_14 + span_14 ;
var chapter_16 = chapter_15 + span_15 ;
var chapter_17 = chapter_16 + span_16 ;
var chapter_18 = chapter_17 + span_17 ;
var chapter_19 = chapter_18 + span_18 ;
var chapter_20 = chapter_19 + span_19 ;
var chapter_21 = chapter_20 + span_20 ;
var chapter_22 = chapter_21 + span_21 ;
var chapter_23 = chapter_22 + span_22 ;

function scrollChapter_1(obj) {   document.getElementById("content").scrollLeft = 0; pageCur = 1; renderInfoPage(); }
function scrollChapter_2(obj) {   scroll_2 = document.getElementById("chapter_2").offsetLeft; document.getElementById("content").scrollLeft = scroll_2; pageCur = Math.ceil(scroll_2 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_3(obj) {   scroll_3 = document.getElementById("chapter_3").offsetLeft; document.getElementById("content").scrollLeft = scroll_3; pageCur = Math.ceil(scroll_3 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_4(obj) {   scroll_4 = document.getElementById("chapter_4").offsetLeft; document.getElementById("content").scrollLeft = scroll_4; pageCur = Math.ceil(scroll_4 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_5(obj) {   scroll_5 = document.getElementById("chapter_5").offsetLeft; document.getElementById("content").scrollLeft = scroll_5; pageCur = Math.ceil(scroll_5 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_6(obj) {   scroll_6 = document.getElementById("chapter_6").offsetLeft; document.getElementById("content").scrollLeft = scroll_6; pageCur = Math.ceil(scroll_6 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_7(obj) {   scroll_7 = document.getElementById("chapter_7").offsetLeft; document.getElementById("content").scrollLeft = scroll_7; pageCur = Math.ceil(scroll_7 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_8(obj) {   scroll_8 = document.getElementById("chapter_8").offsetLeft; document.getElementById("content").scrollLeft = scroll_8; pageCur = Math.ceil(scroll_8 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_9(obj) {   scroll_9 = document.getElementById("chapter_9").offsetLeft; document.getElementById("content").scrollLeft = scroll_9; pageCur = Math.ceil(scroll_9 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_10(obj) {  scroll_10 = document.getElementById("chapter_10").offsetLeft; document.getElementById("content").scrollLeft = scroll_10; pageCur = Math.ceil(scroll_10 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_11(obj) {  scroll_11 = document.getElementById("chapter_11").offsetLeft; document.getElementById("content").scrollLeft = scroll_11; pageCur = Math.ceil(scroll_11 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_12(obj) {  scroll_12 = document.getElementById("chapter_12").offsetLeft; document.getElementById("content").scrollLeft = scroll_12; pageCur = Math.ceil(scroll_12 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_13(obj) {  scroll_13 = document.getElementById("chapter_13").offsetLeft; document.getElementById("content").scrollLeft = scroll_13; pageCur = Math.ceil(scroll_13 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_14(obj) {  scroll_14 = document.getElementById("chapter_14").offsetLeft; document.getElementById("content").scrollLeft = scroll_14; pageCur = Math.ceil(scroll_14 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_15(obj) {  scroll_15 = document.getElementById("chapter_15").offsetLeft; document.getElementById("content").scrollLeft = scroll_15; pageCur = Math.ceil(scroll_15 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_16(obj) {  scroll_16 = document.getElementById("chapter_16").offsetLeft; document.getElementById("content").scrollLeft = scroll_16; pageCur = Math.ceil(scroll_16 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_17(obj) {  scroll_17 = document.getElementById("chapter_17").offsetLeft; document.getElementById("content").scrollLeft = scroll_17; pageCur = Math.ceil(scroll_17 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_18(obj) {  scroll_18 = document.getElementById("chapter_18").offsetLeft; document.getElementById("content").scrollLeft = scroll_18; pageCur = Math.ceil(scroll_18 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_19(obj) {  scroll_19 = document.getElementById("chapter_19").offsetLeft; document.getElementById("content").scrollLeft = scroll_19; pageCur = Math.ceil(scroll_19 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_20(obj) {  scroll_20 = document.getElementById("chapter_20").offsetLeft; document.getElementById("content").scrollLeft = scroll_20; pageCur = Math.ceil(scroll_20 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_21(obj) {  scroll_21 = document.getElementById("chapter_21").offsetLeft; document.getElementById("content").scrollLeft = scroll_21; pageCur = Math.ceil(scroll_21 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_22(obj) {  scroll_22 = document.getElementById("chapter_22").offsetLeft; document.getElementById("content").scrollLeft = scroll_22; pageCur = Math.ceil(scroll_22 / pgwidth) + 1; renderInfoPage(); }
function scrollChapter_23(obj) {  scroll_23 = document.getElementById("chapter_23").offsetLeft; document.getElementById("content").scrollLeft = scroll_23; pageCur = Math.ceil(scroll_23 / pgwidth) + 1; renderInfoPage(); }



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - Remove Chapters Inline Styles - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function removeStyleChapters() {
    var remove_chapter_1 = document.getElementById("chapter_1").removeAttribute("style");
    var remove_chapter_2 = document.getElementById("chapter_2").removeAttribute("style");
    var remove_chapter_3 = document.getElementById("chapter_3").removeAttribute("style");
    var remove_chapter_4 = document.getElementById("chapter_4").removeAttribute("style");
    var remove_chapter_5 = document.getElementById("chapter_5").removeAttribute("style");
    var remove_chapter_6 = document.getElementById("chapter_6").removeAttribute("style");
    var remove_chapter_7 = document.getElementById("chapter_7").removeAttribute("style");
    var remove_chapter_8 = document.getElementById("chapter_8").removeAttribute("style");
    var remove_chapter_9 = document.getElementById("chapter_9").removeAttribute("style");
    var remove_chapter_10 = document.getElementById("chapter_10").removeAttribute("style");
    var remove_chapter_11 = document.getElementById("chapter_11").removeAttribute("style");
    var remove_chapter_12 = document.getElementById("chapter_12").removeAttribute("style");
    var remove_chapter_13 = document.getElementById("chapter_13").removeAttribute("style");
    var remove_chapter_14 = document.getElementById("chapter_14").removeAttribute("style");
    var remove_chapter_15 = document.getElementById("chapter_15").removeAttribute("style");
    var remove_chapter_16 = document.getElementById("chapter_16").removeAttribute("style");
    var remove_chapter_17 = document.getElementById("chapter_17").removeAttribute("style");
    var remove_chapter_18 = document.getElementById("chapter_18").removeAttribute("style");
    var remove_chapter_19 = document.getElementById("chapter_19").removeAttribute("style");
    var remove_chapter_20 = document.getElementById("chapter_20").removeAttribute("style");
    var remove_chapter_21 = document.getElementById("chapter_21").removeAttribute("style");
    var remove_chapter_22 = document.getElementById("chapter_22").removeAttribute("style");
    var remove_chapter_23 = document.getElementById("chapter_23").removeAttribute("style");

    var remove_touchArea = document.getElementById("touch_area").removeAttribute("style");
}



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - LAUNCH START FUNCTION - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

window.addEventListener("load",  start() );

window.onkeydown = function(event) {
  if (event.keyCode == 39) {
    next()
  } else if (event.keyCode == 37) {
    prev()
  };
};


