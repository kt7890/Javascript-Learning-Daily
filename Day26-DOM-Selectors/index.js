// selectors
const title = document.getElementById("title");
const texts = document.getElementsByClassName("text");
const btn = document.querySelector("#btn");

// manipulate
btn.addEventListener("click", () => {
  title.innerText = "DOM Updated!";
  texts[0].style.color = "green";
  texts[1].style.color = "blue";
});
