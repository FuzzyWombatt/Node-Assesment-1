/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */
const ouput = document.getElementById("ouput");

window.addEventListener("keypress", (eve) => {
  console.log(eve.key);
  if (eve.key === " ") {
    output.innerHTML = `<div> You've pressed the "space" key. It's key code is ${eve.keyCode}`;
  } else {
    output.innerHTML = `<div> You've pressed the "${eve.key}" key. It's key code is ${eve.keyCode}`;
  }
});
