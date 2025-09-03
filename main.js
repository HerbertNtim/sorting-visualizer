let n = 10;
const array = [];

function increaseBars() {
  if (n < 40) {
    n += 5;
  }
  init();
}

function decreaseBars() {
  if (num !== 10) {
    n -= 5;
  }
  init();
}

init();

function init() {
  for (let i = 0; i < n; i++) {
    array[i] = Math.random();
  }

  showBars();
}

function play() {
  const copy = [...array];
  const moves = bubbleSort(copy);
  animate(moves);
}

function animate(moves) {
  if (moves.length === 0) {
    showBars();
    return;
  }

  const move = moves.shift();
  const [i, j] = move.indices;
  if (move.type === "swap") {
    [array[i], array[j]] = [array[j], array[i]];
  }
  showBars(move);
  setTimeout(() => {
    animate(moves);
  }, 500);
}

function bubbleSort(array) {
  const moves = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      moves.push({ indices: [j, j + 1], type: "comp" });
      if (array[j] > array[j + 1]) {
        moves.push({ indices: [j, j + 1], type: "swap" });
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return moves;
}

function showBars(move) {
  container.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = array[i] * 100 + "%";
    bar.classList.add("bar");
    if (move && move.indices.includes(i)) {
      bar.style.backgroundColor = move.type === "swap" ? "red" : "blue";
    }
    container.appendChild(bar);
  }
}
