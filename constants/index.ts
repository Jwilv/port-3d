import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    ledix,
    ieSoft,
    calendar,
    journal,
    map,
    chat,
    code,
    game,
    pokemon,
    tickets,
    votes,
    taller,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Acerca de mí",
    },
    {
      id: "experience",
      title: "Experiencia",
    },
    {
      id: "projects",
      title: "Proyectos",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "Ledix",
      icon: ledix,
      iconBg: "#383E56",
      date: "Marzo 2023 - Agosto 2023",
      points: [
        "Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
        "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de producto y otros desarrolladores, para crear productos de alta calidad.",
        "Implementar un diseño responsivo y garantizar la compatibilidad entre navegadores.",
        "Integracion y desarrollo de APIs.",
      ],
    },
    {
      title: "Front-end Developer",
      company_name: "U.I Software",
      icon: ieSoft,
      iconBg: "#E6DEDD",
      date: "Agosto 2023 - Actualidad",
      points: [
        "Integracion de tecnologias web y desarrollo de aplicaciones web.",
        "Planificacion de proyectos y creacion de interfaces de usuario.",
        "Implemtentacion de disenos responsivos.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Taller de Electronica",
      description:
        'Web estaica dedicada a el taller de electronica. Escuela tecnica N5 "2 de abril" Temperley',
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Ts",
          color: "white-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: taller,
      source_code_link: "https://github.com/",
    },
    {
      name: "Map App",
      description:
        "Es una aplicacion web que se basa en un mapa mundial entre usuarios conectados en tiempo real donde pueden colocar puntos de interes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sockets",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: map,
      source_code_link: "https://github.com/Jwilv/map-app",
    },
    {
      name: "Chat",
      description:
        "Chat en tiempo real. Envia y recibe mensajes de forma segura con otros usuarios.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "sockets",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://github.com/Jwilv/chat-app",
    },
    {
      name: "Editor de codigo JS",
      description:
        "Editor de codigo en la nube. Compila y edita tu codigo JavaScript. Un entorno de desarrollo de JavaScript libre.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Ts",
          color: "white-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: code,
      source_code_link: "https://github.com/Jwilv/editApp",
    },
    {
      name: "Calendario",
      description:
        "Calendario de eventos. Crea y administra eventos junto a otros usuarios.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "white-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: calendar,
      source_code_link: "https://github.com/",
    },
    {
      name: "Diario",
      description:
        "Diario personal.Adjunta fotos, Crea, modifica y borra entradas de tu diario. lleva tus historias a donde quieras.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: journal,
      source_code_link: "https://github.com/",
    },
    // {
    //   name: "Game",
    //   description:
    //     "Juego de naves con react",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "javascript",
    //       color: "orange-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: game,
    //   source_code_link: "https://github.com/Jwilv/juego2022",
    // },
    // {
    //   name: "Pokedex",
    //   description:
    //     "Pokedex construida con nextjs utilizando SSG, ISR y ISG",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "SSG",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: pokemon,
    //   source_code_link: "https://github.com/Jwilv/pokestatic",
    // },
    // {
    //   name: "Tickets",
    //   description:
    //     "Una aplicacion de tickets orientada a negocios. Administracion de tickets en tiempo real.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "sockets",
    //       color: "orange-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tickets,
    //   source_code_link: "https://github.com/Jwilv/votes-app",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };