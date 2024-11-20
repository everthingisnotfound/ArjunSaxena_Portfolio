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
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
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
];

const experiences = [
  {
    title: "React.js Developer (Personal Project)",
    company_name: "Self-initiated",
    icon: starbucks, // you can choose an appropriate icon here if you like
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developed a fully responsive web application using React.js, managing state with Redux and integrating APIs.",
      "Implemented dynamic features such as authentication, real-time data updates, and interactive UI components.",
      "Focused on code optimization, ensuring high performance and a seamless user experience.",
      "Collaborated with myself (and online communities) for feedback and improvements, learning to refine coding skills.",
    ],
  },
  {
    title: "React Native Developer (Freelance)",
    company_name: "Freelancer",
    icon: tesla, // you can change this as well
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Jan 2024",
    points: [
      "Built a cross-platform mobile app using React Native for a small business, integrating a payment gateway and user authentication.",
      "Focused on user experience (UX) by designing a simple, intuitive mobile interface.",
      "Gained experience in deploying apps on Google Play and the Apple App Store.",
      "Collaborated with clients to understand requirements and ensure timely delivery, honing communication and problem-solving skills.",
    ],
  },
  {
    title: "Web Developer (Portfolio Projects)",
    company_name: "Self-taught",
    icon: shopify, // icon choice
    iconBg: "#383E56",
    date: "May 2022 - Dec 2023",
    points: [
      "Developed several web applications including an e-commerce platform and a memory tracking app using the MERN stack.",
      "Built dynamic front-end interfaces with React.js, styled with Tailwind CSS, and integrated with a MongoDB backend.",
      "Implemented authentication, real-time notifications, and user-specific data using Express.js and Node.js.",
      "Utilized GitHub for version control and deployment on platforms like Netlify and Heroku.",
    ],
  },
  {
    title: "Full Stack Developer (Learning Phase)",
    company_name: "Self-driven Learning",
    icon: meta, // or another relevant icon
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Currently learning and building full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Focused on mastering algorithms and data structures, building strong problem-solving skills for coding challenges.",
      "Engaging in online communities, contributing to discussions, and completing coding challenges on platforms like LeetCode and HackerRank.",
      "Building a personal portfolio to showcase completed projects and continuously improving coding skills through feedback and practice.",
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
    name: "Memories",
    description:
      "I developed a dynamic memories website using MERN. Users can create memory cards with an image, description, and location tag, displayed to share meaningful moments.",
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
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
