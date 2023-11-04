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

/*
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
*/

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
function renderInfoPage() {
  $("#infopage").html(pageCur + "  <span>/</span>  " + pageTot_SUM);
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
                
                console.log("Position: " + (document.getElementById("content").scrollLeft));

                console.log(" - - - - - - - - NEXT - IF - END");

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
    
    /*
    var width_1 = Math.abs(document.getElementById("width_1").getBoundingClientRect().width);
    console.log("width_1: " + width_1);
    var width_X = Math.abs(document.getElementById("width_X").getBoundingClientRect().width);
    console.log("width_X: " + width_X);
    var width_3 = Math.abs(document.getElementById("width_3").getBoundingClientRect().width);
    console.log("width_3: " + width_3);
    var width_4 = Math.abs(document.getElementById("width_4").getBoundingClientRect().width);
    console.log("width_4: " + width_4);
    var width_5 = Math.abs(document.getElementById("width_5").getBoundingClientRect().width);
    console.log("width_5: " + width_5);
    var width_6 = Math.abs(document.getElementById("width_6").getBoundingClientRect().width);
    console.log("width_6: " + width_6);
    var width_7 = Math.abs(document.getElementById("width_7").getBoundingClientRect().width);
    console.log("width_7: " + width_7);
    var width_8 = Math.abs(document.getElementById("width_8").getBoundingClientRect().width);
    console.log("width_8: " + width_8);
    var width_9 = Math.abs(document.getElementById("width_9").getBoundingClientRect().width);
    console.log("width_9: " + width_9);
    var width_10 = Math.abs(document.getElementById("width_10").getBoundingClientRect().width);
    console.log("width_10: " + width_10);
    var width_11 = Math.abs(document.getElementById("width_11").getBoundingClientRect().width);
    console.log("width_11: " + width_11);
    var width_12 = Math.abs(document.getElementById("width_12").getBoundingClientRect().width);
    console.log("width_12: " + width_12);
    var width_13 = Math.abs(document.getElementById("width_13").getBoundingClientRect().width);
    console.log("width_13: " + width_13);
    var width_14 = Math.abs(document.getElementById("width_14").getBoundingClientRect().width);
    console.log("width_14: " + width_14);
    var width_15 = Math.abs(document.getElementById("width_15").getBoundingClientRect().width);
    console.log("width_15: " + width_15);
    var width_16 = Math.abs(document.getElementById("width_16").getBoundingClientRect().width);
    console.log("width_16: " + width_16);
    var width_17 = Math.abs(document.getElementById("width_17").getBoundingClientRect().width);
    console.log("width_17: " + width_17);
    var width_18 = Math.abs(document.getElementById("width_18").getBoundingClientRect().width);
    console.log("width_18: " + width_18);
    var width_19 = Math.abs(document.getElementById("width_19").getBoundingClientRect().width);
    console.log("width_19: " + width_19);
    var width_20 = Math.abs(document.getElementById("width_20").getBoundingClientRect().width);
    console.log("width_20: " + width_20);
    var width_21 = Math.abs(document.getElementById("width_21").getBoundingClientRect().width);
    console.log("width_21: " + width_21);
    var width_22 = Math.abs(document.getElementById("width_22").getBoundingClientRect().width);
    console.log("width_22: " + width_22);
    var width_23 = Math.abs(document.getElementById("width_23").getBoundingClientRect().width);
    console.log("width_23: " + width_23);
    */
    
    
    
    console.log(" - - - - - - - - * - - - - - - - - ");

    var span_1 = Math.abs(document.getElementById("span_1").offsetLeft + pgwidth);
    console.log("span_1: " + span_1);
    var span_2 = Math.abs(document.getElementById("span_2").offsetLeft + pgwidth);
    console.log("span_2: " + span_2);
    var span_3 = Math.abs(document.getElementById("span_3").offsetLeft + pgwidth);
    console.log("span_3: " + span_3);
    var span_4 = Math.abs(document.getElementById("span_4").offsetLeft + pgwidth);
    console.log("span_4: " + span_4);
    var span_5 = Math.abs(document.getElementById("span_5").offsetLeft + pgwidth);
    console.log("span_5: " + span_5);
    var span_6 = Math.abs(document.getElementById("span_6").offsetLeft + pgwidth);
    console.log("span_6: " + span_6);
    var span_7 = Math.abs(document.getElementById("span_7").offsetLeft + pgwidth);
    console.log("span_7: " + span_7);
    var span_8 = Math.abs(document.getElementById("span_8").offsetLeft + pgwidth);
    console.log("span_8: " + span_8);
    var span_9 = Math.abs(document.getElementById("span_9").offsetLeft + pgwidth);
    console.log("span_9: " + span_9);
    var span_10 = Math.abs(document.getElementById("span_10").offsetLeft + pgwidth);
    console.log("span_10: " + span_10);
    var span_11 = Math.abs(document.getElementById("span_11").offsetLeft + pgwidth);
    console.log("span_11: " + span_11);
    var span_12 = Math.abs(document.getElementById("span_12").offsetLeft + pgwidth);
    console.log("span_12: " + span_12);
    var span_13 = Math.abs(document.getElementById("span_13").offsetLeft + pgwidth);
    console.log("span_13: " + span_13);
    var span_14 = Math.abs(document.getElementById("span_14").offsetLeft + pgwidth);
    console.log("span_14: " + span_14);
    var span_15 = Math.abs(document.getElementById("span_15").offsetLeft + pgwidth);
    console.log("span_15: " + span_15);
    var span_16 = Math.abs(document.getElementById("span_16").offsetLeft + pgwidth);
    console.log("span_16: " + span_16);
    var span_17 = Math.abs(document.getElementById("span_17").offsetLeft + pgwidth);
    console.log("span_17: " + span_17);
    var span_18 = Math.abs(document.getElementById("span_18").offsetLeft + pgwidth);
    console.log("span_18: " + span_18);
    var span_19 = Math.abs(document.getElementById("span_19").offsetLeft + pgwidth);
    console.log("span_19: " + span_19);
    var span_20 = Math.abs(document.getElementById("span_20").offsetLeft + pgwidth);
    console.log("span_20: " + span_20);
    var span_21 = Math.abs(document.getElementById("span_21").offsetLeft + pgwidth);
    console.log("span_21: " + span_21);
    var span_22 = Math.abs(document.getElementById("span_22").offsetLeft + pgwidth);
    console.log("span_22: " + span_22);
    var span_23 = Math.abs(document.getElementById("span_23").offsetLeft + pgwidth);
    console.log("span_23: " + span_23);
    
    var chaptersSUM = span_1 + span_2 + span_3 + span_4 + span_5 + span_6 + span_7 + span_8 + span_9 + span_10 + span_11 + span_12 + span_13 + span_14 + span_15 + span_16 + span_17 + span_18 + span_19 + span_20 + span_21 + span_22 + span_23;

    console.log("Chapters SUM: " + chaptersSUM);

    console.log(" - - - - - - - - * - - - - - - - - ");

    var width_1 = Math.abs(document.getElementById("width_1").setAttribute('style', 'width:' + span_1 + 'px;'));
    var width_X = Math.abs(document.getElementById("width_2").setAttribute('style', 'width:' + span_2 + 'px;'));
    var width_3 = Math.abs(document.getElementById("width_3").setAttribute('style', 'width:' + span_3 + 'px;'));
    var width_4 = Math.abs(document.getElementById("width_4").setAttribute('style', 'width:' + span_4 + 'px;'));
    var width_5 = Math.abs(document.getElementById("width_5").setAttribute('style', 'width:' + span_5 + 'px;'));
    var width_6 = Math.abs(document.getElementById("width_6").setAttribute('style', 'width:' + span_6 + 'px;'));
    var width_7 = Math.abs(document.getElementById("width_7").setAttribute('style', 'width:' + span_7 + 'px;'));
    var width_8 = Math.abs(document.getElementById("width_8").setAttribute('style', 'width:' + span_8 + 'px;'));
    var width_9 = Math.abs(document.getElementById("width_9").setAttribute('style', 'width:' + span_9 + 'px;'));
    var width_10 = Math.abs(document.getElementById("width_10").setAttribute('style', 'width:' + span_10 + 'px;'));
    var width_11 = Math.abs(document.getElementById("width_11").setAttribute('style', 'width:' + span_11 + 'px;'));
    var width_12 = Math.abs(document.getElementById("width_12").setAttribute('style', 'width:' + span_12 + 'px;'));
    var width_13 = Math.abs(document.getElementById("width_13").setAttribute('style', 'width:' + span_13 + 'px;'));
    var width_14 = Math.abs(document.getElementById("width_14").setAttribute('style', 'width:' + span_14 + 'px;'));
    var width_15 = Math.abs(document.getElementById("width_15").setAttribute('style', 'width:' + span_15 + 'px;'));
    var width_16 = Math.abs(document.getElementById("width_16").setAttribute('style', 'width:' + span_16 + 'px;'));
    var width_17 = Math.abs(document.getElementById("width_17").setAttribute('style', 'width:' + span_17 + 'px;'));
    var width_18 = Math.abs(document.getElementById("width_18").setAttribute('style', 'width:' + span_18 + 'px;'));
    var width_19 = Math.abs(document.getElementById("width_19").setAttribute('style', 'width:' + span_19 + 'px;'));
    var width_20 = Math.abs(document.getElementById("width_20").setAttribute('style', 'width:' + span_20 + 'px;'));
    var width_21 = Math.abs(document.getElementById("width_21").setAttribute('style', 'width:' + span_21 + 'px;'));
    var width_22 = Math.abs(document.getElementById("width_22").setAttribute('style', 'width:' + span_22 + 'px;'));
    var width_23 = Math.abs(document.getElementById("width_23").setAttribute('style', 'width:' + span_23 + 'px;'));



    pageTot_SUM =  Math.floor( (chaptersSUM / pgwidth)  )
    console.log("Pages by SUM: " + pageTot_SUM);
    

    var scroller = document.getElementById("content");  
    var output = document.getElementById("output");

    output.textContent = `scrollTop: ${scroller.scrollleft}`;

    innerPages = Math.floor( $("#inner").width() );

        pageCur = 1;
        pageTot =  pageTot_SUM;
        console.log("pageTot: " + pageTot);

        pagina = $("#content"),
        pgwidth = pagina.width(),
        areaWidth = pgwidth,

        console.log("pgwidth: " + pgwidth);
        console.log("areaWidth: " + areaWidth);

    getPositionDom(), renderInfoPage(), scrollPages();
  }, 1000)
}

window.addEventListener("load",  start() );

