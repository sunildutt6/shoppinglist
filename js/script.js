const lists = [];

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addToList);
function addToList() {
  const newItem = input.value.trim();
  if (newItem.length >= 2) {
    lists.push(newItem);
    createList();
    input.value = "";
  }
  const items = document.querySelectorAll("li span");
  items.forEach(function (item) {
    item.addEventListener("click", handleClick);
  });
}
function createList() {
  const container = document.querySelector("ul");
  container.innerHTML = "";
  lists.forEach(function (list) {
    container.innerHTML += `<li><span>${list}</li></span>`;
  });
}

function handleClick() {
  event.target.classList.toggle("complete");
}
