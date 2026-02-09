const searchInput = document.getElementById("search");
const list = document.getElementById("list");

let users = [];

// fetch users on load
async function loadUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  users = await res.json();
  render(users);
}

// render list
function render(data) {
  list.innerHTML = "";

  data.forEach(user => {
    const li = document.createElement("li");
    li.innerText = user.name;
    list.appendChild(li);
  });
}

// search logic
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(value)
  );

  render(filtered);
});

loadUsers();
