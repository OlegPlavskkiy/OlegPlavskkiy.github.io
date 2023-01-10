let header = document.querySelector(".header");
window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 250) {
    header.classList.add("header_active");
    // line1.classList.add("active");
    // line2.classList.add("active");
    // line3.classList.add("active");
  } else {
    header.classList.remove("header_active");
    // line1.classList.remove("active");
    // line2.classList.remove("active");
    // line3.classList.remove("active");
  }
};

// let icon = document.getElementById("icon");
// let line1 = document.getElementById("a");
// let line2 = document.getElementById("b");
// let line3 = document.getElementById("c");
// icon.addEventListener("click", function () {
//   line1.classList.toggle("a");
//   line2.classList.toggle("c");
//   line3.classList.toggle("b");
// });

function popUP() {
  const dialog = document.querySelector(".pop_up_wrapper");
  dialog.classList.add("shown");
  header.classList.add("header_roll_up");
}
function closePopUp() {
  const dialog = document.querySelector(".pop_up_wrapper");
  dialog.classList.remove("shown");
  header.classList.remove("header_roll_up");

}

function showSideBar() {
  const dialog = document.querySelector(".side_bar_wrapper");
  dialog.classList.add("shown");
  header.classList.add("header_roll_up");
  
}
function closeSideBar() {
  const dialog = document.querySelector(".side_bar_wrapper");
  dialog.classList.remove("shown");
  header.classList.remove("header_roll_up");
}

function showCart () {
  const dialog = document.querySelector(".cart_wrapper");
  dialog.classList.add("shown");
  header.classList.add("header_roll_up");
}
function closeCart () {
  const dialog = document.querySelector(".cart_wrapper");
  dialog.classList.remove("shown");
  header.classList.remove("header_roll_up");
}
