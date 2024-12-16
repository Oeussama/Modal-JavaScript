const show = document.querySelector("#show");
const popUp = document.querySelector(".popup");
const btnClose = document.querySelector("#close-popup");

// * show the modal when clicking on show button 
show.addEventListener("click", () => {
  popUp.classList.add("active");
});
// * close the modal when clicking on close button
btnClose.addEventListener("click", () => {
  popUp.classList.remove("active");
});
// * close the modal pressing Escape 
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    popUp.classList.remove("active");
  }
});
