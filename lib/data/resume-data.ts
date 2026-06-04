// Type Definitions
export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  abouts: string[];
  whatsNew: string[];
}

export interface Education {
  institution: string;
  location: string;
  degrees: string[];
  period: string;
  achievements: string[];
  coursework: string[];
  logo?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  logo?: string;
}

export interface Project {
  name: string;
  date: string;
  description: string;
  roles?: string;
  achievements: string[];
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface Skills {
  languages: string[];
  concepts: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experiences: Experience[];
  projects: Project[];
  skills: Skills;
}

// Resume Data
export const resumeData: ResumeData = {
  personalInfo: {
    name: "Ashley",
    title: "INFO @ University of Washington",
    phone: "509-929-9732",
    email: "amoua1@uw.edu",
    linkedin: "linkedin.com/in/ashley-moua1",
    github: "github.com/ashley-muah",
    abouts: [
      "I love matcha, Pokémon, and chinchillas!"
    ],
    whatsNew: [
    ],
  },

  education: [
    {
      institution: "University of Washington",
      location: "Seattle, WA",
      period: "2024-2026",
      degrees: ["B.S. Informatics"],
      achievements: ["Washington State Opportunity Scholar: Cohort 13", "Washington NASA Space Grant Recipient @ UW", "Panhellenic Endowment Scholarship Recipient", "Dean's List"],
      coursework: [
        "Client-side Development (HTML/CSS, JavaScript, React.js, Firebase)",
        "Introduction to Java series",
        "Data Science Foundations (R)",
        "Research Methods",
        "Cooperative Software Development (JavaScript, React,js)",
        "Databases & Data Modeling (SQL)",
        "Design Methods (Figma)",
        "Product & Information System Management",
        "Project & Program Management",
        "Content Strategy in Information Architecture",
        "Visual Information Design",
        "Information Science in Pop Culture",
        "Capstone with Girl Scouts of Western Washington",
      ],
      logo: "/logos/uw.png",
    },
      {
      institution: "Spokane Community College",
      location: "Spokane, WA",
      period: "2023-2024",
      degrees: ["Associate's in Arts: Direct Transfer Agreement"],
      achievements: ["Don Olson Scholarship Recipient", "Dean's List"],
      coursework: ["Mainly Java programming classes"],
      logo: "/logos/scc.jpg",
    },
  ],

  experiences: [
    {
      title: "Segment and Field Marketing Internship",
      company: "Adobe",
      location: "San Jose, CA",
      period: "June 2026",
      description: [
        "Incoming Summer 2026",
      ],
      technologies: [],
      logo: "/logos/adobe.jpg",
    },
    {
      title: "Program and Project Manager Support",
      company: "Alaska Airlines | Hawaiian Airlines",
      location: "Bellevue, WA",
      period: "Oct 2025 – May 2026",
      description: [
        "Program: Airline Integration | Project: Passenger Services Systems",
        "Oversaw 92+ program-wide milestones and 35+ RAID items in Smartsheet, tracking readiness across station leaders for Passenger Services Systems and AOCS Integration.",
        "Coordinated daily with cross-functional teams to drive action ownership and resolve risks and issues.",
        "Monitored program health, dependencies, actions, and progress on SmartSheet",
        "Maintained compliance with EPMO standards and closeout requirements through detailed documentation and reporting.",
        "Directed development and refinement of a training slide deck, enabling support for 32 station leaders ahead of cutover.",
      ],
      technologies: [],
      logo: "/logos/Alaska-Emblem.png",
    },
    {
      title: "Research Assistant",
      company: "UW Acculturation, Diversity, and Psychopathology Team",
      location: "Seattle, WA",
      period: "July 2025 – Present",
      description: [
        "Led advisory board recruitment & designed campaigns on Canva for participant recruitment.",
        "Drove in 12K+ impressions on Instagram, 255 candidates overall, and 83 qualified candidates in 1.5 months.",
      ],
      technologies: [],
      logo: "/logos/adapt.jpg",
    },
    {
      title: "Content Intern",
      company: "Hunch Studios",
      location: "New York, NY",
      period: "June 2025 – August 2025",
      description: [
        "I'm a huge fan of the viral card game Incohearent, it's a really good card game that you should purchase. May I suggest more games to play?",
      ],
      technologies: [],
      logo: "/logos/hunch.jpg",
    },
    {
      title: "Coach & Resource Provider",
      company: "College Admissions & Scholarship Peer Resource",
      location: "Spokane, WA",
      period: "May 2023 – Sept 2024",
      description: [
        "A passionate project where I supported local high school with college application resources, free essay editing, and a database of local scholarships. Peers have won over $30,000 in scholarships with my advice. I have won nearly $45,000 in outside scholarships alone!",
      ],
      technologies: [],
      logo: "/logos/gradcap.jpg",
    },
      {
      title: "Content Creator",
      company: "YouTuber",
      location: "Spokane, WA",
      period: "Dec 2021 – April 2023",
      description: [
        "Roblox YouTuber with 5.6 million impressions & over 865k total views. Monetized by Google AdSense, generating over $2,300 in revenue. COVID-19 was an interesting time.",
      ],
      technologies: ["Canvas, Google Adsense, DaVinci Resolve, CapCut"],
      logo: "/logos/youtube.jpg",
    },
  ],
    projects: [
    {
      name: "Roblox Report Workflow",
      date: "January 2026 - March 2026",
      description:
        "Ideated and designed a 6-month pilot project concept that introduces checkpoints in the Roblox reporting workflow to improve report transparency to its users. I conducted risk analysis, critical path shifts, and the escalation process. Focuses on communication and visibility of the reporting process.",
      achievements: [
      ],
      technologies: [
        "Miro",
        "Figma",
      ],
      image:"/logos/Roblox.Logo.jpg",
      link: "https://drive.google.com/drive/folders/1aJnL6C6_1CRRbv5yLKUeTn_vsY0CX456?usp=drive_link",
    },
    {
      name: "State of the Girl Report (IN-PROGRESS)",
      date: "January 2026 - June 2026",
      description:
        "Directed by WMarketplace. Funded by Girl Scouts of America. Our team is developing the first ever 'State of the Girl' data report for Washington by analyzing and disaggregating Girls' Washington state data. The objective is to utilize data online to help programming in order to mobilize resources and highlight opportunities and trends in Girls. Role: data analysis for social wellness, project management, design, data visualization & researcher.",
      achievements: [
        "Funded by Girl Scouts of America",
      ],
      technologies: [
        "Canva",
        "Flourish",
      ],
      image:"/projects/Girlscouts.jpg",
      link: "https://canva.link/wjvzgfpd600unjq",
    },
    {
      name: "FashionForward",
      date: "April 2025",
      description:
        "A product management project where we designed a traceability platform to better serve internal stakeholders and consumers.",
      achievements: [ ],
      technologies: ["Azure DevOps", "Miro", "Figma"],
      image: "/logos/OO715I0.jpg",
      link: "https://dev.azure.com/info380BB/Section%201/_wiki/wikis/Section-1.wiki/45/Executive-Summary",
    },
    {
      name: "TuitionBud AI",
      date: "April 2025",
      description:
        "Project managed & UX designed an AI Chrome Extension that helps students find scholarships and grants based on their input.",
      roles: "Roles: Project management, feature ideating, data cleaning, and UX",
      achievements: [
      ],
      technologies: [
        "R",
        "Figma",
        "Notion",
      ],
      image: "/projects/TuitionBud.png",
      link: "https://www.canva.com/design/DAGtW18hmVg/-tu7VGhTEj1BdiQs963THQ/edit?utm_content=DAGtW18hmVg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      name: "GoodReads ER Diagram & SQL Queries",
      date: "March 2025",
      description:
        "Drafted a business case to serve the online book community website called GoodReads. Implemented a schema, ER diagram, and created 10 SQL queries using Kaggle data to show the insights on GoodReads. Populated tables with synthetic data from GPT. Includes queries such as Ranked & Witness",
      achievements: [      ],
      technologies: ["SQL", "FigJam"],
      image: "/projects/ERDiagram.png",
      link: "https://drive.google.com/file/d/1pfJBis2ekYsyHDWR15gsDqtnhSlILkRo/view?usp=sharing",
    },
    {
      name: "YouTuber",
      date: "Dec 2021 - April 2023",
      description:
        "Yeah I was a Roblox YouTuber before coming to university... I used to be good at rhythm games. 27k watch hours, endless amounts of Discord calls, and lots of fun.",
      achievements: [
        "27k watch hours",
        "865k views",
        "5.6 million impressions",
      ],
      technologies: ["Canva", "Google AdSense", "DaVinci Resolve", "CapCut"],
      image: "/projects/stats.png",
      link: "",
    },
  ],

  skills: {
    languages: [
      "Java",
      "JavaScript",
      "HTML/CSS",
      "SQL",
      "R",
      "Figma",
      "Miro",
      "Qualtrics",
      "RedCap",
      "SmartSheet",
      "Canva",
      "Azure DevOps",
      "Azure Data Studio",
      "Tableau",
      "Google Suite",
      "Microsoft Office"
    ],
    concepts: [
      "Program Management",
      "Project Management + Project Planning",
      "Product Management",
      "User Research",
      "Digital Marketing",
      "Content Marketing + Strategy",
      "Workflow Documentation",
      "Decision Support Through Data",
      "User Interviews & Stakeholder Interviews",
      "Dependency Management",
      "RAID Framework",
      "Agile Backlog Management",
      "Community Management",
    ],
  },
};
