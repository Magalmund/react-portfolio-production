import {
    messenger,
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
    hosting,
    rjnet,
    freelancer,
    carrent,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
      id: "intro",
      title: "Intro",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience"
    },
    {
        id: "works",
        title: "Works",
    },

    {
        id: "contact",
        title: "Contact",
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
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Internship",
        company_name: "Web Hosting Solution OÜ",
        icon: hosting,
        iconBg: "#fff",
        date: "June 2018 - May 2019",
        points: [
            "Making websites and landing pages from concept through deployment.",
            "Making responsive design for a web projects.",
            "Assessing UX and UI designs for technical realisation.",
            "Using control version system.",
            "Collaborated with team for new feature development",
        ],
    },
    {
        title: "Web developer",
        company_name: "RJ Network OÜ",
        icon: rjnet,
        iconBg: "#fff",
        date: "May 2019 - July 2020",
        points: [
            "Building websites that are responsive and usable.",
            "Collaborating closely with the team to support projects during all phases of delivery.",
            "Creating a mockups in Figma.",
            "Bringing mockups to life using HTML, CSS, JavaScript.",
            "Maintaining an organized workflow using a project management tool.",
        ],
    },
    {
        title: "Web developer",
        company_name: "Freelancer",
        icon: freelancer,
        iconBg: "#fff",
        date: "July 2020 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
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
        name: "Hotel booking",
        description:
            "A comprehensive travel booking platform that allows users to book hotels and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
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
        image: tripguide,
        source_code_link: "https://github.com/Magalmund/react-airbnb",
        web_link: "https://react-rent-project.vercel.app/",
    },
    {
        name: "Real-time messenger",
        description:
            "Real-time messenger project designed to connect users seamlessly and facilitate instant communication",
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
        image: messenger,
        source_code_link: "https://github.com/",
        web_link: "https://magalmund.com/"
    },
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        image: carrent,
        source_code_link: "https://github.com/",
        web_link: "https://magalmund.com/"
    },
];

export { technologies, experiences, testimonials, projects };
