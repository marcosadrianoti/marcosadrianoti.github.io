import { ICON_PATH, skills} from './skills.js';

export const ALL = 'ALL';
export const FRONTEND = 'FRONTEND';
export const BACKEND = 'BACKEND';
export const FUNDAMENTALS = 'FUNDAMENTALS';
export const PYTHON = 'PYTHON';
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
    p_1: 'Como alguém com uma bagagem de vida, estou em uma emocionante transição para o mundo do desenvolvimento web. Com 57 anos de idade, estou determinado a aplicar na programação os conhecimentos adquiridos ao longo da vida, a fim de criar soluções eficazes e atraentes.',
    p_2: 'Tenho estudado e ganhado experiência em linguagens fundamentais como HTML, CSS e JavaScript, bem como no uso de frameworks como o React. Minha jornada recente envolve um mergulho no universo do Python e na exploração de frameworks como Flask e Django. Estou animado com a perspectiva de aprender e dominar essas tecnologias, enxergo nelas um vasto potencial criativo.',
    p_3: 'Valorizo a colaboração e a troca de ideias, estou sempre pronto para aprender com meus colegas e contribuir com minha perspectiva para o sucesso coletivo. Acredito que a união de habilidades técnicas e emocionais me permite enfrentar desafios de forma inovadora e criativa.',
    p_4: 'Estou ansioso para cada novo dia, pois representa uma oportunidade de aprender mais, aplicar meus conhecimentos e aprimorar minhas habilidades. Estou pronto para enfrentar novos desafios e contribuir para o desenvolvimento de soluções dentro e fora da web.',
    // p_1: 'Como desenvolvedor web júnior, meu objetivo é aplicar os conhecimentos adquiridos em programação e design para criar soluções eficientes e atraentes na web. Tenho experiência em linguagens como HTML, CSS e JavaScript, além de frameworks como o React. Estou ansioso para aprender novas tecnologias e aprimorar minhas habilidades. Além disso, valorizo a colaboração em equipe. Estou sempre disposto a aprender com meus colegas e a contribuir com minhas próprias ideias.',
    // p_2: 'Durante meus estudos em programação, tive a oportunidade de desenvolver projetos práticos. Essas experiências me ensinaram a importância de um bom planejamento, colaboração com a equipe e atenção aos detalhes para garantir que as soluções finais sejam bem-sucedidas.',
    // p_3: 'Sou um profissional proativo, que busca soluções criativas para resolver problemas e que trabalha com dedicação e comprometimento.',
  },
  skills,
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
