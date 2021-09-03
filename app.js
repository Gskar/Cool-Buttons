const btn1 = document.querySelector(".button-1");
const btn2 = document.querySelector(".button-2");

btn1.addEventListener("click", () => {
  btn1.classList.toggle("buttonActive");
});

btn2.addEventListener("click", () => {
  btn2.classList.toggle("buttonActive2");
});
