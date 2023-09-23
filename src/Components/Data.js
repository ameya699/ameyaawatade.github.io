import reactlogo from "../images/reactlogo.png";
import expressandnodelogo from "../images/expressandnodelogo.png";
import powerappslogo from "../images/powerappslogo.png";
import powerautomatelogo from "../images/powerautomatelogo.png";
import tibcologo from "../images/tibcologo.png";
import databasemanagement from "../images/databasemanagement.png";
import dotnetmvc from "../images/dotnetmvc.png";
import oic from "../images/oic.png";

const skillsData = [
  {
    skillName: "React.js",
    imgurl: reactlogo,
    content:
      "Worked on projects like E-commerce website & Mentoring System, designed efficient & userfriendly pages using react ,consumed apis & populated it efficiently aligning with given use cases & used other react hooks too.",
  },
  {
    skillName: "Express.js & Node.js",
    imgurl: expressandnodelogo,
    content:
      "Implemented User Authentication using JWT, Created RESTFUL Api's, Middlewares to add custom functionality for requests & responses, Error Handling & logging, Database CRUD Operations, File Uploads & Downloads ...etc",
  },
  {
    skillName: "Power Apps",
    imgurl: powerappslogo,
    content:
      "Designed rich UI using Microsoft Power apps, created various UI Components with various functionalities, developed mobile friendly & cross platform apps, implemented authorization for Sign ups & role-based screens ...etc",
  },
  {
    skillName: "Power Automate",
    imgurl: powerautomatelogo,
    content:
      "Created flows that comprised of automated flows, Triggers, Data extractions & transformations, Aproval Workflows, Scheduled Workflows, database & sharepoint list operations, REST API Consumption ...etc",
  },
  {
    skillName: "Tibco Businessworks",
    imgurl: tibcologo,
    content:
      "Developed REST apis for enterprise, integrated MSSQl & MySQL stored procedures using TIBCO & exposed them as various REST apis, handled xml , json parsing & operations, written Java code for out of scope and custom requirements ... etc",
  },
  {
    skillName: "Database Management",
    imgurl: databasemanagement,
    content:
      "Worked on Microsoft SQL Server, MySQL Server, Mongo DB. Developed stored procedures, Views, tables for storing different data in various formats, Statistical queries ...etc",
  },
  {
    skillName: ".Net MVC",
    imgurl: dotnetmvc,
    content:
      "Designed Website in .net MVC , written backend logic for file conversion for uploaded csv, implemented routes, sent data from controller to views and vice-versa, developed REST API methods ...etc",
  },
  {
    skillName: "Cloud Integration",
    imgurl: oic,
    content:
      "Worked on OIC Integrations for creating app-driven orchestrations that are api end points or run on a scheduled basis, this helps in close integration with oracle fusion (Saas and Paas) applications.",
  },
];

const accomplishmentsData = [
  "Certified as Professional in Oracle Cloud Application Integration",
  "Awarded the Bravo Team Award for my contribution in our Global Hackathon held at Persistent Systems where I utilized generative AI in a truly unique way.",
  "Participated in  Fastest Coder Hackathon Powered by GitHub Copilot.",
  "Maneuvered my way into the top 9 leaders from 100+ teams across the Globe and received the recognition of Most creative use of Generative AI at Global Hackathon held at Persistent Systems.",
];

const educationData = [
  {
    qualificationName: "Bachelor of Technology",
    instituteName: "Walchand Institute of Technology",
    periodOfEducation: "2018-2022",
    description:
      "Completed my B.Tech in Computer Science and Engineering with 9.8 S.G.P.A",
  },
  {
    qualificationName: "Higher Secondary Education",
    instituteName: "Sanjay Ghodawat Institutes",
    periodOfEducation: "2017-2018",
    description: "Completed my HSC in Science with 79.69%",
  },
  {
    qualificationName: "Central Board of Secondary Education",
    instituteName: "Indian Model School",
    periodOfEducation: "2015-2016",
    description: "Completed my CBSE with 9.4 C.G.P.A",
  },
];

export { skillsData, accomplishmentsData, educationData };
