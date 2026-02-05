const users = [
  { id: 1, name: "KT", role: "Student", active: true },
  { id: 2, name: "Aman", role: "Developer", active: false },
  { id: 3, name: "Riya", role: "Designer", active: true }
];

// access
console.log(users[0].name);

// filter active users
const activeUsers = users.filter(u => u.active);
console.log(activeUsers);

// map names
const names = users.map(u => u.name);
console.log(names);

// find one user
const dev = users.find(u => u.role === "Developer");
console.log(dev);
