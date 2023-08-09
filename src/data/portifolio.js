export const ALL = 'ALL';
export const FRONTEND = 'FRONTEND';
export const BACKEND = 'BACKEND';
const ICON_PATH = './src/images/icons/';
const PROJECT_PATH = './src/images/projects/';

export const portifolio = {
  personal_info: {
    photo: './src/images/marcos-adriano.png',
    alt: 'Foto do Marcos Adriano',
    name_1: 'Marcos',
    name_2: 'Adriano',
  },
  terminal: {
    title_1: '> SOU DESENVOLVEDOR WEB',
    title_2: '> OLÁ',
    title_3: '> HABILIDADES',
    title_4: '> PROJETOS',
    title_5: '> CONTATO',
  },
  article: {
    p_1: 'Como desenvolvedor web júnior, meu objetivo é aplicar os conhecimentos adquiridos em programação e design para criar soluções eficientes e atraentes na web. Tenho experiência em linguagens como HTML, CSS e JavaScript, além de frameworks como o React. Estou ansioso para aprender novas tecnologias e aprimorar minhas habilidades. Além disso, valorizo a colaboração em equipe. Estou sempre disposto a aprender com meus colegas e a contribuir com minhas próprias ideias.',
    p_2: 'Durante meus estudos em programação, tive a oportunidade de desenvolver projetos práticos. Essas experiências me ensinaram a importância de um bom planejamento, colaboração com a equipe e atenção aos detalhes para garantir que as soluções finais sejam bem-sucedidas.',
    p_3: 'Sou um profissional proativo, que busca soluções criativas para resolver problemas e que trabalha com dedicação e comprometimento.',
  },
  skills: [
    {
      name: 'HTML',
      src: `${ICON_PATH}html.svg`,
      link: 'https://html.spec.whatwg.org/multipage/',
    },
    {
      name: 'CSS',
      src: `${ICON_PATH}css.svg`,
      link: 'https://www.w3.org/Style/CSS/',
    },
    {
      name: 'JavaScript',
      src: `${ICON_PATH}javascript.svg`,
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    },
    {
      name: 'NodeJS',
      src: `${ICON_PATH}nodejs.svg`,
      link: 'https://nodejs.org/en/',
    },
    {
      name: 'NPM',
      src: `${ICON_PATH}npm.svg`,
      link: 'https://www.npmjs.com/',
    },
    {
      name: 'Git',
      src: `${ICON_PATH}git.svg`,
      link: 'https://git-scm.com/',
    },
    {
      name: 'GitHub',
      src: `${ICON_PATH}github.svg`,
      link: 'https://github.com/',
    },
    {
      name: 'React',
      src: `${ICON_PATH}react.svg`,
      link: 'https://pt-br.reactjs.org/',
    },
    {
      name: 'Redux',
      src: `${ICON_PATH}redux.svg`,
      link: 'https://react-redux.js.org/',
    },
    {
      name: 'Bootstrap',
      src: `${ICON_PATH}bootstrap.svg`,
      link: 'https://getbootstrap.com/',
    },
    {
      name: 'Jest',
      src: `${ICON_PATH}jest.svg`,
      link: 'https://jestjs.io/pt-BR/',
    },
    {
      name: 'VSCode',
      src: `${ICON_PATH}vscode.svg`,
      link: 'https://code.visualstudio.com/',
    },
    {
      name: 'Slack',
      src: `${ICON_PATH}slack.svg`,
      link: 'https://slack.com/intl/pt-br',
    },
    {
      name: 'Linux',
      src: `${ICON_PATH}linux.svg`,
      link: 'https://ubuntu.com/',
    },
  ],
  projects: [
    {
      name: 'Solar System',
      src: `${PROJECT_PATH}solar-system.jpg`,
      link: 'https://solar-system-mati.surge.sh/',
      description:
        'HTML, CSS, JavaScrpt e React - Mostra todas a missões no sistema solar. Clique nos planetas para ver suas óbitas.',
      type: FRONTEND,
    },
    {
      name: 'lynx',
      src: `${PROJECT_PATH}lynx-960x640.jpg`,
      link: '',
      description:
        'HTML, CSS, JavaScrpt e React - Mostra todas a missões no sistema solar. Clique nos planetas para ver suas óbitas.',
      type: BACKEND,
    },
    {
      name: 'blue-origin',
      src: `${PROJECT_PATH}blue-origin-960x640.jpg`,
      link: '',
      description: 'Testando blue-origin.',
      type: FRONTEND,
    },
    {
      name: 'orion-nasa',
      src: `${PROJECT_PATH}orion-nasa-960x640.jpg`,
      link: '',
      description: 'Testando orion-nasa.',
      type: BACKEND,
    },
    {
      name: 'space-ship',
      src: `${PROJECT_PATH}space-ship-960x640.jpg`,
      link: '',
      description: 'Testando space-ship.',
      type: FRONTEND,
    },
  ],
  contacts: [
    {
      name: 'marcosadriano.ti@gmail.com',
      src: `${ICON_PATH}email.svg`,
      link: 'mailto:marcosadriano.ti@gmail.com',
    },
    {
      name: 'https://www.linkedin.com/in/marcos-adriano-ti/',
      src: `${ICON_PATH}linkedin.svg`,
      link: 'https://www.linkedin.com/in/marcos-adriano-ti/',
    },
    {
      name: 'https://github.com/marcosadrianoti',
      src: `${ICON_PATH}github.svg`,
      link: 'https://github.com/marcosadrianoti',
    },
    {
      name: '+55(62)992535292',
      src: `${ICON_PATH}whatsapp.svg`,
      link: 'https://wa.me/+5562992535292',
    },
  ],
};
