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
window.addEventListener("resize", appHeight), appHeight();

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

const scroller = document.getElementById("content");  
const output = document.getElementById("output");

function scrollPages(min, max) {
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
}

scroller.addEventListener("scrollend", (event) => {
    scrollPages()
});

function showIndex() {
  console.log("- - - - - - - -> showIndex");
  setTimeout(() => {
    var x = document.getElementById("index");
    if (x.style.display === "none") {
      console.log("show it");
      x.style.display = "block";
      setTimeout(() => {
        document.getElementById("index").style.opacity = "1";
      }, 1000);
    } else {
      console.log("hide it");
      document.getElementById("index").style.opacity = "0";
      setTimeout(() => {
        x.style.display = "none";
      }, 1000);
    }
  }, 1000)
}

var innerStart = Math.ceil(Math.abs(document.getElementById("inner").getBoundingClientRect().left));

/*
var chapter_1 = 0;
var chapter_2 = Math.ceil(Math.abs(document.getElementById("chapter_2").getBoundingClientRect().left));
var chapter_3 = Math.ceil(Math.abs(document.getElementById("chapter_3").getBoundingClientRect().left));
var chapter_4 = Math.ceil(Math.abs(document.getElementById("chapter_4").getBoundingClientRect().left));
var chapter_5 = Math.ceil(Math.abs(document.getElementById("chapter_5").getBoundingClientRect().left));
var chapter_6 = Math.ceil(Math.abs(document.getElementById("chapter_6").getBoundingClientRect().left));
var chapter_7 = Math.ceil(Math.abs(document.getElementById("chapter_7").getBoundingClientRect().left));
var chapter_8 = Math.ceil(Math.abs(document.getElementById("chapter_8").getBoundingClientRect().left));
var chapter_9 = Math.ceil(Math.abs(document.getElementById("chapter_9").getBoundingClientRect().left));
var chapter_10 = Math.ceil(Math.abs(document.getElementById("chapter_10").getBoundingClientRect().left));
var chapter_11 = Math.ceil(Math.abs(document.getElementById("chapter_11").getBoundingClientRect().left));
var chapter_12 = Math.ceil(Math.abs(document.getElementById("chapter_12").getBoundingClientRect().left));
var chapter_13 = Math.ceil(Math.abs(document.getElementById("chapter_13").getBoundingClientRect().left));
var chapter_14 = Math.ceil(Math.abs(document.getElementById("chapter_14").getBoundingClientRect().left));
var chapter_15 = Math.ceil(Math.abs(document.getElementById("chapter_15").getBoundingClientRect().left));
var chapter_16 = Math.ceil(Math.abs(document.getElementById("chapter_16").getBoundingClientRect().left)) + (innerStart * 3);
var chapter_17 = Math.ceil(Math.abs(document.getElementById("chapter_17").getBoundingClientRect().left)) + (innerStart * 3);
var chapter_18 = Math.ceil(Math.abs(document.getElementById("chapter_18").getBoundingClientRect().left)) + (innerStart * 3);
var chapter_19 = Math.ceil(Math.abs(document.getElementById("chapter_19").getBoundingClientRect().left)) + (innerStart * 3);
var chapter_20 = Math.ceil(Math.abs(document.getElementById("chapter_20").getBoundingClientRect().left)) + (innerStart * 3);
var chapter_21 = Math.ceil(Math.abs(document.getElementById("chapter_21").getBoundingClientRect().left)) + (innerStart * 3);
var chapter_22 = Math.ceil(Math.abs(document.getElementById("chapter_22").getBoundingClientRect().left)) + (innerStart * 3);
var chapter_23 = Math.ceil(Math.abs(document.getElementById("chapter_23").getBoundingClientRect().left)) + (innerStart * 3);


console.log("chapter_1: " + chapter_1);
console.log("chapter_2: " + chapter_2);
console.log("chapter_3: " + chapter_3);
console.log("chapter_4: " + chapter_4);
console.log("chapter_5: " + chapter_5);
console.log("chapter_6: " + chapter_6);
console.log("chapter_7: " + chapter_7);
console.log("chapter_8: " + chapter_8);
console.log("chapter_9: " + chapter_9);
console.log("chapter_10: " + chapter_10);
console.log("chapter_11: " + chapter_11);
console.log("chapter_12: " + chapter_12);
console.log("chapter_13: " + chapter_13);
console.log("chapter_14: " + chapter_14);
console.log("chapter_15: " + chapter_15);
console.log("chapter_16: " + chapter_16);
console.log("chapter_17: " + chapter_17);
console.log("chapter_18: " + chapter_18);
console.log("chapter_19: " + chapter_19);
console.log("chapter_20: " + chapter_20);
console.log("chapter_21: " + chapter_21);
console.log("chapter_22: " + chapter_22);
console.log("chapter_23: " + chapter_23);


function scrollChapter_1(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_1; }
function scrollChapter_2(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_2; }
function scrollChapter_3(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_3; }
function scrollChapter_4(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_4; }
function scrollChapter_5(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_5; }
function scrollChapter_6(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_6; }
function scrollChapter_7(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_7; }
function scrollChapter_8(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_8; }
function scrollChapter_9(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_9; }
function scrollChapter_10(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_10; }
function scrollChapter_11(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_11; }
function scrollChapter_12(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_12; }
function scrollChapter_13(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_13; }
function scrollChapter_14(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_14; }
function scrollChapter_15(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_15; }
function scrollChapter_16(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_16; }
function scrollChapter_17(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_17; }
function scrollChapter_18(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_18; }
function scrollChapter_19(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_19; }
function scrollChapter_20(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_20; }
function scrollChapter_21(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_21; }
function scrollChapter_22(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_22; }
function scrollChapter_23(obj) { anchorNav = document.getElementById("content").scrollLeft = chapter_23; }
*/

