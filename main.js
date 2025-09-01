let n = 10;
const array = [];

init();

function init() {
  for (let i = 0; i < n; i++) {
    array[i] = Math.random();
  }

  showBars();
}

function play() {
  const copy = [...array]
  const swaps = bubbleSort(copy);
  animate(swaps)
}

function animate(swaps) {
  if (swaps.length === 0) {
    return;
  }

  const [i, j] = swaps.shift();
  [array[i], array[j]] = [array[j], array[i]];
  showBars([i, j]);
  setTimeout(() => {
    animate(swaps);
  }, 500);
}

function bubbleSort(array) {
  const swaps = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swaps.push([j, j + 1]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return swaps;
}

// function bubbleSort(array) {
//   const swaps = [];
//   do {
//     var swapped = false;
//     for (let i = 1; i < array.length; i++) {
//       if (array[i - 1] > array[i]) {
//         swapped = true;
//         swaps.push(i - 1, i);
//         [array[i - 1], array[i]] = [
//           array[i],
//           array[i - 1],
//         ];
//       }
//     }
//   } while (swapped);

//   return swaps;
// }

function showBars(indices) {
  container.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = array[i] * 100 + "%";
    bar.classList.add("bar");
    if(indices && indices.includes(i)) {
      bar.style.backgroundColor = 'red'
    }
    container.appendChild(bar);
  }
}
