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