const btn = document.getElementById("btn");

function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

function handleClick() {
  console.log("Button clicked at", new Date().toLocaleTimeString());
}

const throttledClick = throttle(handleClick, 1000);

btn.addEventListener("click", throttledClick);
