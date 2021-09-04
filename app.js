const btn1 = document.querySelector(".button-1");
const btn2 = document.querySelector(".button-2");

let active = false;
let active2 = false;

btn1.addEventListener("click", () => {
  if (active == false) {
    btn1.classList.add("buttonActive");
    btn1.textContent = "Active";
    active = true;
  } else {
    btn1.classList.remove("buttonActive");
    btn1.textContent = "Inactive";
    active = false;
  }
});

btn2.addEventListener("click", () => {
  if (active2 == false) {
    btn2.classList.add("buttonActive2");
    btn2.textContent = "Active";
    active2 = true;
  } else {
    btn2.classList.remove("buttonActive2");
    btn2.textContent = "Inactive";
    active2 = false;
  }
});
