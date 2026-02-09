const btn = document.getElementById("load");
const list = document.getElementById("list");

btn.addEventListener("click", async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    list.innerHTML = "";
    data.forEach(user => {
      const li = document.createElement("li");
      li.innerText = user.name;
      list.appendChild(li);
    });
  } catch (err) {
    console.log("Error fetching data", err);
  }
});
