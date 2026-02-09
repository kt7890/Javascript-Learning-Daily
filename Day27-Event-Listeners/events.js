const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", function (event) {
  output.innerText = "Button clicked!";
  console.log(event.type);     // click
  console.log(event.target);   // button
});
