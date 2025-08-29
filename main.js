let n = 10
const array = []

for (let i = 0; i <= n; i++) {
  array[i] = Math.random();
}

console.log(array)

for (let i = 0; i < array.length; i++) {
  const bar = document.createElement('div');
  bar.style.height = array[i] * 100 + '%';
  bar.classList.add('bar')
  container.appendChild(bar)  
}
