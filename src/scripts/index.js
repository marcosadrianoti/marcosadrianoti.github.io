import { portifolio } from '../data/portifolio.js';

const {
  personal_info: { name_1, name_2, photo, alt },
} = portifolio;

// Inclui a foto.
const landing = document.getElementById('landing');

const picture = document.createElement('img');
picture.src = photo;
picture.alt = alt;

landing.appendChild(picture);

// Inclui o primeiro e o segundo nome no HTML.

const name = document.getElementById('name');

const firstName = document.createElement('span');
firstName.textContent = name_1.toUpperCase();
firstName.classList.add('first-name');

const secondName = document.createElement('span');
secondName.textContent = name_2.toUpperCase();
secondName.classList.add('second-name');

name.appendChild(firstName);
name.appendChild(secondName);

// Cria os terminais.

const createTerminal = (typedTitle, targetTerminal) => {
  const terminal = document.getElementById(targetTerminal);

  const blank = document.createElement('span');
  blank.textContent = '>';
  const title = document.createElement('span');
  title.classList.add('cursor');
  title.textContent = typedTitle;

  terminal.appendChild(blank);
  terminal.appendChild(title);
};

const {
  terminal: { title_1, title_2, title_3 },
} = portifolio;

createTerminal(title_1, 'terminal_1');
createTerminal(title_2, 'terminal_2');
createTerminal(title_3, 'terminal_3');

// const testando = () => {
//   console.log('teste');
// }

// const btn = document.getElementById('myBtn');
// console.log(btn);
// btn.addEventListener('click', testando);
