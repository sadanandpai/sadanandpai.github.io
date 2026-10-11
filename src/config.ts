export const navbar = ["about", "skills", "experience", "work"];

export const site = {
  title: "Portfolio: Sadanand Pai",
  description:
    "Portfolio of Sadanand Pai - Full Stack + AI Engineer building modern product experiences.",
};

export const sectionContent = {
  profile: {
    intro:
      "Product-minded engineer focused on scalable architecture, applied AI engineering, and developer-friendly systems.",
    viewWorkLabel: "View my work",
  },
  about: {
    heading: "Building meaningful product experiences",
    strengthsHeading: "Core strengths",
  },
  skills: {
    heading: "Skills and technologies",
  },
  experience: {
    heading: "Career journey",
    professionalHeading: "Professional",
    educationHeading: "Education",
  },
  work: {
    heading: "Projects and Work",
    categoriesAriaLabel: "Portfolio categories",
  },
};

export const profile = {
  name: "Sadanand Pai",
  pic: "https://avatars.githubusercontent.com/u/12962887",
  title: "Full Stack + AI Engineer",
  email: "sadypai@gmail.com",
  location: "Bengaluru, India",
  social: {
    linkedin: "https://www.linkedin.com/in/sadanandpai/",
    github: "https://github.com/sadanandpai/",
    twitter: "https://twitter.com/sadanand_pai",
  },
};

export const about = {
  descriptions: [
    `<strong>I am a Senior Full Stack + AI Engineer with 13+ years of experience, currently driving web application development at Atlassian.</strong> I specialize in building scalable, high-performance web applications using Java, Spring, React, Next.js, TypeScript, and Node.js, with a strong focus on clean architecture, usability, and product impact.`,
    `Alongside core web development, I actively apply AI in practical product workflows through prompt engineering, RAG-based implementations, and AI-first UX thinking to create smarter, more intuitive experiences. I collaborate closely with designers, backend engineers, and product teams to ship reliable features end-to-end, and my open-source work has earned 15,000+ GitHub stars.`,
  ],
  majors: {
    "Web Development":
      "I design and deliver resilient, high-performance web platforms that scale from MVP to enterprise traffic. My work blends architecture, DX, accessibility, and observability to ensure teams ship faster, reduce regressions, and create user experiences that are measurably faster, cleaner, and more conversion-focused.",
    "Applied AI Engineering":
      "I build AI-native product capabilities that solve real user problems, not demo features. From prompt workflows and retrieval pipelines to production-ready integrations, I focus on reliability, latency, safety, and UX clarity so AI features drive adoption, improve decision quality, and unlock tangible business outcomes.",
    "Open-Source Leadership":
      "I create and maintain open-source projects used by developers worldwide, with an emphasis on practical learning and interview readiness. Beyond code, I invest in documentation quality, issue triage, and community collaboration to build trustworthy resources that accelerate engineering growth at scale.",
    "Technical Content & Mentorship":
      "I translate complex frontend and AI concepts into clear, actionable learning through articles, talks, and hands-on guides. My content is built for impact: helping developers move from theory to execution, make better architectural decisions, and level up with confidence in real-world product environments.",
  },
};

export const skills: Record<string, string[]> = {
  "Languages & Web Foundations": [
    "Java",
    "JavaScript",
    "TypeScript",
    "SQL",
    "HTML5",
    "CSS3",
    "Python",
  ],
  "Frameworks & Libraries": [
    "Spring",
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "Express",
    "Redux",
    "React Query",
    "GraphQL",
    "Tailwind CSS",
    "SCSS",
  ],
  "Databases & Cloud": [
    "PostgreSQL",
    "DynamoDB",
    "Redis",
    "Vector DBs",
    "AWS Cloud",
    "Amazon SQS",
    "Docker",
  ],
  "Architecture & Engineering": [
    "System Design",
    "Algorithms",
    "Data Structures",
    "Problem Solving",
    "Microservices",
    "REST APIs",
    "MVC",
    "Design Patterns",
    "Micro Frontend",
  ],
  "Testing & Development Practices": [
    "Playwright",
    "Vitest",
    "Mockito",
    "Storybook",
    "Maven",
    "CI/CD",
    "Agile Methodology",
    "Test Driven Development",
    "Spec Driven Development",
  ],
  "AI & Machine Learning": [
    "Machine Learning",
    "LLMs",
    "RAG",
    "LangChain",
    "Agentic AI",
    "Prompt Engineering",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "TensorFlow",
  ],
};

