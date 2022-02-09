// app.js submit directory event-werkbook
// **UPDATE**
// use the JS DOM manipulation to add a new input to your form with its own id attribute
// upon clicking the submit button have the from data show up on the page (new element create and add to DOM)
// make sure this process can be repeated many times
const form = document.getElementById("submit-me");

let label = document.createElement("label");
label.for = "address";
label.innerText = "address: ";

let address = document.createElement("input");
address.id = "address";
address.type = "text";

form.insertBefore(label, form.children[4]);
form.insertBefore(address, form.children[5]);

const name = document.getElementById("name");
const age = document.getElementById("age");

form.addEventListener("submit", (eve) => {
  let div = document.createElement("div");
  div.textContent = `${name.value}, ${age.value}, ${address.value}`;

  form.append(div);
  eve.preventDefault();
});
