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
  positionZoom(), renderInfoPage();
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

    console.log("calcPage ------------------");
    pageCalc = contentPos / areaWidth;
    console.log("pageCalc: " + pageCalc);
    
    
    const MIN = min ?? 1;
    const MAX = max ?? pageTot;
    roundingCalc = Math.ceil(pageCalc);
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


function scrollChapter(obj) {
    console.log("- - - - - - - - - - - - - - - - - - - -");

    e = obj.getAttribute("data-href");
    href = e.substring(1);
    
    innerPos = Math.abs(document.getElementById("inner").getBoundingClientRect().left);
    chapterPos = Math.abs(document.getElementById(href).getBoundingClientRect().left);
    finalScroll = chapterPos + innerPos ;
    positionCalc = pageCur * areaWidth;

    /*
    if (innerPos >= 0) {
      console.log("CHAPTER NAV 1 - - - -");
      anchorNav = document.getElementById("content").scrollLeft = finalScroll;
      console.log("anchorNav: " + anchorNav);

    } else if (innerPos <= 0) {
      console.log("CHAPTER NAV 2 - - - -");
      anchorNav = document.getElementById("content").scrollLeft = Math.abs(innerPos) + chapterPos;
      console.log("anchorNav: " + anchorNav);
    }
    */
}


function positionZoom() {
    (elmSpan = $("#inner").append("<span></span>")),
    (posSpan = Math.floor( $("#inner").find("span:last-of-type").position().left )),
    (cntWidth = posSpan + (areaWidth + gap)),
    (pageTot = Math.ceil(cntWidth / (areaWidth + gap)));
}


function getPositionDom() {
  $("#content").offset(), parseInt($("#content").css("left"), 10);
}
function renderInfoPage() {
  $("#infopage").html(pageCur + "  <span>/</span>  " + pageTot);
}
function hasContentAnimateQueue() {
  return 0 !== $("#content").queue().length;
}

/* (pageCur < pageTot) */
function next() {
  
    if (!hasContentAnimateQueue()) {
        if (pageCur >= 1) {
            var t = document.getElementById("content").scrollLeft = areaWidth * pageCur; 
            var e = $("#content");
                console.log("NEXT - - - -");
                /*
                t = contentPos - areaWidth - gap;
                (contentPos = t),
                e.animate({ left: t + "px" }, animDuration),
                */
                pageCur++,
                renderInfoPage();
                console.log("t: " + t);
                console.log("pageCur: " + pageCur);
        } else if (pageCur = pageTot) {
            var e = $("#content");
                e.animate({ left: 0 + "px" }, animDuration),
                pageCur = 1,
                renderInfoPage();
        }
    }
}
function prev() {
    if (!hasContentAnimateQueue()) {
        if (pageCur > 1) { 
        var t = document.getElementById("content").scrollLeft = (areaWidth * (pageCur - 2)); 
        var e = $("#content");
            console.log("PREV - - - -");
            /*
            t = contentPos + pgwidth + gap;
            (contentPos = t),
            e.animate({ left: t + "px" }, animDuration),
            */
            pageCur--,
            renderInfoPage();
            console.log("t: " + t);
            console.log("pageCur: " + pageCur);
        } else if (pageCur = 1) {
            var t = document.getElementById("content").scrollLeft += a; 
            var e = $("#content");
                /*
                t = -(cntWidth - pgwidth);
                (contentPos = t),
                e.animate({ left: t + "px" }, animDuration),
                */
                pageCur = pageTot,
                renderInfoPage();
                console.log("t: " + t);
        }
    } 
}
function start() {
    var e = document.getElementById("prev"); e.addEventListener("click", prev),
        (e = document.getElementById("next")).addEventListener("click", next);
    
    var t = document.getElementById("inner"); 
        t.addEventListener("swiped-left", prev),
        t.addEventListener("swiped-right", prev);
        $("#inner").append("<span></span>");
    
    var a = Math.floor($("#inner").find("span:last-of-type").position().left);
    
    var scroller = document.getElementById("content");  
    var output = document.getElementById("output");

    output.textContent = `scrollTop: ${scroller.scrollleft}`;

    innerPages = Math.floor( $("#inner").width() );

    

    
    /* if (    ((a += columnWidth),
            (pos = parseInt($("#inner").css("-webkit-column-gap"), 10)),
            (a -= gap),
            (pageTot =  (cntWidth = a) / (areaWidth + gap) <= 1
                        ? 1
                        : Math.ceil(cntWidth / (areaWidth + gap))),

                        console.log("pageTot 2: " + pageTot)

            )
                
        
        )

        console.log("pageTot 3: " + pageTot),
        console.log("gap: " + gap), */
        pageCur = 1;
        pageTot =  Math.ceil( (cntWidth = a) / (areaWidth + gap) - 1 )
        /* else {  var n = $("#content");
                (ajustPages = pageTot - 1),
                (lastPage = -pgwidth * ajustPages - gap * ajustPages),
                n.css({ left: lastPage + "px" }),
                (newPos = lastPage),
                (pageCur = 1);
                console.log("lastPage: " + lastPage);
                console.log("ajustPages: " + ajustPages);
                console.log("newPos: " + newPos);
                console.log("pageCur: " + pageCur);
        } */
    getPositionDom(), renderInfoPage();
}
start();

