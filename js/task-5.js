// Напиши скрипт, який змінює колір фону елемента <body>
// через інлайн-стиль по кліку на button.change-color і
// задає це значення кольору текстовим вмістом для
// span.color.

const refs = {
  // body: document.querySelector(''),
  body: document.body,
  change: document.querySelector('.change-color'),
  output: document.querySelector('.color'),
};

console.dir(refs);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.change.addEventListener('click', () => {
  // const color = getRandomHexColor();
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.output.textContent = `${getRandomHexColor()}`;
});
