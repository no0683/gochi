var body = {
  배경색:function (색){
      // document.querySelector('body').style.backgroundColor=색;
      $('body').css('backgroundColor',색);
  },
  글자색:function (색){
      // document.querySelector('body').style.color=색;
      $('body').css('color',색);
  }
}
var links = {
  링크색:function (색){
      // var alist = document.querySelectorAll('a')
      // var i = 0;
      // while(i<alist.length){
      //   alist[i].style.color=색;
      //   i = i + 1;
      // }
      $('a').css('color',색);
  },
  예외색:function (색){
      // var alist = document.querySelectorAll('.예외')
      // var i = 0;
      // while(i<alist.length){
      //   alist[i].style.color=색;
      //   i = i + 1;
      // }
      $('.예외').css('color',색);
  }
}
function 스위치(대체){
    if(대체.value === '야간모드') {
    body.배경색('black');
    body.글자색('white');
    대체.value='주간모드';
    links.링크색('white');
    links.예외색('yellow');
  } else {
    body.배경색('white');
    body.글자색('black');
    대체.value='야간모드';
    links.링크색('black');
    links.예외색('blue');
  }
}
