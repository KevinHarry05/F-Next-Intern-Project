let count = 0;

function increment() {
  count++;
  document.getElementById("counter").textContent = count;
}

function reset() {
  count = 0;
  document.getElementById("counter").textContent = count;
}
