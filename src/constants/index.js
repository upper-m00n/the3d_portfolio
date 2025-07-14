import {
    mobile,
    backend,
    creator,
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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    jobit,
    tripguide,
    threejs,
    c,
    express,
    voidBlogs,
    songScout,
    jobBoard,
    GhostNote
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "DSA Problem solver",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "API Developer",
      icon: creator,
    },
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
      name: "C++",
      icon: c,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Express JS",
      icon: express,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "10th Standard",
      company_name: "Vanasthali Public School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 ",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "12th Standard",
      company_name: "Vanasthali Public School",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Btech (Computer Science)",
      company_name: "ABES IT, Ghaziabad",
      icon: shopify,
      iconBg: "#383E56",
      date: "2022 - 2026",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "JobBoard- Job porta & AI resume builder",
      description:"JobBoard platform using the MERN stack (MongoDB, Express, React, Node.js), supporting role-based access for job seekers and employers.AI-powered resume builder using OpenRouter and Puppeteer to generate styled PDF resumes. Implemented features like job search, application tracking, resume uploads via ImageKit, and real-time email notifications. Also added functionality for users to update or delete applications, and for employers to manage applicant status.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobBoard,
      source_code_link: "https://github.com/upper-m00n/JobBoard",
      app_url:"https://job-board-pied-eight.vercel.app/"
    },
    {
      name: "GhostNote",
      description:"GhostNote is a full-stack anonymous feedback platform built with Next.js, TypeScript, Tailwind CSS, and MongoDB. It features secure user authentication with NextAuth.js, email verification via Resend, and form validation using Zod. Users can toggle whether they’re accepting messages, while anyone (even guests) can send them anonymous feedback. Integrated GenAI helps generate thoughtful question prompts, enhancing the feedback experience. Authenticated users can view and delete messages through a clean, modern UI built with shadcn/ui.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: GhostNote,
      source_code_link: "https://github.com/upper-m00n/GhostNote",
      app_url:"https://ghost-note-theta.vercel.app/"
    },
    {
      name: "Void Blogs",
      description:
        "VoidBlogs is a platform where anyone can create, read, and engage with interesting blog posts. Whether you're an aspiring writer or a casual reader, VoidBlogs provides a space for everyone to share insights, ideas, and stories. From simple journaling to in-depth articles, it’s designed to inspire creativity and connect people!",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: voidBlogs,
      source_code_link: "https://github.com/upper-m00n/VoidBlogs",
      app_url:"https://void-blogs.vercel.app/"
    },
    {
      name: "SongScout",
      description:"SongScout is a lightweight music streaming app developed using JavaScript and powered by RapidAPI. Designed as an alternative to Spotify, it offers essential features for discovering and enjoying music seamlessly. Users can explore a curated selection of tracks and play their favorite songs with ease.",
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
      image: songScout,
      source_code_link: "https://github.com/upper-m00n/songScout",
      app_url:"https://song-scout-ashutosh.netlify.app/"
    },
    
  ];
  
  export { services, technologies, experiences, projects };