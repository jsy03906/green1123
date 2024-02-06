let gnb = document.querySelectorAll(".menu li");
let ht = document.querySelector(".sub").offsetHeight;
console.log(ht);
gnb.forEach(function (keys, item) {
  keys.onmouseenter = function () {
    document.querySelector(".lnb").style.height = ht + "px";
    document.querySelector(".lnb_wrap").classList.add("on");
  };
  keys.addEventListener("mouseleave", function () {
    document.querySelector(".lnb").style.height = 0 + "px";
    document.querySelector(".lnb_wrap").classList.add("on");
  });
});
