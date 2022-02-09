const box = document.getElementById("red-box");

box.addEventListener("mousemove", (eve) => {
  box.innerHTML = `<div class='cord'>(${eve.movementX}, ${eve.clientY}) Window Cord</div>`;
});
