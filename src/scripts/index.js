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
  terminal: { title_1, title_2, title_3, title_4 },
} = portifolio;

createTerminal(title_1, 'terminal_1');
createTerminal(title_2, 'terminal_2');
createTerminal(title_3, 'terminal_3');
createTerminal(title_4, 'terminal_4');

// Inclui texto na seção about

const createParagraph = (p) => {
  const article = document.querySelector('article');

  const paragraph = document.createElement('p');
  paragraph.textContent = p;

  article.appendChild(paragraph);
};

const {
  article: { p_1, p_2, p_3 },
} = portifolio;

createParagraph(p_1);
createParagraph(p_2);
createParagraph(p_3);

// Inclui icons na seção habilidades

const { skills } = portifolio;

const icons = document.querySelector('.icons-container');

skills.forEach(({ name, src, link }) => {
  const iconLink = document.createElement('a');
  iconLink.href = link;
  iconLink.classList.add('icon');
  iconLink.target = '_blank';

  const iconImg = document.createElement('img');
  iconImg.classList.add('img-icon');
  iconImg.src = src;
  iconImg.alt = name;

  const iconName = document.createElement('p');
  iconName.textContent = name;

  iconLink.appendChild(iconImg);
  iconLink.appendChild(iconName);

  icons.appendChild(iconLink);
});

// console.log(article);

// const testando = () => {
//   console.log('teste');
// }

// const btn = document.getElementById('myBtn');
// console.log(btn);
// btn.addEventListener('click', testando);
