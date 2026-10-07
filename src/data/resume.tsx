import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { BarChart3, Database, FileSpreadsheet, LineChart, Code2 } from "lucide-react";

export const DATA = {
  name: "Saksham Kedare",
  initials: "SK",
  url: "https://github.com/Soul0418",
  location: "Dombivli, Maharashtra, India",
  locationLink: "https://maps.google.com/?q=Dombivli,+Maharashtra,+India",
  description:
    "Data Analyst | SQL | Excel | Power BI | Tableau | Python. Recently completed a Bachelor’s degree in Information Technology, with hands-on experience in data analysis, data cleaning, transformation, visualization, and dashboard development. I enjoy turning raw data into meaningful insights and building practical, data-driven solutions.",
  summary:
    "I’m a Data Analyst with a Bachelor’s degree in Information Technology and hands-on experience working with data using Excel, SQL, Power BI, Tableau, and Python. During my internship as a Data Analyst at Code Alpha, I worked with large datasets, performed data cleaning and transformation, and converted raw data into meaningful dashboards and insights.\n\nI enjoy solving analytical problems, exploring datasets, identifying patterns, and presenting insights through clear and interactive visualizations. My projects include [IPL Auction Analysis](https://iplauctionanalysis.streamlit.app/), Uber Data Analysis, FIFA World Cup Data Analysis, and PathPilot.\n\nI’m currently focused on building my career in Data Analytics and looking for opportunities where I can apply my analytical and technical skills to real-world business problems.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "Data Analysis", icon: BarChart3 },
    { name: "Data Cleaning", icon: FileSpreadsheet },
    { name: "Data Transformation", icon: Code2 },
    { name: "Exploratory Data Analysis", icon: LineChart },
    { name: "Statistical Analysis", icon: LineChart },
    { name: "Data Visualization", icon: BarChart3 },
    { name: "Business Intelligence", icon: BarChart3 },
    { name: "Dashboard Development", icon: BarChart3 },
    { name: "Excel", icon: FileSpreadsheet },
    { name: "SQL / MySQL", icon: Database },
    { name: "Power BI", icon: BarChart3 },
    { name: "Tableau", icon: BarChart3 },
    { name: "Python", icon: Code2 },
    { name: "Pandas", icon: Code2 },
    { name: "NumPy", icon: Code2 },
    { name: "Matplotlib", icon: LineChart },
    { name: "HTML", icon: Code2 },
    { name: "CSS", icon: Code2 },
    { name: "JavaScript", icon: Code2 },
    { name: "React", icon: Code2 },
    { name: "Next.js", icon: Code2 },
    { name: "Git", icon: Code2 },
    { name: "GitHub", icon: Code2 },
    { name: "Critical Thinking", icon: Code2 },
    { name: "Problem Solving", icon: Code2 },
    { name: "Analytical Thinking", icon: LineChart },
    { name: "Teamwork", icon: Code2 },
    { name: "Leadership", icon: Code2 },
    { name: "Adaptability", icon: Code2 },
    { name: "Fast Learning", icon: Code2 },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sak.kedare@gmail.com",
    tel: "+917718010418",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Soul0418",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saksham-kedare-1065882b1/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:sak.kedare@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Code Alpha",
      href: "https://codealpha.tech/",
      badges: [],
      location: "Remote",
      title: "Data Analyst Intern",
      logoUrl: "",
      start: "January 2026",
      end: "February 2026",
      description:
        "Worked with large datasets for data analysis and reporting. Performed data cleaning and transformation to prepare datasets for analysis. Used Excel, SQL, and Power BI to analyze data and create dashboards, converting raw data into meaningful visual insights to support data-driven decision-making.",
    },
    {
      company: "CollegeTips.in",
      badges: [],
      href: "https://collegetips.in/",
      location: "Remote",
      title: "Web Development Intern",
      logoUrl: "",
      start: "May 2025",
      end: "June 2025",
      description:
        "Developed responsive web pages using HTML, CSS, JavaScript, and React. Worked on projects including a Pet-Friendly City homepage, developer portfolio, gallery layouts, and campaign pages, with a focus on responsive design, accessibility, and user-friendly interfaces.",
    },
    {
      company: "Excelerate",
      href: "https://www.excelerate.com/",
      badges: [],
      location: "Remote",
      title: "Intern",
      logoUrl: "",
      start: "May 2025",
      end: "June 2025",
      description:
        "Collaborated as part of Team 29 on project-management and career-related initiatives. Explored AI-powered project management tools including Notion AI, ClickUp, and Asana; worked on task management, resource planning, risk management, and workflow automation concepts; and presented project outcomes in the final-week CEO presentation.",
    },
  ],
  education: [
    {
      school: "Model College, Dombivli",
      href: "https://modelcollege.edu.in/",
      degree: "Bachelor’s Degree in Information Technology",
      logoUrl: "",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "IPL Auction Analysis",
      href: "https://iplauctionanalysis.streamlit.app/",
      dates: "2026",
      active: true,
      description:
        "Analyzes IPL auction data, player performance, auction prices, teams, roles, and player statistics to identify patterns and insights. Contribution included data collection, cleaning, player-name mapping, data integration, analysis, dashboard development, and deployment.",
      technologies: ["Python", "Pandas", "Data Analysis", "Streamlit"],
      links: [
        {
          type: "Website",
          href: "https://iplauctionanalysis.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Soul0418/IPL.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Uber Data Analysis Dashboard",
      href: "https://github.com/Soul0418/Uber-.git",
      dates: "",
      active: true,
      description:
        "Interactive analysis and visualization of Uber trip data using Excel and Power BI.",
      technologies: ["Excel", "Power BI", "Data Analysis", "Data Visualization"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Soul0418/Uber-.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "FIFA World Cup Data Analysis",
      href: "https://github.com/Soul0418",
      dates: "",
      active: true,
      description:
        "Analyzes FIFA World Cup data across the 2022, 2018, and 2014 tournaments, using SQL queries, aggregation, filtering, and business-style insights.",
      technologies: ["SQL", "MySQL", "Data Analysis"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Soul0418",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "PathPilot",
      href: "https://path-pilot-omega.vercel.app/",
      dates: "",
      active: true,
      description:
        "A career-development platform featuring industry insights, ATS resume building, cover-letter generation, interview preparation, progress tracking, and job-application support.",
      technologies: ["Next.js", "Prisma", "Tailwind CSS", "shadcn/ui", "Neon DB", "Clerk"],
      links: [
        {
          type: "Website",
          href: "https://path-pilot-omega.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Data Analyst Intern — Code Alpha",
      dates: "January 2026 – February 2026",
      location: "Remote",
      description:
        "Analyzed large datasets, cleaned and transformed data, and built Excel, SQL, and Power BI reports and dashboards to communicate insights.",
      image: "",
      links: [
        {
          title: "Code Alpha",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://codealpha.tech/",
        },
      ],
    },
    {
      title: "Web Development Intern — CollegeTips.in",
      dates: "May 2025 – June 2025",
      location: "Remote",
      description:
        "Built responsive web pages and campaign layouts with HTML, CSS, JavaScript, and React, focusing on accessible, user-friendly interfaces.",
      image: "",
      links: [
        {
          title: "CollegeTips.in",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://collegetips.in/",
        },
      ],
    },
    {
      title: "Intern — Excelerate, Team 29",
      dates: "May 2025 – June 2025",
      location: "Remote",
      description:
        "Explored AI-powered project-management tools and concepts in task and resource management, risk planning, and workflow automation; presented outcomes in the final-week CEO presentation.",
      image: "",
      links: [
        {
          title: "Excelerate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.excelerate.com/",
        },
      ],
    },
  ],
} as const;