function positionZoom() {
    (posSpan = Math.floor( $("#inner").find("span:last-of-type").position().left )),
    (cntWidth = posSpan + (areaWidth + gap)),
    (pageTot = pageTot_SUM);
}


function getPositionDom() {
  $("#content").offset(), parseInt($("#content").css("left"), 10);
}
function renderInfoPage() {
  console.log(" - - - - - - - - chapters");
  $("#infopage").html("1" + "  <span>/</span>  " + "23");
}
function hasContentAnimateQueue() {
  return 0 !== $("#content").queue().length;
}

/* (pageCur < pageTot) */
function next() {
    if (!hasContentAnimateQueue()) {
        if (pageCur >= 1 && pageCur < pageTot_SUM ) {
            var t = document.getElementById("content").scrollLeft = areaWidth * pageCur; 
            var e = $("#content");
                console.log(" - - - - - - - - NEXT - IF");
                pageCur++,
                renderInfoPage();
                console.log("t: " + t);
                console.log("pageCur: " + pageCur);
        } else if (pageCur = pageTot_SUM) {
            console.log(" - - - - - - - - NEXT - ELSE IF");    
            var t = document.getElementById("content").scrollLeft = 0;
        }
    }
}
function prev() {
    if (!hasContentAnimateQueue()) {
        if (pageCur > 1) { 
            var t = document.getElementById("content").scrollLeft = (areaWidth * (pageCur - 1.9)); 
            var e = $("#content");
                console.log(" - - - - - - - - PREV - IF");
                pageCur--,
                renderInfoPage();
                console.log("t: " + t);
                console.log("pageCur: " + pageCur);
        } else if (pageCur = 1) {
            console.log(" - - - - - - - - PREV - ELSE IF");
            var t = document.getElementById("content").scrollLeft = areaWidth * pageTot_SUM; 
        }
    } 
}



