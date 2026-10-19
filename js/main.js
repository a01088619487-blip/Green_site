
// 모바일 메뉴
const hambar = document.querySelector("#hamburger");
const mbMenu = document.querySelector("#mobile-menu");
const overlay = document.querySelector(".overlay");
hambar.addEventListener("click", () => {
  // console.log("click"); 햄버거 클릭 완료
  mbMenu.classList.toggle("active");
  overlay.classList.add("active");
  hambar.classList.add("active");
  // 스크롤 방지
  document.body.style.overflow = "hidden";
});

overlay.addEventListener("click", () => {
  mbMenu.classList.remove("active");
  overlay.classList.remove("active");
  hambar.classList.remove("active");
  // 다시 스크롤 생성
  document.body.style.overflow = "";
});
// 으에엥;;뭔말일려나,,
