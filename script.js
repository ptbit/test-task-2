const paragraph = document.querySelector('.paragraph');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const clearBtn = document.querySelector('.clear');

window.addEventListener('load', () => {
  const localData = localStorage.getItem('num23');
  paragraph.textContent = localData;

  if (+localData % 2 === 0) {
    paragraph.style.color = 'green';
  } else {
    paragraph.style.color = 'red';
  }
});

form.addEventListener('submit', (e) => {
  if (input.value === '') {
    e.preventDefault();
  } else {
    localStorage.setItem('num23', input.value);
  }
});

clearBtn.addEventListener('click', (e) => {
  form.submit();
  input.value = '';
  localStorage.removeItem('num23');
});

input.addEventListener('input', (e) => {
  clearBtn.disabled = e.target.value === '';
});
