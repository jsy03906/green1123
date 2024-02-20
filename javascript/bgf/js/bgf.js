let gnb = document.querySelectorAll(".menu>li");
let gnbA = document.querySelectorAll(".menu>li>a");
let sub = document.querySelectorAll(".sub");
function menu_in() {
  document.querySelector("header").classList.add("on");
  gnbA.forEach(function (value, index) {
    value.classList.add("on");
  });
  document.querySelector(".logo img").src = "images/logo.svg";
  document.querySelector(".search img").src = "images/search_icon.svg";
  document.querySelector(".country img").src = "images/country_icon.svg";
  sub.forEach(function (value, index) {
    value.classList.add("on");
  });
  document.querySelector(".info").classList.add("on");
}
function menu_out() {
  document.querySelector("header").classList.remove("on");
  gnbA.forEach(function (value, index) {
    value.classList.remove("on");
  });
  document.querySelector(".logo img").src = "images/logo_white.svg";
  document.querySelector(".search img").src = "images/search_white_icon.svg";
  document.querySelector(".country img").src = "images/country_white_icon.svg";
  sub.forEach(function (value, index) {
    value.classList.remove("on");
  });
  document.querySelector(".info").classList.remove("on");
}
gnb.forEach(function (value, index) {
  value.onmouseenter = function () {
    menu_in();
  };
  value.onmouseleave = function () {
    menu_out();
  };
  document.querySelector(".info").onmouseenter = menu_in;
  document.querySelector(".info").onmouseleave = menu_out;
});

// 이 JavaScript 코드는 특정 웹 페이지의 메뉴 동작과 관련된 기능을 정의하는 코드입니다. 아래는 코드의 주요 기능과 동작을 간단히 설명한 것입니다.

// 요소 선택:

// let gnb은 class가 "menu"인 요소의 하위에 있는 모든 <li> 요소들을 선택합니다.
// let gnbA는 class가 "menu"인 요소의 하위에 있는 모든 <li> 요소 안에 있는 <a> 요소들을 선택합니다.
// let sub는 class가 "sub"인 모든 요소를 선택합니다.
// 메뉴 인/아웃 함수:

// menu_in 함수는 헤더를 포함한 여러 요소들에 "on" 클래스를 추가하여 메뉴가 열린 상태로 변경합니다. 또한, 이미지 소스들도 변경합니다.
// menu_out 함수는 반대로 "on" 클래스를 제거하여 메뉴가 닫힌 상태로 변경하고 이미지 소스도 초기화합니다.
// 이벤트 핸들러 등록:

// gnb에 속한 각 메뉴 항목에 대해 mouseenter와 mouseleave 이벤트 핸들러를 등록합니다. 이 때, 마우스가 메뉴에 진입하면 menu_in 함수가 호출되고, 메뉴에서 빠져나가면 menu_out 함수가 호출됩니다.
// 또한, .info 요소에 대해서도 mouseenter와 mouseleave 이벤트 핸들러를 등록하고, 마우스가 해당 영역에 들어오면 menu_in 함수를 호출하고, 나가면 menu_out 함수를 호출합니다.
// 이 코드의 주요 목적은 마우스 이벤트에 반응하여 메뉴와 관련된 요소들의 상태를 변경하는 것입니다. 메뉴가 열린 상태에서는 헤더와 이미지들이 변경되고, 메뉴가 닫힌 상태에서는 초기화됩니다. 또한, 특정 메뉴 항목에 마우스를 올리거나 떼면 해당 상태를 변화시키는 기능이 구현되어 있습니다.
