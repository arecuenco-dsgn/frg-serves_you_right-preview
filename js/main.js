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

var inner_Height = Math.abs(document.getElementById("inner").clientHeight);

function pagesHeight() {  
  document.documentElement.style.setProperty(
    "--inner-height",
    inner_Height + `px`
  );
  console.log("inner_Height: " + inner_Height);
}
function resize() {
  positionZoom(), renderInfoPage(), start();
}
window.onresize = resize;
const appHeight = () => {
  document.documentElement.style.setProperty(
    "--app-height",
    `${window.innerHeight}px`
  );
};
window.addEventListener("resize", appHeight), appHeight(), pagesHeight();



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
    contentPos = document.getElementById("content").scrollLeft;
    onContentScroll = 0;




/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - ScrollPages define Page Current - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var scrollSwicth = 1;

function scrollPages(min, max) {
  setTimeout(() => {
    if (scrollSwicth == 1) {
      contentPos = document.getElementById("content").scrollLeft;

      console.log(" - - - - - - - - SCROLL");
      pageCalc = (contentPos / areaWidth) + 1;
      console.log("contentPos: " + contentPos);
      console.log("pageCalc: " + pageCalc);
      
      
      const MIN = min ?? 1;
      const MAX = max ?? pageTot;
      roundingCalc = Math.floor(pageCalc);
      parsed = parseInt(roundingCalc);
      pageCur = Math.min(Math.max(parsed, MIN), MAX);
      
      console.log("pageCur: " + pageCur);
      renderInfoPage();
      document.getElementById("content").scrollLeft = (pageCur - 1) * pgwidth;
    }
  }, 500);
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - Clicked On Content to Launch ScrollPages  - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function pagesMove() {
  if ( onContentScroll == 1) {
    console.log(" - - - - - - - - CONTENT CLICKED");
    setTimeout(() => {
      scrollPages();
    }, 600);
  }
}

/*
scroller.addEventListener("scroll", (event) => {
    setTimeout(() => {
    console.log(" ...... SCROLLING");
      scrollPages();
    }, 1800);
});
*/


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - -  Show Index Page  - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function showIndex() {
  console.log("- - - - - - - -> INDEX");
  setTimeout(() => {
    var x = document.getElementById("index");
    onContentScroll = 0;
    if (x.style.display === "none") {
      console.log("Index - show it");
      x.style.display = "block";
      setTimeout(() => {
        document.getElementById("index").style.opacity = "1";
      }, 500);
    } else {
      console.log("Index - hide it");
      document.getElementById("index").style.opacity = "0";
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
  console.log("- - - - - - - -> CREDITS");
  setTimeout(() => {
    var x = document.getElementById("credits");
    if (x.style.display === "none") {
      console.log("Credits - show it");
      x.style.display = "block";
      setTimeout(() => {
        document.getElementById("credits").style.opacity = "1";
      }, 500);
    } else {
      console.log("Credits - hide it");
      document.getElementById("credits").style.opacity = "0";
      setTimeout(() => {
        x.style.display = "none";
      }, 1000);
    }
  }, 200)
}

var innerStart = Math.ceil(Math.abs(document.getElementById("inner").getBoundingClientRect().left));


console.log(" - - - - - - - - * - - - - - - - - ");



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
  console.log(" - - - - - - - - renderInfoPage");
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
    if (!hasContentAnimateQueue()) {
        if (pageCur >= 1 && pageCur < pageTot_SUM ) {
            var t = document.getElementById("content").scrollLeft = areaWidth * pageCur; 
            var e = $("#content");
                console.log(" - - - - - - - - NEXT - IF");
                scrollSwicth = 0;
                pageCur++,
                renderInfoPage();
                console.log("t: " + t);
                console.log("pageCur: " + pageCur);
                console.log(" - - - - - - - - NEXT - IF - END");

                setTimeout(() => { scrollSwicth = 1; console.log("scrollSwicth: " + scrollSwicth);}, 2000);

        } else if (pageCur = pageTot_SUM) {
            console.log(" - - - - - - - - NEXT - ELSE IF"); 
            scrollSwicth = 0;   
            var t = document.getElementById("content").scrollLeft = 0;
            pageCur = 1;
            renderInfoPage();

            setTimeout(() => { scrollSwicth = 1; console.log("scrollSwicth: " + scrollSwicth); }, 2000);
        }
    }
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - Button Previus Page - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function prev() {
    if (!hasContentAnimateQueue()) {
        if (pageCur > 1) { 
            var t = document.getElementById("content").scrollLeft = (areaWidth * (pageCur - 2)); 
            var e = $("#content");
                console.log(" - - - - - - - - PREV - IF");
                scrollSwicth = 0;
                pageCur--,
                renderInfoPage();
                console.log("t: " + t);
                console.log("pageCur: " + pageCur);
                console.log(" - - - - - - - - PREV - IF - END");

                setTimeout(() => { scrollSwicth = 1; console.log("scrollSwicth: " + scrollSwicth); }, 2000);
        } else if (pageCur = 1) {
            console.log(" - - - - - - - - PREV - ELSE IF");
            scrollSwicth = 0;
            var t = document.getElementById("content").scrollLeft = areaWidth * pageTot_SUM;
            pageCur = pageTot;
            renderInfoPage();

            setTimeout(() => { scrollSwicth = 1; console.log("scrollSwicth: " + scrollSwicth); }, 2000);
        }
    } 
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - -   START FUNCTION  - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function start() {
  setTimeout(() => {
    console.log(" - - - - - - - - START");
    var e = document.getElementById("prev"); e.addEventListener("click", prev),
        (e = document.getElementById("next")).addEventListener("click", next);
    
    var t = document.getElementById("inner"); 
        t.addEventListener("swiped-left", prev),
        t.addEventListener("swiped-right", prev);
    

        var pages_chapter_1 = Math.ceil( Math.abs(document.getElementById("chapter_1").clientHeight) / inner_Height );
        console.log("pages_chapter_1: " + pages_chapter_1);
        var pages_chapter_2 = Math.ceil( Math.abs(document.getElementById("chapter_2").clientHeight) / inner_Height );
        console.log("pages_chapter_2: " + pages_chapter_2);
        var pages_chapter_3 = Math.ceil( Math.abs(document.getElementById("chapter_3").clientHeight) / inner_Height );
        console.log("pages_chapter_3: " + pages_chapter_3);
        var pages_chapter_4 = Math.ceil( Math.abs(document.getElementById("chapter_4").clientHeight) / inner_Height );
        console.log("pages_chapter_4: " + pages_chapter_4);
        var pages_chapter_5 = Math.ceil( Math.abs(document.getElementById("chapter_5").clientHeight) / inner_Height );
        console.log("pages_chapter_5: " + pages_chapter_5);
        var pages_chapter_6 = Math.ceil( Math.abs(document.getElementById("chapter_6").clientHeight) / inner_Height );
        console.log("pages_chapter_6: " + pages_chapter_6);
        var pages_chapter_7 = Math.ceil( Math.abs(document.getElementById("chapter_7").clientHeight) / inner_Height );
        console.log("pages_chapter_7: " + pages_chapter_7);
        var pages_chapter_8 = Math.ceil( Math.abs(document.getElementById("chapter_8").clientHeight) / inner_Height );
        console.log("pages_chapter_8: " + pages_chapter_8);
        var pages_chapter_9 = Math.ceil( Math.abs(document.getElementById("chapter_9").clientHeight) / inner_Height );
        console.log("pages_chapter_9: " + pages_chapter_9);
        var pages_chapter_10 = Math.ceil( Math.abs(document.getElementById("chapter_10").clientHeight) / inner_Height );
        console.log("pages_chapter_10: " + pages_chapter_10);
        var pages_chapter_11 = Math.ceil( Math.abs(document.getElementById("chapter_11").clientHeight) / inner_Height );
        console.log("pages_chapter_11: " + pages_chapter_11);
        var pages_chapter_12 = Math.ceil( Math.abs(document.getElementById("chapter_12").clientHeight) / inner_Height );
        console.log("pages_chapter_12: " + pages_chapter_12);
        var pages_chapter_13 = Math.ceil( Math.abs(document.getElementById("chapter_13").clientHeight) / inner_Height );
        console.log("pages_chapter_13: " + pages_chapter_13);
        var pages_chapter_14 = Math.ceil( Math.abs(document.getElementById("chapter_14").clientHeight) / inner_Height );
        console.log("pages_chapter_14: " + pages_chapter_14);
        var pages_chapter_15 = Math.ceil( Math.abs(document.getElementById("chapter_15").clientHeight) / inner_Height );
        console.log("pages_chapter_15: " + pages_chapter_15);
        var pages_chapter_16 = Math.ceil( Math.abs(document.getElementById("chapter_16").clientHeight) / inner_Height );
        console.log("pages_chapter_16: " + pages_chapter_16);
        var pages_chapter_17 = Math.ceil( Math.abs(document.getElementById("chapter_17").clientHeight) / inner_Height );
        console.log("pages_chapter_17: " + pages_chapter_17);
        var pages_chapter_18 = Math.ceil( Math.abs(document.getElementById("chapter_18").clientHeight) / inner_Height );
        console.log("pages_chapter_18: " + pages_chapter_18);
        var pages_chapter_19 = Math.ceil( Math.abs(document.getElementById("chapter_19").clientHeight) / inner_Height );
        console.log("pages_chapter_19: " + pages_chapter_19);
        var pages_chapter_20 = Math.ceil( Math.abs(document.getElementById("chapter_20").clientHeight) / inner_Height );
        console.log("pages_chapter_20: " + pages_chapter_20);
        var pages_chapter_21 = Math.ceil( Math.abs(document.getElementById("chapter_21").clientHeight) / inner_Height );
        console.log("pages_chapter_21: " + pages_chapter_21);
        var pages_chapter_22 = Math.ceil( Math.abs(document.getElementById("chapter_22").clientHeight) / inner_Height );
        console.log("pages_chapter_22: " + pages_chapter_22);
        var pages_chapter_23 = Math.ceil( Math.abs(document.getElementById("chapter_23").clientHeight) / inner_Height );
        console.log("pages_chapter_23: " + pages_chapter_23);


    
    var span_1 = Math.abs(pages_chapter_1 * pgwidth);
    console.log("span_1: " + span_1);
    var span_2 = Math.abs(pages_chapter_2 * pgwidth);
    console.log("span_2: " + span_2);
    var span_3 = Math.abs(pages_chapter_3 * pgwidth);
    console.log("span_3: " + span_3);
    var span_4 = Math.abs(pages_chapter_4 * pgwidth);
    console.log("span_4: " + span_4);
    var span_5 = Math.abs(pages_chapter_5 * pgwidth);
    console.log("span_5: " + span_5);
    var span_6 = Math.abs(pages_chapter_6 * pgwidth);
    console.log("span_6: " + span_6);
    var span_7 = Math.abs(pages_chapter_7 * pgwidth);
    console.log("span_7: " + span_7);
    var span_8 = Math.abs(pages_chapter_8 * pgwidth);
    console.log("span_8: " + span_8);
    var span_9 = Math.abs(pages_chapter_9 * pgwidth);
    console.log("span_9: " + span_9);
    var span_10 = Math.abs(pages_chapter_10 * pgwidth);
    console.log("span_10: " + span_10);
    var span_11 = Math.abs(pages_chapter_11 * pgwidth);
    console.log("span_11: " + span_11);
    var span_12 = Math.abs(pages_chapter_12 * pgwidth);
    console.log("span_12: " + span_12);
    var span_13 = Math.abs(pages_chapter_13 * pgwidth);
    console.log("span_13: " + span_13);
    var span_14 = Math.abs(pages_chapter_14 * pgwidth);
    console.log("span_14: " + span_14);
    var span_15 = Math.abs(pages_chapter_15 * pgwidth);
    console.log("span_15: " + span_15);
    var span_16 = Math.abs(pages_chapter_16 * pgwidth);
    console.log("span_16: " + span_16);
    var span_17 = Math.abs(pages_chapter_17 * pgwidth);
    console.log("span_17: " + span_17);
    var span_18 = Math.abs(pages_chapter_18 * pgwidth);
    console.log("span_18: " + span_18);
    var span_19 = Math.abs(pages_chapter_19 * pgwidth);
    console.log("span_19: " + span_19);
    var span_20 = Math.abs(pages_chapter_20 * pgwidth);
    console.log("span_20: " + span_20);
    var span_21 = Math.abs(pages_chapter_21 * pgwidth);
    console.log("span_21: " + span_21);
    var span_22 = Math.abs(pages_chapter_22 * pgwidth);
    console.log("span_22: " + span_22);
    var span_23 = Math.abs(pages_chapter_23 * pgwidth);
    console.log("span_23: " + span_23);

    var chaptersSUM = span_1 + span_2 + span_3 + span_4 + span_5 + span_6 + span_7 + span_8 + span_9 + span_10 + span_11 + span_12 + span_13 + span_14 + span_15 + span_16 + span_17 + span_18 + span_19 + span_20 + span_21 + span_22 + span_23;         
    
    console.log("Chapters SUM: " + chaptersSUM);

    

    console.log(" - - - - - - - - * - - - - - - - - ");

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



    pageTot_SUM =  Math.floor( (chaptersSUM / pgwidth)  )
    console.log("Pages by SUM: " + pageTot_SUM);
    

    var scroller = document.getElementById("content");  
    

    innerPages = Math.floor( $("#inner").width() );

        pageCur = 1;
        pageTot =  pageTot_SUM;
        console.log("pageTot: " + pageTot);

        pagina = $("#content"),
        pgwidth = pagina.width(),
        areaWidth = pgwidth,

        console.log("pgwidth: " + pgwidth);
        console.log("areaWidth: " + areaWidth);

    getPositionDom(), renderInfoPage(), pagesHeight();
  }, 2000)
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
function scrollChapter_6(obj) {   scroll_6 = document.getElementById("chapter_6").offsetLeft; document.getElementById("content").scrollLeft = scroll_6; pageCur = Math.ceil(scroll_6 / pgwidth) + 1; renderInfoPage(); console.log("pageCur: " + pageCur);}
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
