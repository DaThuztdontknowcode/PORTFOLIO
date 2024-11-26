import project1 from "../assets/projects/ANHPRO1.png";
import project2 from "../assets/projects/ANHPRO2.png";

import dtbproject1 from "../assets/projects/dtbproject1.jpg"; 
import demopro2 from "../assets/projects/ANHDEMOPRO2.png"

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
    technologies: ["Javascript", "Node.js", "MSSQL"],
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
    technologies: ["HTML5", "CSS3","React.js", "Python", "MSSQL", "Node.js"],
  },
];

export const PROJECTS = [
  {
    title: "Website Information Portal of the Youth Union, Ward 16, District 4",
    dtb: "Database design",
    image: project1,
    dtbimage: dtbproject1,
    dtbdescr:
      "The following is the ERD for the search function, which has been simplified.",
    description:
      "The Electronic Information Portal of the Youth Union, Ward 16, District 4 is an online platform designed for the youth community in the area. It provides access to various information, activities, and services related to the local community. ",
    technologies: ["Vue.js", "C# .NET Core","Node.js", "Microsoft SQL Server"],
    website: "https://doan.p16q4.vn/"
  },
  {
    title: "Sentiment Analysis and Food Review Analysis for Search Enhancement",
    dtb: "App Demo",
    image: project2,
    dtbimage: demopro2,
    dtbdescr:
      "When searching for a keyword, it will display the positive rating of the restaurant based on customer feedback. The data is calculated by extracting information from Yelp, processed in Python, and then returned to the web app, making it easy for restaurant managers to use.",
    description:
"This web application is designed to help restaurants manage customer feedback efficiently.By integrating intelligent keyword search functionality, the system enables restaurants to improve the quality of their products and services through data-driven analysis of customer feedback." ,
    technologies: ["React.js", "Node.js", "MySQL", "Python"],
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
