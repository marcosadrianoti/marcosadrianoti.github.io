export const ALL = 'ALL';
export const FRONTEND = 'FRONTEND';
export const BACKEND = 'BACKEND';
export const FUNDAMENTALS = 'FUNDAMENTALS';
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
      name: 'Lessons Learned',
      src: `${PROJECT_PATH}lessons_learned.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-lessons-learned',
      description:
        'Site contém uma série de informações sobre o que aprendi na Trybe ao longo dos primeiros blocos.',
      type: FUNDAMENTALS,
    },
    {
      name: 'Playground Functions',
      src: `${PROJECT_PATH}playground_functions.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-playground-functions',
      description:
        'Código de funções que resolvem problemas com respostas pré-determinadas.',
      type: FUNDAMENTALS,
    },
    {
      name: 'Pixels Art',
      src: `${PROJECT_PATH}pixels_art.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-pixels-art',
      description:
        'Editor de arte com pixels onde o usuário escolhe uma cor numa paleta de cores e pinta num quadro branco.',
      type: FUNDAMENTALS,
    },
    {
      name: 'Trybewarts',
      src: `${PROJECT_PATH}trybewarts.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-trybewarts',
      description:
        'Página de formulário de feedbacks dos alunos sobre a "Escola de Magia de Trybewarts"',
      type: FUNDAMENTALS,
    },
    {
      name: 'ES6 e Testes Unitários',
      src: `${PROJECT_PATH}js_unit_tests.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-js-unit-tests',
      description:
        'Funções e testes utilizando a abordagem de desenvolvimento orientado a testes (TDD)',
      type: FUNDAMENTALS,
    },
    {
      name: 'Zoo Functions',
      src: `${PROJECT_PATH}zoo_functions.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-zoo-functions',
      description:
        'Funções que buscam informações sobre os animais e os colaboradores de um zoológico.',
      type: FUNDAMENTALS,
    },
    {
      name: 'Shopping Cart',
      src: `${PROJECT_PATH}shopping_cart.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-shopping-cart',
      description:
        'Aplicativo que lista produtos a venda utilizando a API do Mercado Livre.',
      type: FRONTEND,
    },
    {
      name: 'Solar System',
      src: `${PROJECT_PATH}solar_system.jpg`,
      link: 'https://solar-system-mati.surge.sh/',
      description:
        'HTML, CSS, JavaScrpt e React - Mostra todas a missões no sistema solar. Clique nos planetas para ver suas óbitas.',
      type: FRONTEND,
    },
    {
      name: 'Tryunfo',
      src: `${PROJECT_PATH}tryunfo.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-tryunfo',
      description:
        'Jogo no estilo Super Trunfo configurável pelo usuário.',
      type: FRONTEND,
    },
    {
      name: 'TrybeTunes',
      src: `${PROJECT_PATH}trybetunes.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-trybetunes',
      description:
        'Aplicação que reproduz músicas, cria lista de músicas favoritas e edita o perfil do usuário logado.',
      type: FRONTEND,
    },
    {
      name: 'Online Store',
      src: `${PROJECT_PATH}online_store.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-online-store-group',
      description:
        'Aplicação de loja online usando a API do Mercado Livre, mas sem persistência em banco de dados.',
      type: FRONTEND,
    },
    {
      name: 'React Testing Library',
      src: `${PROJECT_PATH}rtl.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-react-testing-library',
      description:
        'Testes para uma aplicação React que já está criada utilizando Jest e a biblioteca RTL.',
      type: FRONTEND,
    },
    {
      name: 'Trybewallet',
      src: `${PROJECT_PATH}trybewallet.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-trybewallet',
      description:
        'Carteira de controle de gastos com conversor de moedas.',
      type: FRONTEND,
    },
    {
      name: 'Trivia',
      src: `${PROJECT_PATH}trivia.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-trivia-react-redux',
      description:
        'Jogo de perguntas e respostas baseado no jogo Trivia utilizando React e Redux.',
      type: FRONTEND,
    },
    {
      name: 'Star Wars Planets Search',
      src: `${PROJECT_PATH}star_wars_planets_search.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-starwars-planets-search',
      description:
        'Aplicação de lista com filtros de planetas do universo de Star Wars.',
      type: FRONTEND,
    },
    {
      name: 'App de Receitas',
      src: `${PROJECT_PATH}recipes.jpg`,
      link: 'https://github.com/marcosadrianoti/tb-recipes-app',
      description:
        'Aplicativo de receitas, utilizando o ecossistema React: Hooks e Context API',
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
