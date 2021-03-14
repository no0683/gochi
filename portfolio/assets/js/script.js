// 클릭 효과
var menu_btn = document.querySelector("#menu_btn");
var menu_nav = document.querySelector("#menu_nav");
var menu_btn_ham = document.querySelector("#menu_btn > a > span");
var menu_btn_a = document.querySelector("#menu_btn > a");
var introduction_right_btn = document.querySelector("#introduction_right_btn");
var introduction_right_detail = document.querySelector("#introduction_right_detail");
var introduction_right_detail_btn = document.querySelector("#introduction_right_detail_btn");
var introduction_right_wrap = document.querySelector("#introduction_right_wrap");

// 메뉴 버튼
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

// 인트로 버튼
introduction_right_btn.onclick = function(){
    if(introduction_right_detail.style.display = "none"){
        introduction_right_detail.style.display = "block";
        fadeIn(introduction_right_detail);
        introduction_right_wrap.style.display = "none";
        introduction_right_wrap.style.opacity = 0;
    }
};

// 디테일 버튼
introduction_right_detail_btn.onclick = function(){
    if(introduction_right_detail.style.display = "block"){
        introduction_right_detail.style.display = "none";
        introduction_right_detail.style.opacity = 0;
        introduction_right_wrap.style.display = "block";
        fadeIn(introduction_right_wrap);
    }
};

// fadeIn 효과
function fadeIn(target){
    var isCount = 0;
    var obj = target;
    obj.style.opacity = 0.1;
    var period = setInterval(function(){
        obj.style.opacity = isCount;
        isCount = isCount + 0.1;
    if(isCount > 0.9){
        clearInterval(period);
    }    
    }, 20);
};

// Count 효과
function count(target){
    var isCount = 0;
    var obj = target;
    var period = setInterval(function(){
        obj.innerHTML = isCount;
        isCount = isCount + 5;
    if(isCount == 85 && target.classList == "skill_percent n85"){
        obj.innerHTML = isCount + "%";
        clearInterval(period);
    }
    if(isCount == 80 && target.classList == "skill_percent n80"){
        obj.innerHTML = isCount + "%";
        clearInterval(period);
    }    
    if(isCount == 60 && target.classList == "skill_percent n60"){
        obj.innerHTML = isCount + "%";
        clearInterval(period);
    }     
    if(isCount == 65 && target.classList == "skill_percent n65"){
        obj.innerHTML = isCount + "%";
        clearInterval(period);
    }   
    if(isCount == 50 && target.classList == "skill_percent n50"){
        obj.innerHTML = isCount + "%";
        clearInterval(period);
    }  
    if(isCount == 40 && target.classList == "skill_percent n40"){
        obj.innerHTML = isCount + "%";
        clearInterval(period);
    }  
    }, 100);
};

count(document.querySelector("#html_percent"));
count(document.querySelector("#css_percent"));
count(document.querySelector("#js_percent"));
count(document.querySelector("#jq_percent"));
count(document.querySelector("#ps_percent"));
count(document.querySelector("#ai_percent"));

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