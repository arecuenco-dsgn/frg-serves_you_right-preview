function showNote(clicked_class) {
    var x = Array.from (
        document.getElementsByClassName(clicked_class + '_text')
    );

    x.forEach(clicked_class => {
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
    var z = Array.from (
        document.getElementsByClassName('notes_close')
    );

    z.forEach(clicked_class => {
        clicked_class.style.display = "none";
        }
    );
}

function resize(){positionZoom(),renderInfoPage()}window.onresize=resize;const appHeight=()=>{document.documentElement.style.setProperty("--app-height",`${window.innerHeight}px`)};window.addEventListener("resize",appHeight),appHeight();var root=document.querySelector(":root"),root_var=getComputedStyle(root),get_gap=root_var.getPropertyValue("--gap");backPage=sessionStorage.getItem("backPage");var lastPage,wordsPage,posSpan,cntWidth,pageTot,pageCur,pagina=$("#item_paginas"),pgwidth=pagina.width(),gap=parseInt(get_gap),areaWidth=pgwidth,columnWidth=pgwidth-gap,animDuration=400,contentPos=null;function positionZoom(){elmSpan=$("#inner").append("<span></span>"),posSpan=Math.floor($("#inner").find("span:last-of-type").position().left),cntWidth=posSpan+(areaWidth+gap),pageTot=Math.ceil(cntWidth/(areaWidth+gap))}function getPositionDom(){$("#content").offset(),parseInt($("#content").css("left"),10)}function renderInfoPage(){$("#infopage").html(pageCur+"  <span>/</span>  "+pageTot)}function hasContentAnimateQueue(){return 0!==$("#content").queue().length}function next(){if(pageTot>0&&pageCur<pageTot){if(!hasContentAnimateQueue()){var e=$("#content"),t=contentPos-areaWidth-gap;contentPos=t,e.animate({left:t+"px"},animDuration),pageCur++,renderInfoPage()}}else 23!=chapter_page&&"on"!=wordsPage&&(next_chapter_page=chapter_page+1,window.location.href="./chapter_"+next_chapter_page+".html")}function prev(){if(pageCur>1){if(!hasContentAnimateQueue())if(backPage>=50){var e=$("#content");contentPos=t=lastPage+pgwidth+gap,e.animate({left:t+"px"},animDuration),pageCur--,renderInfoPage(),sessionStorage.setItem("backPage",10),backPage=sessionStorage.getItem("backPage")}else{var t;e=$("#content");contentPos=t=contentPos+areaWidth+gap,e.animate({left:t+"px"},animDuration),pageCur--,renderInfoPage()}}else 1!=chapter_page&&(sessionStorage.setItem("backPage",100),prev_chapter_page=chapter_page-1,window.location.href="./chapter_"+prev_chapter_page+".html")}function start(){var e=document.getElementById("prev");e.addEventListener("click",prev),(e=document.getElementById("next")).addEventListener("click",next);var t=document.getElementById("inner");t.addEventListener("swiped-left",prev),t.addEventListener("swiped-right",prev);$("#inner").append("<span></span>");var a=Math.floor($("#inner").find("span:last-of-type").position().left);if(a+=columnWidth,pos=parseInt($("#inner").css("-webkit-column-gap"),10),a-=gap,$("#inner").find("span:last-of-type").remove(),pageTot=(cntWidth=a)/(areaWidth+gap)<=1?1:Math.ceil(cntWidth/(areaWidth+gap)),backPage<=50)pageCur=1;else if(backPage>=50){var n=$("#content");ajustPages=pageTot-1,lastPage=-pgwidth*ajustPages-gap*ajustPages,n.css({left:lastPage+"px"}),newPos=lastPage,pageCur=pageTot,sessionStorage.setItem("backPage",10)}getPositionDom(),renderInfoPage()}start();