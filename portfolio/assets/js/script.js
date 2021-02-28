var header_left_btn = document.querySelector("#header_left_btn");
var header_left_nav = document.querySelector("#header_left_nav");


header_left_btn.onclick = function(){
    if(header_left_nav.classList != "live"){
        header_left_nav.style.opacity = 1;
        header_left_nav.classList = "live";
    } else {
        header_left_nav.style.opacity = 0;
        header_left_nav.classList = "";
    }
};