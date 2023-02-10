const texts = {
  es: {
    welcomeMessage: 'Bienvenido a mi portafolio',
    aboutMe: 'Acerca de mí',
    aboutMeDescription:
      'Soy un desarrollador web con experiencia en HTML, CSS y JavaScript. Me gusta trabajar en proyectos innovadores y siempre estoy buscando aprender cosas nuevas.',
    myProjects: 'Proyectos',
    myProjectsDescription: 'Aquí hay algunos de mis proyectos recientes:',
    project1: 'Proyecto 1',
    project2: 'Proyecto 2',
    project3: 'Proyecto 3',
    contactMe: 'Contacto',
    contactMeDescription:
      'Si quieres contactarme, puedes hacerlo a través de mi correo electrónico o mi cuenta de Twitter.',
    email: 'email@example.com',
    twitter: '@username'
  },
  en: {
    welcomeMessage: 'Welcome to my portfolio',
    aboutMe: 'About me',
    aboutMeDescription:
      'I am a web developer with experience in HTML, CSS and JavaScript. I enjoy working on innovative projects and am always looking to learn new things.',
    myProjects: 'Projects',
    myProjectsDescription: 'Here are some of my recent projects:',
    project1: 'Project 1',
    project2: 'Project 2',
    project3: 'Project 3',
    contactMe: 'Contact',
    contactMeDescription:
      'If you want to contact me, you can do so through my email or my Twitter account.',
    email: 'email@example.com',
    twitter: '@username'
  }
};

const language = 'es';

document.querySelector('#welcome-message').textContent = texts[language].welcomeMessage;
document.querySelector('#about-me').textContent = texts[language].aboutMe;
document.querySelector('#about-me-description').textContent = texts[language].aboutMeDescription;
document.querySelector('#my-projects').textContent = texts[language].myProjects;
document.querySelector('#my-projects-description').textContent = texts[language].myProjectsDescription;
document.querySelector('#project-1').textContent = texts[language].project1;
document.querySelector('#project-2').textContent = texts[language].project2;
document.querySelector('#project-3').textContent = texts[language].project3;
document.querySelector('#contact-me').textContent = texts[language].contactMe;
document.querySelector('#contact-me-description').textContent = texts[language].contactMeDescription;
document.querySelector('#email').textContent = texts[language].email;
document.querySelector('#twitter').textContent = texts[language].twitter;

document.querySelector('#switch-to-es').addEventListener('click', function() {
document.querySelector('#welcome-message').textContent = texts.es.welcomeMessage;
document.querySelector('#about-me').textContent = texts.es.aboutMe;
document.querySelector('#about-me-description').textContent = texts.es.aboutMeDescription;
document.querySelector('#my-projects').textContent = texts.es.myProjects;
document.querySelector('#my-projects-description').textContent = texts.es.myProjectsDescription;
document.querySelector('#project-1').textContent = texts.es.project1;
document.querySelector('#project-2').textContent = texts.es.project2;
document.querySelector('#project-3').textContent = texts.es.project3;
document.querySelector('#contact-me').textContent = texts.es.contactMe;
document.querySelector('#contact-me-description').textContent = texts.es.contactMeDescription;
document.querySelector('#email').textContent = texts.es.email;
document.querySelector('#twitter').textContent = texts.es.twitter;
});

document.querySelector('#switch-to-en').addEventListener('click', function() {
document.querySelector('#welcome-message').textContent = texts.en.welcomeMessage;
document.querySelector('#about-me').textContent = texts.en.aboutMe;
document.querySelector('#about-me-description').textContent = texts.en.aboutMeDescription;
document.querySelector('#my-projects').textContent = texts.en.myProjects;
document.querySelector('#my-projects-description').textContent = texts.en.myProjectsDescription;
document.querySelector('#project-1').textContent = texts.en.project1;
document.querySelector('#project-2').textContent = texts.en.project2;
document.querySelector('#project-3').textContent = texts.en.project3;
document.querySelector('#contact-me').textContent = texts.en.contactMe;
document.querySelector('#contact-me-description').textContent = texts.en.contactMeDescription;
document.querySelector('#email').textContent = texts.en.email;
document.querySelector('#twitter').textContent = texts.en.twitter;
});
