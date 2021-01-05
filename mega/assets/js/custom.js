
  // 슬라이드
  var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });

  // 슬라이드2
  var mySwiper = new Swiper('.swiper-container2', {
    breakpoints: {
      1: {
        slidesPerView: 1.4,
        spaceBetween: 15
      },
      601: {
       slidesPerView: 2,
       spaceBetween: 15
      },
      769: {
       slidesPerView: 3,
       spaceBetween: 15
      },
      961: {
       slidesPerView: 4,
       spaceBetween: 15
      },
     },
    // autoplay: {
    // delay: 4000,
    // disableOnInteraction: false,
    // },
    });

  // 포스터 탭 메뉴
  var mov_btn = $(".poster_title > ul > li");
  var mov_cont = $(".poster_main > div");

  mov_cont.hide().eq(0).show();

  mov_btn.click(function(e){
  e.preventDefault();
  var target = $(this);
  var index = target.index();

  mov_btn.removeClass("active");
  target.addClass("active");

  mov_cont.css("display","none");
  mov_cont.eq(index).css("display","block");
  });

  // 공지사항 탭 메뉴
  var notice_tabmenu = $(".notice");

  notice_tabmenu.find("ul > li > ul").hide();
  notice_tabmenu.find("ul > li.active > ul").show();

  function tablist(e){
    e.preventDefault();
    var target = $(this);

    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
  };

  notice_tabmenu.find("ul > li > a").click(tablist).focus(tablist);