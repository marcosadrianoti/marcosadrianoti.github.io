import { ICON_PATH, skills } from './skills.js';
import { projects } from './projects.js';

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
  projects,
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
