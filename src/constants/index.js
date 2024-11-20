import project1 from "../assets/projects/ANHPRO1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate programmer specializing in web applications and artificial intelligence. I focus on leveraging technology to optimize business performance and management efficiency. With my skills and experience, I aim to deliver practical, innovative solutions and continuously refine my craft to meet evolving business needs.`;

export const ABOUT_TEXT = `I studied Software Engineering, where I gained foundational knowledge in programming, system design, and database management. During my studies, I worked on various projects, including web application development and AI-based sentiment analysis, which honed my skills in full-stack development and problem-solving. My experience as an intern and freelancer allowed me to analyze business requirements, design systems, and implement practical solutions, preparing me to contribute effectively to real-world projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - July 2024",
    role: "Full Stack Developer cum Business Analyst Intern",
    company: "People's Committee of Ward 16, District 4",
    description: `Collect and analyze business requirement specifications.
                  Write documentation and present flow diagrams, database schemas, and programming activity diagrams.
                  Full-stack development of website features.
                  Support website deployment.
`,
    technologies: ["Javascript", "React.js", "Vue.Js", "MSSQL"],
  },
  {
    year: "July 2023 - Now",
    role: "Full Stack Developer Remote",
    company: "Remote freelancer",
    description: `•	Research documentation, review source code, and learn about the technologies used in the project.
	Fix frontend-related bugs.
	Add new database queries as needed for each function.
	Write documentation to update the implementation process for each feature.
`,
    technologies: ["HTML5", "CSS3", "Python", "MSSQL", "NodeJs"],
  },
];

export const PROJECTS = [
  {
    title: "The website Electronic Information Portal of the Youth Union, Ward 16, District 4",
    image: project1,
    description:
      "The Electronic Information Portal of the Youth Union, Ward 16, District 4 is an online platform designed for the youth community in the area. It provides access to various information, activities, and services related to the local community. I designed a search functionality for the portal by gathering user requirements, creating specifications, and developing the database and UI. After implementation, the feature received positive feedback from users.",
    technologies: ["Vue.js", "C# .NET Core", "Microsoft SQL Server"],
    website: "https://doan.p16q4.vn/"
  },
];

export const CONTACT = {
  address: "Binh Thuan Ward, District 7, Ho Chi Minh ",
  phoneNo: "+84 833 685 950 ",
  email: "ledinhduythuc510@gmail.com",
};
// index.js hoặc constants.js
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/duy-thuc-le-dinh-b081b8309/",
  github: "https://github.com/yourprofile",
  instagram: "https://www.instagram.com/therealthuzt.dd/",
  twitter: "https://twitter.com/yourprofile",
};
