// 헤더 버튼 효과
var menu_btn = document.querySelector("#menu_btn");
var menu_nav = document.querySelector("#menu_nav");
var menu_btn_ham = document.querySelector("#menu_btn > a > span");
var menu_btn_a = document.querySelector("#menu_btn > a");


menu_btn.onclick = function(){
    if(menu_nav.classList != "live"){
        menu_nav.classList = "live";
        menu_btn_ham.classList = "live";
        menu_btn.classList = "live";
    } else {
        menu_nav.classList = "";
        menu_btn_ham.classList = "";
        menu_btn.classList = "";
    }
};

// 탑 버튼 효과
var topButton = document.querySelector("#top_button");

topButton.addEventListener("click", backToTop);

function backToTop(){
    window.scrollTo(0, 0);
};

// 패럭랙스 효과
window.addEventListener("scroll", function(){
    var pageYOffset = window.pageYOffset + screen.height / 3;

    // 출력
    document.querySelector(".scrollTop").textContent = parseInt(pageYOffset);
    document.querySelector(".s10T").textContent = document.querySelector("#intro").offsetTop;
    document.querySelector(".s20T").textContent = document.querySelector("#skills").offsetTop;
    document.querySelector(".s30T").textContent = document.querySelector("#result1").offsetTop;
    document.querySelector(".s40T").textContent = document.querySelector("#result2").offsetTop;
    document.querySelector(".s50T").textContent = document.querySelector("#result3").offsetTop;
    document.querySelector(".s60T").textContent = document.querySelector("#the_others").offsetTop;
    document.querySelector(".s70T").textContent = document.querySelector("#contacts").offsetTop;

    // 출력(레드)
    if(pageYOffset > document.querySelector("#intro").offsetTop){
        document.querySelector(".s10T").style.color = "red";
    } else {
        document.querySelector(".s10T").style.color = "black";
    }
    if(pageYOffset > document.querySelector("#skills").offsetTop){
        document.querySelector(".s20T").style.color = "red";
    } else {
        document.querySelector(".s20T").style.color = "black";
    }
    if(pageYOffset > document.querySelector("#result1").offsetTop){
        document.querySelector(".s30T").style.color = "red";
    } else {
        document.querySelector(".s30T").style.color = "black";
    }
    if(pageYOffset > document.querySelector("#result2").offsetTop){
        document.querySelector(".s40T").style.color = "red";
    } else {
        document.querySelector(".s40T").style.color = "black";
    }
    if(pageYOffset > document.querySelector("#result3").offsetTop){
        document.querySelector(".s50T").style.color = "red";
    } else {
        document.querySelector(".s50T").style.color = "black";
    }
    if(pageYOffset > document.querySelector("#the_others").offsetTop){
        document.querySelector(".s60T").style.color = "red";
    } else {
        document.querySelector(".s60T").style.color = "black";
    }
    if(pageYOffset > document.querySelector("#contacts").offsetTop){
        document.querySelector(".s70T").style.color = "red";
    } else {
        document.querySelector(".s70T").style.color = "black";
    }

    // 나타내기
    if(pageYOffset > document.querySelector("#intro").offsetTop){
        document.querySelector("#menu_nav").classList.add("live2");
    } else {
        document.querySelector("#menu_nav").classList.remove("live2");
    }
    if(pageYOffset > document.querySelector("#intro").offsetTop){
        document.querySelector("#topButton").classList.add("show");
        document.querySelector("#menu_nav > ul > li:nth-child(1)").classList.add("live");
    } else {
        document.querySelector("#topButton").classList.remove("show");
        document.querySelector("#menu_nav > ul > li:nth-child(1)").classList.remove("live");
    }
    if(pageYOffset > document.querySelector("#skills").offsetTop){
        document.querySelector("#menu_nav > ul > li:nth-child(1)").classList.remove("live");
        document.querySelector("#menu_nav > ul > li:nth-child(2)").classList.add("live");
    } else {
        document.querySelector("#menu_nav > ul > li:nth-child(2)").classList.remove("live");
    }
    if(pageYOffset > document.querySelector("#result1").offsetTop){
        document.querySelector("#menu_nav > ul > li:nth-child(2)").classList.remove("live");
        document.querySelector("#menu_nav > ul > li:nth-child(3)").classList.add("live");
    } else {
        document.querySelector("#menu_nav > ul > li:nth-child(3)").classList.remove("live");
    }
    if(pageYOffset > document.querySelector("#the_others").offsetTop){
        document.querySelector("#menu_nav > ul > li:nth-child(3)").classList.remove("live");
        document.querySelector("#menu_nav > ul > li:nth-child(4)").classList.add("live");
    } else {
        document.querySelector("#menu_nav > ul > li:nth-child(4)").classList.remove("live");
    }
    if(pageYOffset > document.querySelector("#contacts").offsetTop){
        document.querySelector("#menu_nav > ul > li:nth-child(4)").classList.remove("live");
        document.querySelector("#menu_nav > ul > li:nth-child(5)").classList.add("live");
    } else {
        document.querySelector("#menu_nav > ul > li:nth-child(5)").classList.remove("live");
    }
});