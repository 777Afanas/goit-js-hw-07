//КОМПАКТНИЙ ВАРІАНТ - без зайвиї проміжних змінних
//та з об'єднаною логікою

const refs = {
  input: document.querySelector('.js-box-number'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  container: document.querySelector('#boxes'),
};

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

function createBoxes(amount) {
  const markup = [...Array(amount)]
    .map((_, i) => {
      const size = 30 + i * 10;
      return `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    })
    .join('');

  refs.container.insertAdjacentHTML('beforeend', markup);
  refs.input.value = '';
}

// const destroyBoxes = () => (refs.container.innerHTML = '');
const destroyBoxes = () => {
  refs.container.innerHTML = '';
  refs.input.value = '';
};

refs.create.addEventListener('click', () => {
  const val = Number(refs.input.value);
  if (val >= 1 && val <= 100) createBoxes(val);
});

refs.destroy.addEventListener('click', destroyBoxes);

// ПРОСТИЙ ВАРІАНТ

// const refs = {
//   input: document.querySelector('.js-box-number'),
//   create: document.querySelector('[data-create]'),
//   destroy: document.querySelector('[data-destroy]'),
//   boxes: document.querySelector('#boxes'),
// };

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// let boxesNumber = 0;

// refs.input.addEventListener('input', () => {
//   boxesNumber = Number(refs.input.value);
// });

// const createBoxes = amount => {
//   const boxesArr = [];
//   let initialWidth = 30;
//   let initialHeight = 30;

//   for (let i = 0; i < amount; i++) {
//     const boxEl = document.createElement('div');
//     boxEl.style.width = `${initialWidth}px`;
//     boxEl.style.height = `${initialHeight}px`;
//     boxEl.style.backgroundColor = getRandomHexColor();

//     boxesArr.push(boxEl);
//     initialWidth += 10;
//     initialHeight += 10;
//   }

//   boxes.append(...boxesArr);
// };

// const destroyBoxes = () => {
//   boxes.innerHTML = '';
// };

// const onCreateBtnClick = () => {
//   // if (boxesNumber < 1 || boxesNumber > 100) return;
//   if (!(boxesNumber > 1 && boxesNumber <= 100)) return;
//   createBoxes(boxesNumber);
// };

// const onDestroyBtnClick = () => {
//   destroyBoxes();
// };

// refs.create.addEventListener('click', onCreateBtnClick);
// refs.destroy.addEventListener('click', onDestroyBtnClick);