export const experience = {
  professional: [
    {
      name: "Atlassian",
      duration: "Nov 2023 - Present",
      totalExp: "3 years",
      role: "Senior Software Engineer 2",
      description: [
        "Leading end-to-end delivery of quote lifecycle capabilities as a feature lead for Quotes, a Java-based product within Atlassian's commerce platform.",
        "Contributed to bootstrapping a unified Partner Portal as a full-stack engineer, establishing core platform foundations and observability instrumentation.",
        "Led the team's adoption of AI-assisted, spec-driven development and harness engineering to deliver production-grade features with consistent implementation quality.",
      ],
    },
    {
      name: "CoinDCX",
      duration: "Apr 2021 - Oct 2023",
      totalExp: "2 years 6 months",
      role: "SDE 3 - Frontend",
      description: [
        'Led the architecture and frontend foundation of an <a href="https://coindcx.com/futures/">advanced crypto trading terminal</a> using Next.js, shaping the design for high-performance trading workflows.',
        "Architected and developed the payment module from the ground up using Next.js and Angular, supporting deposit and withdrawal workflows.",
        "Established a Lerna-based monorepo for shared component libraries, improving code reuse and consistency across frontend applications.",
      ],
    },
    {
      name: "Trelleborg",
      duration: "Mar 2019 - Mar 2021",
      totalExp: "2 years",
      role: "Senior Software Developer",
      description: [
        "Architected and developed Employee Customer system using React and Redux Toolkit with best practices.",
        "Rebuilt Dealer Locator webapp for responsiveness with pixel perfection using HTML, CSS and jQuery having Google Maps features.",
        "Involved in multi language support and complex enhancements for an Angular web app called Fender Selection Tool.",
      ],
    },
    {
      name: "TEKSystems",
      duration: "Feb 2018 - Feb 2019",
      totalExp: "1 year",
      role: "Automation Consultant",
      description: [
        "Built <strong>authentication & authorization</strong> for a User Management System.",
        "Worked on major <strong>CRUD</strong> workflows using an <strong>OAuth</strong>-based strategy.",
      ],
    },
    {
      name: "Infosys",
      duration: "Feb 2013 - Dec 2017",
      totalExp: "4 years 11 months",
      role: "Senior Systems Engineer",
      description: [
        "Designed and developed a responsive web interface for Data Manager using <strong>AngularJS</strong> and <strong>Bootstrap</strong>.",
        "Built an <strong>end-to-end automation framework</strong> in Java & Jubula for Huawei's network configuration assistant tool.",
      ],
    },
  ],
  education: [
    {
      name: "Bachelor of Engineering",
      duration: "2008 - 2012",
      college: "NMAMIT, Nitte",
    },
  ],
};

type ProjectItem = {
  name: string;
  pic: string;
  link: string;
  description: string;
  tags?: string[];
};

type BlogItem = {
  name: string;
  pic: string;
  link: string;
};

type WorkCategory =
  | { view: "list"; items: ProjectItem[] }
  | { view: "grid"; items: BlogItem[] };

