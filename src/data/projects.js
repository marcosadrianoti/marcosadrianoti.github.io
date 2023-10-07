const PROJECT_PATH = './src/images/projects/';
const ALL = 'ALL';
const FUNDAMENTALS = 'FUNDAMENTALS';
const FRONTEND = 'FRONTEND';
const BACKEND = 'BACKEND';
const PYTHON = 'PYTHON';

const projects = [
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
  {
    name: 'Docker Todo List',
    src: `${PROJECT_PATH}docker_todo.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-docker-to-do-list',
    description:
      'Aplicativo de tarefas conteinerizado com Docker para funcionar.',
    type: BACKEND,
  },
  {
    name: 'All For One',
    src: `${PROJECT_PATH}all_for_one.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-mysql-all-for-one',
    description:
      'Projeto desenvolvido para praticar os conceitos de SQL usando o banco de dados Northwind.',
    type: BACKEND,
  },
  {
    name: 'One For All',
    src: `${PROJECT_PATH}one_for_all.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-mysql-one-for-all',
    description:
      'Projeto desenvolvido para praticar normalização de planilhas e popular em um banco de dados sobre músicas.',
    type: BACKEND,
  },
  {
    name: 'Talker Manager',
    src: `${PROJECT_PATH}talker.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-talker-manager',
    description:
      'Aplicação de cadastro de Palestrantes.',
    type: BACKEND,
  },
  {
    name: 'Store Manager',
    src: `${PROJECT_PATH}store.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-store-manager',
    description:
      'API de um sistema de gerenciamento de vendas no formato dropshipping.',
    type: BACKEND,
  },
  {
    name: 'API de Blogs',
    src: `${PROJECT_PATH}blogs_api.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-blogs-api',
    description:
      'API usando banco de dados para a produção de conteúdo de blogs.',
    type: BACKEND,
  },
  {
    name: 'Trybesmith',
    src: `${PROJECT_PATH}trybesmith.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-trybesmith',
    description:
      'Aplicativo para loja de itens medievais no formato de uma API, utilizando Typescript e Sequelize.',
    type: BACKEND,
  },
  {
    name: 'Trybers and Dragons',
    src: `${PROJECT_PATH}dragon.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-trybes-and-dragons',
    description:
      'Jogo de interpretação de papéis RPG - Role Playing Game, utilizando SOLID e POO.',
    type: BACKEND,
  },
  {
    name: 'Trybe Futebol Clube',
    src: `${PROJECT_PATH}futebol.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-trybe-futebol-clube',
    description:
      'Back-end dockerizado utilizando modelagem de dados através do Sequelize.',
    type: BACKEND,
  },
  {
    name: 'Algorithms',
    src: `${PROJECT_PATH}algorithms.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-algorithms',
    description:
      'Algoritmos desenvolvidos para resolver problemas e implementar soluções.',
    type: PYTHON,
  },
  {
    name: 'TING',
    src: `${PROJECT_PATH}ting.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-ting',
    description:
      'Aplicativo que simula um algoritmo de indexação de documentos similar ao do Google.',
    type: PYTHON,
  },
  {
    name: 'Restaurant Orders',
    src: `${PROJECT_PATH}restaurant_orders.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-restaurant-orders',
    description:
      'Aplicativo de construção de cardápios.',
    type: PYTHON,
  },
  {
    name: 'POO Pythonico',
    src: `${PROJECT_PATH}poo_pythonico.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-python-poo-pythonico',
    description:
      'Programa que simula uma loja virtual elaborando códigos que façam o uso de POO e tipagem estática em Python.',
    type: PYTHON,
  },
  {
    name: 'ProFiler',
    src: `${PROJECT_PATH}profiler.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-python-profiler',
    description:
      'Aplicação de linha de comando que gera um relatório sobre o caminho do diretório/arquivo informado.',
    type: PYTHON,
  },
  {
    name: 'Inventory Report',
    src: `${PROJECT_PATH}inventory_report.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-python-inventory-report',
    description:
      'Gerador de relatórios.',
    type: PYTHON,
  },
  {
    name: 'Tech News',
    src: `${PROJECT_PATH}tech_news.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-python-tech-news',
    description:
      'Aplicação que faz consultas em notícias sobre tecnologia utilizando a raspagem de dados.',
    type: PYTHON,
  },
  {
    name: 'Traduzo',
    src: `${PROJECT_PATH}traduzo.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-python-traduzo',
    description:
      'Aplicação de tradução de textos entre vários idiomas.',
    type: PYTHON,
  },
  {
    name: 'Spotnews',
    src: `${PROJECT_PATH}spotnews.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-python-spotnews',
    description:
      'Aplicação que armazena notícias que podem ser categorizadas por um usuário cadastrado.',
    type: PYTHON,
  },
  {
    name: 'Super Portfólio',
    src: `${PROJECT_PATH}super_portfolio.jpg`,
    link: 'https://github.com/marcosadrianoti/tb-python-super-portfolio',
    description:
      'API para gerenciamento de dados de perfil e projetos.',
    type: PYTHON,
  },
]

export {
  PROJECT_PATH,
  ALL,
  FUNDAMENTALS,
  FRONTEND,
  BACKEND,
  PYTHON,
  projects,
};
