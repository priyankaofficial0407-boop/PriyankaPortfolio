export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  dateRange: string;
  description: string;
  bulletPoints: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  iconType?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  cgpa: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  badge?: string;
  credentialUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface LanguageItem {
  name: string;
  proficiency: string;
}

export const personalDetails = {
  name: "Priyanka Kumari",
  taglineRole: "> Full-Stack Developer & Security Enthusiast",
  headline: "I build systems people can trust.",
  highlightWord: "trust",
  statusBadge: "Available for Full-time roles & Internships",
  keywordBadges: ["Full-Stack", "AI/LLM Apps", "Security", "Problem Solving"],
  introParagraph:
    "Computer Science undergraduate building full-stack and applied-AI projects (RAG pipelines, LLM-based tools), with hands-on cybersecurity internship experience.",
  location: "Nagarjuna College of Engineering and Technology, Chickballapura, Karnataka",
  email: "priyankaofficial0407@gmail.com",
  phone: "+91 9234380142",
  github: "https://github.com/priyankaofficial0407-boop",
  linkedin: "https://www.linkedin.com/in/priyanka-kumari-03b539356/",
  leetcode: "https://leetcode.com/u/6XXqsQfmlM/",
  resumePdfPath: "/Priyanka_Resume.pdf",
  codeEditor: {
    filename: "developer.ts",
    badgeText: "Security & AI Specialist",
    objectData: {
      name: "Priyanka Kumari",
      role: "Full-Stack & Applied AI Developer",
      location: "Chickballapura, Karnataka",
      status: "Building secure, intelligent web systems",
      stack: {
        languages: ["Java", "Python", "JavaScript", "SQL"],
        frontend: ["HTML5", "CSS3", "JavaScript (ES6)", "React", "TypeScript", "Tailwind CSS"],
        backend: ["Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "FastAPI", "Flask", "Node.js"],
        databases: ["MySQL", "MongoDB", "Supabase", "ChromaDB"],
        ai_llm: ["LangChain", "ChromaDB", "Sentence-Transformers", "Llama-3.1", "Groq API", "Google Gemini API"],
        security_tools: ["OWASP Top 10", "SOC Workflows", "Vulnerability Assessment", "Threat Analysis", "Git", "Postman"]
      }
    }
  }
};

export const education: EducationItem = {
  institution: "Nagarjuna College of Engineering and Technology",
  location: "Bengaluru, Karnataka",
  degree: "B.E. in Computer Science and Engineering",
  period: "Aug 2023 – Expected May 2027",
  cgpa: "8.56/10.0"
};

export const languages: LanguageItem[] = [
  { name: "English", proficiency: "Fluent" },
  { name: "Hindi", proficiency: "Native" },
  { name: "Kannada", proficiency: "Basic" }
];

export const aboutContent = {
  heading: "About Me",
  subheading: "Computer Science undergraduate building full-stack and applied-AI projects (RAG pipelines, LLM-based tools), with hands-on cybersecurity internship experience.",
  paragraphs: [
    "I am a Computer Science undergraduate at Nagarjuna College of Engineering and Technology, Chickballapura, Karnataka, building full-stack and applied-AI projects (RAG pipelines, LLM-based tools), with hands-on cybersecurity internship experience.",
    "During my Cyber Security Internship at ToriiMinds (Feb 2026 – Jun 2026), I performed vulnerability assessments on internal test systems using OWASP Top 10 guidelines, documenting findings and remediation recommendations for the security team, and conducted network security monitoring and threat analysis exercises building hands-on experience with real-world SOC workflows.",
    "I have designed and built full-stack applied AI products including ResumeIQ (Explainable Resume-JD Analyzer), Verified RAG (Grounded Document Q&A System), and TripNova (AI Travel Companion)."
  ],
  stats: [
    { label: "CGPA (B.E. CSE)", value: "8.56/10.0" },
    { label: "Certifications", value: "5 Earned" },
    { label: "Cyber Security Intern", value: "ToriiMinds" },
    { label: "Expected Graduation", value: "May 2027" }
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: "toriiminds",
    role: "Cyber Security Intern",
    company: "ToriiMinds",
    period: "Feb 2026 – Jun 2026",
    location: "Remote / Hybrid",
    description: [
      "Performed vulnerability assessments on internal test systems using OWASP Top 10 guidelines, documenting findings and remediation recommendations for the security team.",
      "Conducted network security monitoring and threat analysis exercises, building hands-on experience with real-world SOC workflows."
    ],
    skills: ["OWASP Top 10", "Vulnerability Assessment", "Network Security Monitoring", "Threat Analysis", "SOC Workflows", "Cybersecurity"]
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    category: "Programming",
    iconName: "Code2",
    skills: ["Java", "Python", "JavaScript", "SQL"]
  },
  {
    category: "Backend",
    iconName: "Server",
    skills: ["Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "FastAPI", "Flask", "Node.js"]
  },
  {
    category: "Databases",
    iconName: "Database",
    skills: ["MySQL", "MongoDB", "Supabase"]
  },
  {
    category: "Tools",
    iconName: "ShieldCheck",
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  },
  {
    category: "Coursework",
    iconName: "Cpu",
    skills: ["Data Structures", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Cloud Computing"]
  }
];

export const projects: Project[] = [
  {
    id: "resumeiq",
    title: "ResumeIQ – Explainable Resume-JD Analyzer",
    dateRange: "Jul 2026 – Aug 2026",
    description: "Full-stack resume analysis tool solo, analyzing resumes across 4 dimensions (Hard Skills, Experience, Soft Skills, ATS Compatibility) via an interactive radar chart, verified end-to-end through live resume upload and analysis testing.",
    bulletPoints: [
      "Designed and shipped a full-stack resume analysis tool solo, analyzing resumes across 4 dimensions (Hard Skills, Experience, Soft Skills, ATS Compatibility) via an interactive radar chart, verified end-to-end through live resume upload and analysis testing.",
      "Created a gap-detection feature that flags missing or weak resume content and auto-generates STAR-format bullet rewrites."
    ],
    techStack: ["React", "TypeScript", "FastAPI", "Google Gemini API", "Tailwind CSS", "Vercel"],
    liveUrl: "https://resume-iq-proj.vercel.app/",
    githubUrl: "https://github.com/priyankaofficial0407-boop"
  },
  {
    id: "verified-rag",
    title: "Verified RAG – Grounded Document Q&A System",
    dateRange: "May 2026 – Jun 2026",
    description: "Retrieval-Augmented Generation pipeline using Llama-3.1 that cross-verifies AI-generated answers against source documents to reduce hallucinated responses.",
    bulletPoints: [
      "Engineered a Retrieval-Augmented Generation pipeline using Llama-3.1 that cross-verifies AI-generated answers against source documents to reduce hallucinated responses.",
      "Built and tested a dual-mode comparison feature benchmarking answers with vs. without verification, confirming measurable gains in answer accuracy."
    ],
    techStack: ["Python", "LangChain", "ChromaDB", "Sentence-Transformers", "Groq API (Llama-3.1)", "Streamlit"],
    liveUrl: "https://verified-rag-hallucination-detector-mi66tsihtc9lt5ytefxvet.streamlit.app/",
    githubUrl: "https://github.com/priyankaofficial0407-boop"
  },
  {
    id: "tripnova",
    title: "TripNova – AI Travel Companion",
    dateRange: "Dec 2025 – Jan 2026",
    description: "AI-based travel platform with 3 core features spanning destination discovery, hotel search, and tour comparison.",
    bulletPoints: [
      "Delivered an AI-based travel platform with 3 core features spanning destination discovery, hotel search, and tour comparison.",
      "Implemented a JavaScript chatbot and a responsive interface for users to search, filter, and book travel options."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript (ES6)", "Node.js"],
    liveUrl: "https://tripnova-ai-companion.vercel.app/",
    githubUrl: "https://github.com/priyankaofficial0407-boop"
  }
];

export const certifications: Certification[] = [
  {
    title: "Data Structures & Algorithms using Java – Apna College",
    issuer: "Apna College",
    date: "Dec 2025",
    badge: "Core CS"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 2026",
    badge: "AWS Cloud"
  },
  {
    title: "Cisco Certified in Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "May 2026",
    badge: "Security"
  },
  {
    title: "AWS Training – Foundations of Prompt Engineering",
    issuer: "Amazon Web Services (AWS)",
    date: "Jul 2026",
    badge: "Generative AI"
  },
  {
    title: "Claude Code in Action – Anthropic",
    issuer: "Anthropic",
    date: "Aug 2026",
    badge: "AI Engineering"
  }
];

export const achievements: Achievement[] = [
  {
    title: "Infosys Springboard 'Pragati – Path to Future' Cohort 9",
    description: "Competitively selected for Infosys Springboard's \"Pragati – Path to Future,\" Cohort 9, a technical upskilling program."
  },
  {
    title: "Inter-College Hackathon Team Lead",
    description: "Led a 4-person team as coordinator to design and build a working prototype at an Inter-College Hackathon within a 24-hour timeframe."
  },
  {
    title: "Microsoft GitHub Copilot Dev Day",
    description: "Engaged with Microsoft's AI developer community at GitHub Copilot Dev Day in Bengaluru, focused on AI-assisted development tools."
  }
];