export const work: Record<string, WorkCategory> = {
  projects: {
    view: "list",
    items: [
      {
        name: "Javascript Code Challenges",
        pic: "/images/work/javascript-code-challenges.webp",
        link: "https://github.com/sadanandpai/javascript-code-challenges",
        description:
          "Curated set of modern JavaScript interview challenges spanning core concepts, async, ES6+, and problem-solving — built to take you from beginner to expert.",
        tags: ["JavaScript", "ES6+", "Interview Prep"],
      },
      {
        name: "Frontend Mini Challenges",
        pic: "/images/work/frontend-mini-challenges.webp",
        link: "https://github.com/sadanandpai/frontend-mini-challenges",
        description:
          "Hands-on collection of small frontend interview challenges focused on HTML, CSS, and JavaScript fundamentals — built to sharpen real-world UI engineering skills.",
        tags: ["JavaScript", "CSS", "HTML", "Interview"],
      },
      {
        name: "Resume Builder",
        pic: "/images/work/resume-builder.webp",
        link: "https://github.com/sadanandpai/resume-builder",
        description:
          "Create a clean, single-page, professional resume in minutes through a guided form-driven editor — with customisable templates and themes!",
        tags: ["Next.js", "React", "TypeScript"],
      },
      {
        name: "Algo Visualizers",
        pic: "/images/work/algo-visualizers.webp",
        link: "https://github.com/sadanandpai/algo-visualizers",
        description:
          "Interactive visualizer for sorting and pathfinding algorithms including BFS, DFS, and maze generation using generators and iterators design patterns",
        tags: ["React", "Redux Toolkit", "TypeScript", "Algorithms"],
      },
      {
        name: "ClearFrontend",
        pic: "/images/work/clearfrontend.svg",
        link: "https://github.com/sadanandpai/clearfrontend",
        description:
          "Free, open-source coding practice platform with browser-based JavaScript challenges, instant feedback, and shareable solutions to help developers learn by doing.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
    ],
  },

  resources: {
    view: "list",
    items: [
      {
        name: "Frontend Learning Kit",
        pic: "/images/resources/frontend-learning-kit.webp",
        link: "https://github.com/sadanandpai/frontend-learning-kit",
        description:
          "Opinionated frontend learning guide covering JavaScript, React, Angular, CSS, and system design fundamentals — a one-stop curated path for aspiring web developers.",
      },
      {
        name: "AI Learning Kit",
        pic: "/images/resources/ai-learning-kit.webp",
        link: "https://github.com/sadanandpai/ai-learning-kit",
        description:
          "Curated collection of AI learning materials to help developers explore concepts, find useful references, and build practical knowledge at their own pace.",
      },
      {
        name: "Git Guide",
        pic: "/images/resources/git-guide.webp",
        link: "https://github.com/sadanandpai/git-guide",
        description:
          "Practical guide to everyday Git commands with clear examples for managing changes, working with branches, and collaborating with confidence.",
      },
      {
        name: "DSA Interview Challenges",
        pic: "/images/resources/dsa-interview-challenges.webp",
        link: "https://github.com/sadanandpai/dsa-interview-challenges",
        description:
          "Curated data structures and algorithms challenges with solutions to help developers strengthen problem-solving skills and prepare for engineering interviews.",
      },
    ],
  },

  blogs: {
    view: "grid",
    items: [
      {
        name: "Frontend interview experience at Atlassian",
        pic: "https://cdn.hashnode.com/res/hashnode/image/upload/v1691644860278/45b6cfe9-2056-4aad-867e-aca8f2d8987d.jpeg",
        link: "https://frontendpro.hashnode.dev/frontend-interview-experience-at-atlassian",
      },
      {
        name: "Frontend Study Guide",
        pic: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/SYTO3xs06fU/upload/4c061d69e1527a6ec66b6467ae9b22d6.jpeg",
        link: "https://frontendpro.hashnode.dev/frontend-study-guide",
      },
      {
        name: "DSA for Frontend devs",
        pic: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/nuz3rK5iiKg/upload/d663c33a3a5c25c92d41712cbbd138b7.jpeg",
        link: "https://frontendpro.hashnode.dev/dsa-for-fe-devs",
      },
      {
        name: "Agile methodology for everyone",
        pic: "https://cdn.hashnode.com/res/hashnode/image/unsplash/Oalh2MojUuk/upload/v1657349945475/PcsnpCdDA.jpeg",
        link: "https://frontendpro.hashnode.dev/agile-methodology-for-everyone",
      },
      {
        name: "My journey from QA to Frontend Development",
        pic: "https://cdn.hashnode.com/res/hashnode/image/upload/v1639568607437/pnbl4rmi1.jpeg",
        link: "https://frontendpro.hashnode.dev/qa-to-dev-journey",
      },
      {
        name: "Reactivity in JavaScript",
        pic: "https://cdn.hashnode.com/res/hashnode/image/upload/v1639366560843/BBY9z_QSo.jpeg",
        link: "https://frontendpro.hashnode.dev/reactivity-in-javascript",
      },
      {
        name: "Reactive Programming for beginners",
        pic: "https://cdn.hashnode.com/res/hashnode/image/upload/v1639366412080/A_wnumq61.jpeg",
        link: "reactive-programming-for-beginners",
      },
      {
        name: "Frontend interview experience at CoinDCX",
        pic: "https://cdn.hashnode.com/res/hashnode/image/upload/v1638165211509/omXq_ApQz.png",
        link: "frontend-interview-experience-at-coindcx",
      },
    ],
  },
  talks: {
    view: "grid",
    items: [
      {
        name: "Frontend System Design of W3Schools",
        pic: "https://img.youtube.com/vi/JwxzDXnDBhw/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=JwxzDXnDBhw",
      },
      {
        name: "Frontend Interview Preparation",
        pic: "https://img.youtube.com/vi/fMeU-SBQKlU/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=fMeU-SBQKlU",
      },
      {
        name: "How to clear frontend interviews at Product companies?",
        pic: "https://img.youtube.com/vi/LjpWXIT_XvY/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=LjpWXIT_XvY",
      },
      {
        name: "QA Tester to Software Developer",
        pic: "https://img.youtube.com/vi/romK_9QyTVA/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=romK_9QyTVA",
      },
      {
        name: "State Management using Zustand for React",
        pic: "https://img.youtube.com/vi/pP9gQr0nK2s/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=pP9gQr0nK2s",
      },
      {
        name: "Getting started with react-spring for animations",
        pic: "https://img.youtube.com/vi/7SAgjHshGcQ/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=7SAgjHshGcQ",
      },
      {
        name: "Candidly Speaking with Sadanand Pai",
        pic: "https://img.youtube.com/vi/uPK82gCBVdk/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=uPK82gCBVdk",
      },
    ],
  },
};
