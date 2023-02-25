import { BACKEND, FRONTEND, ALL, portifolio } from '../data/portifolio.js';

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
  terminal: { title_1, title_2, title_3, title_4, title_5 },
} = portifolio;

createTerminal(title_1, 'terminal_1');
createTerminal(title_2, 'terminal_2');
createTerminal(title_3, 'terminal_3');
createTerminal(title_4, 'terminal_4');
createTerminal(title_5, 'terminal_5');

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

// Funionamento da galeria

const fillGallery = (type) => {
  const { projects } = portifolio;
  const filteredProjects =
    type !== ALL
      ? projects.filter((project) => project.type === type)
      : projects;
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
  //
  filteredProjects.forEach(({ name, src, description, link }, index) => {
    const linkProject = document.createElement('a');
    linkProject.href = link;
    linkProject.classList.add('project');
    linkProject.target = '_blank';

    const imgProject = document.createElement('img');
    imgProject.src = src;
    imgProject.alt = name;
    imgProject.classList.add('item');
    if (index === 0) {
      imgProject.classList.add('current-item');
    }
    const descriptionProject = document.createElement('p');
    descriptionProject.textContent = description;

    linkProject.appendChild(imgProject);
    linkProject.appendChild(descriptionProject);

    gallery.appendChild(linkProject);
  });
  currentItem = 0;
  items = document.querySelectorAll('.item');
  maxItems = items.length;

  // Torna visível o primeiro elemento da galeria.

  const controlBtns = document.querySelectorAll('.control');
  controlBtns[0].click();
  controlBtns[1].click();
};
//

const allProjects = document.getElementById(ALL);
allProjects.addEventListener('click', () => fillGallery(allProjects.value));
const frontendProjects = document.getElementById(FRONTEND);
frontendProjects.addEventListener('click', () =>
  fillGallery(frontendProjects.value)
);
const backendProjects = document.getElementById(BACKEND);
backendProjects.addEventListener('click', () =>
  fillGallery(backendProjects.value)
);

const controls = document.querySelectorAll('.control');
let currentItem = 0;
let items = document.querySelectorAll('.item');
let maxItems = items.length;
fillGallery(ALL);

controls.forEach((control) => {
  control.addEventListener('click', (e) => {
    const isLeft = e.target.classList.contains('arrow-left');

    if (isLeft) {
      console.log('esquerdo');
      currentItem -= 1;
    } else {
      console.log('direito');
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove('current-item'));

    items[currentItem].scrollIntoView({
      block: 'center',
      inline: 'center',
      behavior: 'instant',
    });

    items[currentItem].classList.add('current-item');
  });
});

// Contact

const { contacts } = portifolio;

const contactContainer = document.querySelector('.contact-container');

contacts.forEach(({ name, src, link }) => {
  const contactLink = document.createElement('a');
  contactLink.href = link;
  contactLink.classList.add('contact-icon');
  contactLink.target = '_blank';

  const contactImg = document.createElement('img');
  contactImg.classList.add('img-icon');
  contactImg.src = src;
  contactImg.alt = name;

  const contactName = document.createElement('p');
  contactName.textContent = name;

  contactLink.appendChild(contactImg);
  contactLink.appendChild(contactName);

  contactContainer.appendChild(contactLink);
});
