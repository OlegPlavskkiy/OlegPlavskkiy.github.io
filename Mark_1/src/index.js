const header = document.querySelector(".header");
let prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", () => {
  let currentScrollpos = window.pageYOffset;

  if (prevScrollpos < currentScrollpos) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  prevScrollpos = currentScrollpos
});

window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 250) {
    header.classList.add("header_active");
  } else {
    header.classList.remove("header_active");
  }
};

function popUP() {
  const dialog = document.querySelector(".pop_up_wrapper");
  dialog.classList.add("shown");
  document.body.classList.add("disabled")
  header.classList.add("hide");
}
function closePopUp() {
  const dialog = document.querySelector(".pop_up_wrapper");
  dialog.classList.remove("shown");
  document.body.classList.remove("disabled")
  header.classList.remove("hide");
}

function showSideBar() {
  const sideBar = document.querySelector(".side_bar_body");
  sideBar.classList.add("visible_side_bar");
  document.body.classList.add("disabled")
  header.classList.add("hide");
}
function closeSideBar() {
  const sideBar = document.querySelector(".side_bar_body");
  sideBar.classList.remove("visible_side_bar");
  
  header.classList.remove("hide");
  document.body.classList.remove("disabled")
}

function showCart() {
  const dialog = document.querySelector(".cart_wrapper");
  dialog.classList.add("shown");
  header.classList.add("header_roll_up");
}
function closeCart() {
  const dialog = document.querySelector(".cart_wrapper");
  dialog.classList.remove("shown");
  header.classList.remove("header_roll_up");
}
