export const navbar = ["about", "experience", "work"];

export const profile = {
  name: "Sadanand Pai",
  pic: "https://avatars.githubusercontent.com/u/12962887",
  title: "Frontend AI Engineer",
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
    `<strong>I am a Senior Frontend + AI Engineer with 10+ years of experience, currently driving web application development at Atlassian.</strong> I specialize in building scalable, high-performance user experiences using React, Next.js, TypeScript, and Node, with a strong focus on clean architecture, usability, and product impact.`,
    `Alongside frontend engineering, I actively apply AI in practical product workflows through prompt engineering, RAG-based implementations, and AI-first UX thinking to create smarter, more intuitive experiences. I collaborate closely with designers, backend engineers, and product teams to ship reliable features end-to-end, and my open-source work has earned 15,000+ GitHub stars.`,
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

export const experience = {
  professional: [
    {
      name: "Atlassian",
      duration: "Nov 2023 - Present",
      role: "Senior Software Developer",
      description: [
        "Served as Feature Lead for a cross-product approval management system at Atlassian, delivering scalable, high-quality capabilities in React.",
        "Played a key role in bootstrapping a unified Partner portal by establishing core platform foundations and observability instrumentation.",
        "Engineered an AI-driven partner ranking solution that transformed large-scale partner health data into actionable machine learning insights.",
        "Led specification-driven development for new initiatives, guiding the team to deliver maintainable, production-grade features with consistent quality.",
      ],
    },
    {
      name: "CoinDCX",
      duration: "Apr 2021 - Oct 2023",
      role: "Senior Software Developer",
      description: [
        "Led the foundation & design of highly performant <a href='https://coindcx.com/futures/'>Advanced Web Trading Terminal</a> for crypto using <strong>NextJS</strong>.",
        "Architected and built a complete payment module from scratch for deposits and withdrawals in <strong>React</strong> & <strong>Angular</strong>.",
        "Drove the setup & integration of tools such as <strong>Storybook</strong>, <strong>Docker</strong>, <strong>Vitest</strong>, etc. to build stable production ready system with great developer productivity.",
        "Inititated the repo using lerna to build sharable components and libraries for the team to use across the projects.",
      ],
    },
    {
      name: "Trelleborg",
      duration: "Mar 2019 - Mar 2021",
      role: "Senior Software Developer",
      description: [
        "Architected and developed an Employee Customer relationship management system using <strong>ReactJS</strong> and <strong>Redux Toolkit</strong> with insustry standard practices.",
        "Rebuilt the Dealer Locator web app for responsive, pixel-perfect experiences using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>jQuery</strong> with Google Maps features.",
        "Contributed to multilingual support and complex enhancements to state management for an <strong>Angular</strong> application called Fender Selection Tool.",
      ],
    },
    {
      name: "TEKSystems",
      duration: "Mar 2018 - Feb 2019",
      role: "Senior Software Developer",
      description: [
        "Built <strong>authentication & authorization</strong> for a User Management System.",
        "Worked on major <strong>CRUD</strong> workflows using an <strong>OAuth</strong>-based strategy.",
      ],
    },
    {
      name: "Infosys",
      duration: "Feb 2013 - Dec 2017",
      role: "Senior Software Developer",
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
  tags: string[];
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
        pic: "/images/work/1.png",
        link: "https://github.com/sadanandpai/javascript-code-challenges",
        description:
          "Curated set of modern JavaScript interview challenges spanning core concepts, async, ES6+, and problem-solving — built to take you from beginner to expert.",
        tags: ["JavaScript", "ES6+", "Interview Prep"],
      },
      {
        name: "Frontend Learning Kit",
        pic: "/images/work/2.png",
        link: "https://github.com/sadanandpai/frontend-learning-kit",
        description:
          "Opinionated frontend learning guide covering JavaScript, React, Angular, CSS, and system design fundamentals — a one-stop curated path for aspiring web developers.",
        tags: ["React", "Angular", "Vue", "CSS"],
      },
      {
        name: "Frontend Mini Challenges",
        pic: "/images/work/3.png",
        link: "https://github.com/sadanandpai/frontend-mini-challenges",
        description:
          "Hands-on collection of small frontend interview challenges focused on HTML, CSS, and JavaScript fundamentals — built to sharpen real-world UI engineering skills.",
        tags: ["JavaScript", "CSS", "HTML", "Interview"],
      },
      {
        name: "Resume Builder",
        pic: "/images/work/4.png",
        link: "https://github.com/sadanandpai/resume-builder",
        description:
          "Create a clean, single-page, professional resume in minutes through a guided form-driven editor — built with React, Next.js, and TypeScript.",
        tags: ["Next.js", "React", "TypeScript"],
      },
      {
        name: "Sorting Visualizer",
        pic: "/images/work/5.png",
        link: "https://github.com/sadanandpai/algo-visualizers",
        description:
          "Interactive visualizer for sorting and pathfinding algorithms including BFS, DFS, and maze generation — built with React, Redux Toolkit, and TypeScript.",
        tags: ["React", "Redux Toolkit", "TypeScript", "Algorithms"],
      },
      {
        name: "Git Guide",
        pic: "/images/work/6.png",
        link: "https://github.com/sadanandpai/git-guide",
        description:
          "Practical no-fluff guide to everyday Git commands — covering branches, merges, rebases, and pull requests across GitHub, GitLab, and Bitbucket workflows.",
        tags: ["Git", "GitHub", "GitLab"],
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
};
