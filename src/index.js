export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id:4,
      name:'Projects',
      href:'#projects',
    },
    {
      id: 5,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: '/images/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: '/images/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: '/images/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: '/images/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'YC Directory- An Application for Startups',
      desc: 'YC Directory is a transformative platform for startups, revolutionizing how entrepreneurs build their brand presence. With advanced features for seamless pitch integration and visibility in Editors Picks, it empowers startups to stand out. Built with Next.js, TypeScript, Sentry, and Sanity, this app offers a reliable and dynamic experience, ensuring startups can scale and attract investors effortlessly. Designed to be a game-changer, it provides all the essential tools for startups to thrive in a competitive landscape.',
      subdesc:
        '',
      href: 'https://github.com/SehajKaurBhatia/YC-Directory',
      texture: '/textures/project/project1.mp4',
      logo: '/images/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/images/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/images/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/images/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/images/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/images/framer.png',
        },
      ],
    },
    {
      title: 'Weather App',
      desc: 'It is a Weather Application using React, which fetches and displays real-time weather information for any city entered by the user. This project showcases proficiency in API integration and state management using React hooks, ensuring seamless data retrieval and dynamic content updates. Additionally, with enhanced UI/UX by incorporating animated backgrounds, creating an engaging and visually appealing user experience.',
      subdesc:
        '',
      href: 'https://weather-app-jof9.vercel.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/images/weather.jpg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/images/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/images/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/images/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/images/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/images/framer.png',
        },
      ],
    },
    {
      title: 'Connect Four Game',
      desc: 'The Connect Four game redefines interactive gameplay by allowing players to seamlessly take turns dropping tokens, with the board dynamically updating in real time. It incorporates advanced win condition checks for horizontal, vertical, and diagonal alignments, ensuring a complete and competitive gaming experience. Built with React, this component is designed to provide smooth and engaging gameplay, making it an essential feature for any gaming platform.',
      subdesc:
        '',
      href: 'https://connect4-weld.vercel.app/',
      texture: '/textures/project/project3.mp4',
      logo: '/images/connect.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/images/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/images/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/images/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/images/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/images/framer.png',
        },
      ],
    },
    {
      title: 'Movie Database',
      desc: 'The movie database application, developed using React, provides users with an intuitive platform to search and explore a vast collection of movies. Integrated with an external API, it dynamically retrieves and displays detailed information based on user input. Featuring a robust search functionality and leveraging React hooks for efficient state management and asynchronous API calls, the application seamlessly presents movie names and posters in an engaging and responsive UI. Built with React and modern web technologies, this application ensures a smooth and interactive user experience.',
      subdesc:
        '',
      href: 'https://movie-database-react-based.vercel.app/',
      texture: '/textures/project/project4.mp4',
      logo: '/images/movie.avif',
      logoStyle: {
       
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/images/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/images/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/images/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/images/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/images/framer.png',
        },
      ],
    },
    
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '/images/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '/images/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/images/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: '/images/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/images/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/images/framer.png',
    //     },
    //   ],
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Valsco Technology',
      pos: 'Web Developer',
      duration: '4 months',
      title: "As a Frontend Developer Intern, I contributed to the development of two responsive websites using React.js, creating animations, 3D models, and optimizing user experiences with JavaScript. I ensured cross-browser compatibility and integrated RESTful APIs while collaborating with designers and backend developers. I also focused on accessibility, SEO optimization, and followed best practices in code structure and version control with Git.",
      icon: "/images/valsco.png",
      animation: 'clapping',
    },
    {
      id: 2,
      name: 'Kalkini- AI Surveillance System',
      pos: 'Frontend Web Developer',
      duration: '4 months',
      title: "During my internship at Kalkini AI, I played a key role in developing AI-powered surveillance solutions. I focused on building intuitive interfaces and integrating advanced machine learning models for real-time data processing. Collaborating with cross-functional teams, I ensured seamless integration with backend systems, optimized performance, and prioritized data security and scalability.",
      icon: '/images/Kalkini.png',
      animation: 'clapping',
    },
    
  ];