function start() {
  setTimeout(() => {
    console.log(" - - - - - - - - START");
    var e = document.getElementById("prev"); e.addEventListener("click", prev),
        (e = document.getElementById("next")).addEventListener("click", next);
    
    var t = document.getElementById("inner"); 
        t.addEventListener("swiped-left", prev),
        t.addEventListener("swiped-right", prev);
        $("#inner").append("<span style='width: 800px;'>Hello</span>");
    
    
    var width_1 = Math.abs(document.getElementById("width_1").getBoundingClientRect().height);
    console.log("width_1: " + width_1);
    var width_X = Math.abs(document.getElementById("width_X").getBoundingClientRect().height);
    console.log("width_X: " + width_X);
    var width_3 = Math.abs(document.getElementById("width_3").getBoundingClientRect().height);
    console.log("width_3: " + width_3);
    var width_4 = Math.abs(document.getElementById("width_4").getBoundingClientRect().height);
    console.log("width_4: " + width_4);
    var width_5 = Math.abs(document.getElementById("width_5").getBoundingClientRect().height);
    console.log("width_5: " + width_5);
    var width_6 = Math.abs(document.getElementById("width_6").getBoundingClientRect().height);
    console.log("width_6: " + width_6);
    var width_7 = Math.abs(document.getElementById("width_7").getBoundingClientRect().height);
    console.log("width_7: " + width_7);
    var width_8 = Math.abs(document.getElementById("width_8").getBoundingClientRect().height);
    console.log("width_8: " + width_8);
    var width_9 = Math.abs(document.getElementById("width_9").getBoundingClientRect().height);
    console.log("width_9: " + width_9);
    var width_10 = Math.abs(document.getElementById("width_10").getBoundingClientRect().height);
    console.log("width_10: " + width_10);
    var width_11 = Math.abs(document.getElementById("width_11").getBoundingClientRect().height);
    console.log("width_11: " + width_11);
    var width_12 = Math.abs(document.getElementById("width_12").getBoundingClientRect().height);
    console.log("width_12: " + width_12);
    var width_13 = Math.abs(document.getElementById("width_13").getBoundingClientRect().height);
    console.log("width_13: " + width_13);
    var width_14 = Math.abs(document.getElementById("width_14").getBoundingClientRect().height);
    console.log("width_14: " + width_14);
    var width_15 = Math.abs(document.getElementById("width_15").getBoundingClientRect().height);
    console.log("width_15: " + width_15);
    var width_16 = Math.abs(document.getElementById("width_16").getBoundingClientRect().height);
    console.log("width_16: " + width_16);
    var width_17 = Math.abs(document.getElementById("width_17").getBoundingClientRect().height);
    console.log("width_17: " + width_17);
    var width_18 = Math.abs(document.getElementById("width_18").getBoundingClientRect().height);
    console.log("width_18: " + width_18);
    var width_19 = Math.abs(document.getElementById("width_19").getBoundingClientRect().height);
    console.log("width_19: " + width_19);
    var width_20 = Math.abs(document.getElementById("width_20").getBoundingClientRect().height);
    console.log("width_20: " + width_20);
    var width_21 = Math.abs(document.getElementById("width_21").getBoundingClientRect().height);
    console.log("width_21: " + width_21);
    var width_22 = Math.abs(document.getElementById("width_22").getBoundingClientRect().height);
    console.log("width_22: " + width_22);
    var width_23 = Math.abs(document.getElementById("width_23").getBoundingClientRect().height);
    console.log("width_23: " + width_23);

    var chaptersSUM = width_1 + width_X + width_3 + width_4 + width_5 + width_6 + width_7 + width_8 + width_9 + width_10 + width_11 + width_12 + width_13 + width_14 + width_15 + width_16 + width_17 + width_18 + width_19 + width_20 + width_21 + width_22 + width_23;
    

    console.log(" - - - - - - - - * - - - - - - - - ");

    var span_1 = Math.abs(document.getElementById("span_1").getBoundingClientRect().height);
    console.log("span_1: " + span_1);

    console.log("Chapters SUM: " + chaptersSUM);

    pageTot_SUM =  Math.floor( (chaptersSUM / pgwidth)  )
    console.log("Pages by SUM: " + pageTot_SUM);
    

    var scroller = document.getElementById("content");  
    var output = document.getElementById("output");


    innerPages = Math.floor( $("#inner").width() );

        pageCur = 1;
        pageTot =  pageTot_SUM;
        console.log("pageTot: " + pageTot);

        pagina = $("#content"),
        pgwidth = pagina.width(),
        areaWidth = pgwidth,

        console.log("pgwidth: " + pgwidth);
        console.log("areaWidth: " + areaWidth);

    getPositionDom(), renderInfoPage();
  }, 1000)
}

window.addEventListener("load",  start() );

