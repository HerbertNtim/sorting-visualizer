let n = 10;
const array = [];

init()

function init() {
  for (let i = 0; i <= n; i++) {
    array[i] = Math.random();
  }

  showBars();
}

function play() {
  bubbleSort(array)
  showBars()
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] > array[j]) {
        const temp = array[j];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array
}

function showBars() {
  container.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = array[i] * 100 + "%";
    bar.classList.add("bar");
    container.appendChild(bar);
  }
}
