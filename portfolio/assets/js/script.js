// 헤더 버튼 효과
var header_left_btn = document.querySelector("#header_left_btn");
var header_left_nav = document.querySelector("#header_left_nav");
var header_left_ham = document.querySelector("#header_left_btn > a > span");
var header_left_a = document.querySelector("#header_left_btn > a");


header_left_btn.onclick = function(){
    if(header_left_nav.classList != "live"){
        header_left_nav.classList = "live";
        header_left_ham.classList = "live";
        header_left_btn.classList = "live";
    } else {
        header_left_nav.classList = "";
        header_left_ham.classList = "";
        header_left_btn.classList = "";
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
    if(pageYOffset > document.querySelector("#result3").offsetTop){
        document.querySelector("#mega").classList.add("show");
    } else {
        document.querySelector("#mega").classList.remove("show");
    }
    if(pageYOffset > document.querySelector("#intro").offsetTop){
        document.querySelector("#topButton").classList.add("show");
    } else {
        document.querySelector("#topButton").classList.remove("show");
    }
});