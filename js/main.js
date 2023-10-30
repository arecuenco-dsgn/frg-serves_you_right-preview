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
    pagina = $("#item_paginas"),
    pgwidth = pagina.width(),
    gap = parseInt(get_gap),
    areaWidth = Math.floor(pgwidth),
    columnWidth = pgwidth - gap,
    animDuration = 400,
    contentPos = null;
function positionZoom() {
    (elmSpan = $("#inner").append("<span></span>")),
    (posSpan = Math.floor( $("#inner").find("span:last-of-type").position().left )),
    (cntWidth = posSpan + (areaWidth + gap)),
    (pageTot = Math.ceil(cntWidth / (areaWidth + gap)));
}


console.log("cntWidth: " + cntWidth),
console.log("areaWidth: " + areaWidth),
console.log("pageTot 1: " + pageTot),
console.log("gap: " + gap);


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
            var e = $("#content");
                console.log("contentPos: " + contentPos);
                t = contentPos - areaWidth - gap;
                (contentPos = t),
                e.animate({ left: t + "px" }, animDuration),
                pageCur++,
                renderInfoPage();
                console.log("t: " + t);
        }   else if (pageCur = pageTot) {
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
        var e = $("#content");
            console.log("contentPos: " + contentPos);
            t = contentPos + pgwidth + gap;
            (contentPos = t),
            e.animate({ left: t + "px" }, animDuration),
            pageCur--,
            renderInfoPage();
            console.log("t: " + t);
        } else if (pageCur = 1) {
            var e = $("#content");
                t = -(cntWidth - pgwidth);
                (contentPos = t),
                e.animate({ left: t + "px" }, animDuration),
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
    console.log("a: " + a);
    
    innerPages = Math.floor( $("#inner").width() );
    console.log("innerPages: " + innerPages);


    console.log("a += columnWidth: " + (a += columnWidth));
    
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

