// Напиши скрипт, який під час набору тексту в
// інпуті input#name-input (подія input) підставляє його
// поточне значення в span#name-output як ім’я для
// привітання. Обов’язково очищай значення в інпуті по
// краях від пробілів . Якщо інпут порожній або містить
// лише пробіли, то замість імені у спан має підставлятися
// рядок "Anonymous".

const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

// Перший варіант
// refs.input.addEventListener('input', () => {
//   refs.output.textContent = refs.input.value.trim() || 'Anonymous';
// });

// Другий варіант
refs.input.addEventListener('input', e => {
  //   refs.output.textContent = e.target.value.trim() || 'Anonymous';
  refs.output.textContent = e.currentTarget.value.trim() || 'Anonymous';
});
