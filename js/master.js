console.log($(window).width());

// let isMobile ;

// if($(window).width() > 480) {
//     isMobile = false;
    
// }else { isMobile = true;

// }

const isMobile  = $(window).width() <= 480
const $grid = $('#Grid');
const $anchors = $grid.find('a');



// console.log(isMobile);
// console.log($grid);



function setGrid() {
    if(isMobile === true) {
    $grid.addClass('grid-2');
    return; //(後面都不會執行了)
}
    $grid.addClass('grid-3');
}
// 把函式封裝

// 要呼叫 function 才會用(就可以共用)

// === 比較嚴景的判斷法

// console.log( '1 == 1:', 1 == 1);
// console.log( '1 === 1:', 1 === 1);
// console.log( '1 == "1:"', 1 == 1);
// console.log( '1 === "1:"', 1 === '1');

function setScroll () {
    if(!isMobile)return;

    const $nav = $('#Nav')

        $(window).scroll(function(){
    if($(this).scrollTop()>0) {
        $nav.addClass('nav-active');
        return;
    }
    $nav.removeClass('nav-active');
}
);}





function setInit() {
    setGrid();
}

function setEvent(){
    setScroll();
    setFancybox();
}

function setFancybox(){
    $anchors.fancybox({});
};



setEvent();
setInit();








