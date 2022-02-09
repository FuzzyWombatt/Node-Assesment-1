// make the box disapear when the user clicks it
const box = document.getElementById("red-box");

box.addEventListener("click", () => {
  box.style.visibility = "hidden";
});
