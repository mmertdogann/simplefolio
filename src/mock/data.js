import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mert Doğan | Developer',
  lang: 'en',
  description: '',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mert Doğan',
  subtitle: 'I am the Software Engineer you need to improve your business, lets grow together.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Software Engineer that specializing in both frontend and -heavily- backend development. Experienced with nearly all stages of the development cycle for dynamic web projects. Experienced in numerous programming languages and frameworks including Java, Spring Boot, JavaScript, React, Node, Express, Scala, Python, MySQL, PostgreSQL, MongoDB, Redis, Kafka. Have a good background in Computer Science.',
  paragraphTwo:
    'I like learning new things that are about tech and science. I love researching something new, thus I am always in self-development. I am interested in Software Engineering. I constantly educate myself on being a better Software Engineer and problem solver.',
  paragraphThree: 'Would you like to look at my resume',
  resume: 'https://drive.google.com/file/d/1VfxC-JEbOM-Bed0CIEqYnLquJTkINywC/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ai-news.png',
    title: 'AI News',
    info:
      'In this project, I have built and deployed Conversational Voice Controlled React News Application using Alan AI. Alan AI is a speech recognition software that allows you to add voice capabilities to web applications. It allows user to control everything in the app using voice.',
    info2: '',
    url: 'https://alanai-news.netlify.app/',
    repo: 'https://github.com/mmertdogann/ai-news',
  },
  {
    id: nanoid(),
    img: 'chat4fun.png',
    title: 'Chat4Fun',
    info:
      'In this project, I have built and deployed a real time chat application for practising skills that are React.js, Node.js, Express.js, and Socket.io.',
    info2: '',
    url: 'https://react-chat4fun.netlify.app/',
    repo: 'https://github.com/mmertdogann/chat4fun',
  },
  {
    id: nanoid(),
    img: 'corona.png',
    title: 'CoronApp',
    info:
      'In this project, I have built and deployed a corona tracker application for practising skills that are React.js, Chart.js, Material UI, and much more.',
    info2: '',
    url: 'https://covidaily19.netlify.app/',
    repo: 'https://github.com/mmertdogann/coronapp',
  },
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Facefication',
    info:
      'A face recognition app that I made for practicing when learning fullstack development. During the development of the project, I have learned frontend and backend development, working with APIs, databases, sql and the basics of web development The tech stack: React, Node.js, Express, PostgreSQL, Face Recognition API (Clarifai).',
    info2: '',
    url: 'https://facefication.herokuapp.com/',
    repo: 'https://github.com/mmertdogann/smart-brain',
  },
  {
    id: nanoid(),
    img: 'github-finder.png',
    title: 'GithubFinder',
    info:
      'React app to search Github profiles. This app uses the Context API along with the useContext and useReducer hooks for state management.',
    info2: '',
    url: 'https://github-finder-mmertdogann.netlify.app/',
    repo: 'https://github.com/mmertdogann/github-finder',
  },
  {
    id: nanoid(),
    img: 'banner.png',
    title: 'Hunt-AI',
    info:
      'In this project, I have built and deployed a corona tracker application for practising skills that are React.js, Chart.js, Material UI, and much more.',
    info2: '',
    url: 'https://github.com/mmertdogann/Hunt-AI',
    repo: 'https://github.com/mmertdogann/Hunt-AI',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'mm3rtdogann@gmail.com',
  btn: '',
  email: 'Call to Action',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/mmert_dogann',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mmertdogann/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mmertdogann',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
