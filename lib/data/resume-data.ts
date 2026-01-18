// Type Definitions
export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  abouts: string[];
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
      "Currently an Analyst @ TalentBloom, working with a major global airline integration.",
      "Research Assistant in UW ADAPT",
      "Prev. gaming YouTuber and marketing intern.",
      "I love matcha, Pokémon, and chinchillas!"
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
        "Cooperative Software Development",
        "Databases & Data Modeling (SQL)",
        "Design Methods (Figma)",
        "Product & Information System Management",
        "Project & Program Management",
        "Content Strategy in Information Architecture",
      ],
      logo: "/logos/uw.png",
    },
      {
      institution: "Spokane Community College",
      location: "Spokane, WA",
      period: "2023-2024",
      degrees: ["Associate's in Arts: Direct Transfer Agreement"],
      achievements: ["Don Olson Scholarship Recipient", "Dean's List"],
      coursework: ["Mainly more Java programming classes"],
      logo: "/logos/scc.jpg",
    },
  ],

  experiences: [
    {
      title: "Analyst",
      company: "TalentBloom",
      location: "Bellevue, WA",
      period: "Oct 2025 – Current",
      description: [
        "Consulting client: Global Airline Integration.",
        "Managing 630+ milestones & RAID logs in Smartsheet, tracking readiness across station leaders for Passenger Services Systems and AOCS Integration, and updating dashboards and decks for leadership.",
        "Attend daily meetings with cross-functional stakeholders to ensure alignment on project deliverables and timelines.",
        "Developing training materials for PSS and PowerPoints to communicate project updates to leadership and stakeholders.",
      ],
      technologies: [],
      logo: "/logos/talentbloom.jpg",
    },
    {
      title: "Research Assistant",
      company: "UW Acculturation, Diversity, and Psychopathology Team",
      location: "Seattle, WA",
      period: "July 2025 – Present",
      description: [
        "Led advisory board recruitment & designed campaigns for participant recruitment. ",
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
    {
      title: "Coach ",
      company: "College Admissions & Scholarship Peer Resource",
      location: "Spokane, WA",
      period: "May 2023 – Sept 2024",
      description: [
        "A passionate project where I supported local high school with college application resources, free essay editing, and a database of local scholarships. Peers have won over $30,000 in scholarships with my advice. I have won nearly $45,000 in outside scholarships alone!",
      ],
      technologies: [],
      logo: "/logos/gradcap.jpg",
    },
  ],

  projects: [
    {
      name: "State of the Girl Report",
      date: "January 2026 - June 2026",
      description:
        "Developing the first ever 'State of the Girl' article for Washington. The objective is to utilize data online to help programming in order to mobilize resources and highlight opportunities and trends. The Girl collective will become an established powerhouse that represents the voices of Washington state girls to steer policy and programming across the state with dedicated funding to ensure girls well-being and thriving is essential.",
      achievements: [
        "Funded by Girl Scouts of America",
      ],
      technologies: [
        "Funded by Girl Scouts of America",
        "Directed by WMarketplace",
      ],
      image:"/projects/Girlscouts.jpg",
      link: "",
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
        "Yeah I was a Roblox YouTube before coming to university.",
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
    ],
  },
};
