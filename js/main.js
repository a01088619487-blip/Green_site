// 상품 스와이퍼
const proSwiper = new Swiper(".productSwiper", {
  loop: true,
  //  반응형
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    390: {
      slidesPerView: 2.2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3.3,
      spaceBetween: 24,
    },
  },
});


// 모바일 메뉴
const hambar = document.querySelector("#hamburger")
const mbMenu = document.querySelector("#mobile-menu")
hambar.addEventListener("click", ()=> {
    // console.log("click"); 햄버거 클릭 완료
    mbMenu.classList.toggle("active")
})
