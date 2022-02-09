// select our input by ID and assign it to the variable, "input"
// use the add event listener method to put an event on "input"
// select the div, and change the "textContent" property to the value of the events target (the input box)

const input = document.getElementById("change-me");

const output = document.getElementById("output");

input.addEventListener("keydown", (eve) => {
  if (eve.keyCode == "9") {
    output.innerText = input.value;
  }
});

document.addEventListener("click", (eve) => {
  output.innerText = input.value;
});

input.addEventListener("click", (eve) => {
  eve.stopPropagation();
});
