const search = document.getElementById("search");

function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function handleSearch(event) {
  console.log("Searching for:", event.target.value);
}

const debouncedSearch = debounce(handleSearch, 500);

search.addEventListener("input", debouncedSearch);
