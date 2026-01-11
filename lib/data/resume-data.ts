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
      "Currently an Analyst @ TalentBloom: Passenger Service System management for a global airline integration.",
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
  ],

  experiences: [
    {
      title: "Analyst",
      company: "TalentBloom",
      location: "Bellevue, WA",
      period: "Oct 2025 – Current",
      description: [
        "Managing 630+ milestones & RAID logs in Smartsheet, tracking readiness across station leaders for Passenger Services Systems and AOCS Integration, and updating dashboards and decks for leadership.",
      ],
      technologies: [],
      logo: "/logos/metalogo.png",
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
      logo: "/logos/raivn.png",
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
      logo: "/logos/amazon.png",
    },
    {
      title: "Research Assistant",
      company: "Makeability Lab",
      location: "Seattle, WA",
      period: "Jun 2024 – March 2025",
      description: [
        "🎨 ArtInsight - GenAI to supplement BLV interactions with visual artwork",
      ],
      technologies: ["SwiftUI", "GPT-4o", "iOS"],
      logo: "/logos/makeability.png",
    },
    {
      title: "Software Subsystem Lead",
      company: "Husky Satellite Lab",
      location: "Seattle, WA",
      period: "Apr 2024 – August 2025",
      description: [
        "🛰️ Star Tracker for HuskySat-2",
      ],
      technologies: ["C++", "Embedded Systems"],
      logo: "/logos/huskysat.png",
    },
    {
      title: "Dessert Artist",
      company: "Hui Lau Shan",
      location: "Bellevue, WA",
      period: "Jan 2023 – Aug 2023",
      description: [
        "🥭🥥 Mangos and Coconuts.",
      ],
      technologies: [],
      logo: "/logos/hls.png",
    },
  ],

  projects: [
    {
      name: "Discreetly",
      date: "October 2026",
      description:
        "Versatile iOS mobile application that connects users to emergency contacts with ubiquitous phone sensor data and an AI Voice Agent when it isn't convenient to take your phone out. Provides a wide array of discreet triggers like the action button or sudden motion.",
      achievements: [
        "Project for Dubhacks 2025",
        "Used Twilio for calling and Ultravox for AI Agent",
      ],
      technologies: ["SwiftUI", "Twilio", "Ultravox", "Gemini API"],
      image: "/projects/discreetly.png",
      link: "https://devpost.com/software/discreetly-q9ij40",
    },
    {
      name: "Sussi",
      date: "June 2025",
      description:
        "Intelligent student laptop monitoring system with quick classroom insights and automation. Won 1st place at Meta Llama 4 Seattle Hackathon against 200+ competitors and gained pre-seed investor attention.",
      achievements: [
        "Placed 1st at Meta Llama 4 Seattle Hackathon, competing against 200+ top college and full-time competitors",
        "Built a Next.js teacher client and a SwiftUI MacOS student client that interface through MongoDB Atlas",
        "Gained pre-seed investor attention for startup potential and interviewed with Afore VC",
      ],
      technologies: ["Next.js", "SwiftUI", "MongoDB", "Llama 4 API"],
      image: "/projects/sussi.png",
      link: "https://www.youtube.com/watch?v=9fk_h4dAfGA",
    },
    {
      name: "Triage",
      date: "October 2024",
      description:
        "AI disaster assessment and detection tool using satellite imagery to improve emergency response. Won 1st place out of 1000+ participants at DubHacks '24, the largest hackathon in the Pacific Northwest.",
      achievements: [
        "Placed 1st out of 1000+ participants at DubHacks '24, the largest hackathon in the Pacific Northwest",
        "Built with Next.js frontend, Python Flask backend, Intel Tiber hosting, and AWS CloudFormationStack",
      ],
      technologies: [
        "Next.js",
        "Flask",
        "HTML/CSS",
        "Perplexity AI",
        "SAM 2",
        "REST API",
      ],
      image: "/projects/triage.png",
      link: "https://devpost.com/software/triage-k7vr5n",
    },
    {
      name: "ClinicChatBot",
      date: "July 2023",
      description:
        "Full-stack RAG chatbot with fine-tuned GPT-3.5-turbo for clinic website visitors. Deployed to a local acupuncture clinic, achieving an 86% reduction in average customer service ticket lifetime.",
      achievements: [
        "Deployed system to a local acupuncture clinic for an 86% reduction in the average customer service ticket lifetime",
      ],
      technologies: ["Flask", "OpenAI API", "ChromaDB"],
      image: "/projects/clinicchatbot.png",
      link: "https://github.com/xckev/clinicchatbot",
    },
    {
      name: "CipherBot",
      date: "November 2022",
      description:
        "An open source Discord bot written in Python that does all things Cryptography. CipherBot helps you encrypt/decrypt secret messages to friends, vote in secure polls, check cryptocurrency prices, and more!",
      achievements: [
        "An open source Discord bot written in Python that utilizes cryptographic algorithms", 
        "Inspired by the Stanford Summer Institutes Cryptography/Cryptocurrency Course",
        "Allows users to encrypt/decrypt messages with Diffie-Hellman Key Exchange and Public Key Encryption",
        "Emulation of mix-networks and homomorphic encryption for secure voting, a crucial part of modern political integrity",
        "Retrieves cryptocurrency prices from coinmarketcap.com",
      ],
      technologies: ["Discord API", "CoinMarketCap API", "Microsoft SEAL Homomorphic Encryption"],
      image: "/projects/cipherbot.png",
      link: "https://github.com/xckev/CipherBot",
    },
    {
      name: "Lavablock",
      date: "September 2020",
      description:
        "A simple but fun 2D game run on Java's native graphics engine. The first video game I ever made, introducing myself to many aspects of game design.",
      achievements: [
        "A simple but fun 2D game run on Java's native graphics engine", 
        "A refinement of the first video game I made, which was coded in Python",
        "Introduced myself to many aspects of game design",
      ],
      technologies: ["Java", "Bensound Music"],
      image: "/projects/lavablock.png",
      link: "https://github.com/xckev/LavaBlockGame",
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
