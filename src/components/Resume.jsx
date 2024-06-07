import React from "react";
import resumeFile from "../documents/Joshua_Cyrenian_Resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2017 - 2020",
      title: "Computer Systems Technology",
      place: "British Columbia Institute of Technology",
    },
    {
      yearRange: "2015 - 2015",
      title: "iOS Development",
      place: "Lighthouse Labs",
    },
    {
      yearRange: "2010 - 2012",
      title: "Marketing Management",
      place: "British Columbia Institute of Technology",
    },
    {
      yearRange: "2021",
      title: "Professional Scrum Master I (PSM I)",
      place: "Scrum.org",
    },
    {
      yearRange: "2023",
      title: "Digital Configuration",
      place: "Guidewire Software",
    },
    {
      yearRange: "2023",
      title: "InsuranceSuite Integration",
      place: "Guidewire Software",
    },
    {
      yearRange: "2023",
      title: "PolicyCenter Configuration",
      place: "Guidewire Software",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2023 - Present",
      title: "Software Developer",
      place: "ICBC (Insurance Corporation of British Columbia)",
      desc: (
              <>
                <p>As a Software Developer at ICBC, I leverage my technical expertise to manage and lead complex projects focused on the design, configuration, development, and delivery of software applications. I am responsible for investigating and resolving production issues, and providing estimates for business cases, impact assessments, projects, and action requests in collaboration with Business Systems Analysts and Team Leads. Additionally, I develop automation methods, identify performance and system capacity requirements, and implement tools to enhance the efficiency of application development and operational support. I also review and oversee the work of junior developers.</p>
                  
                <p>ICBC serves over 740 million personal customers and over 12 million commercial customers across the province. In my department, I have worked on projects related to insurance policy software, including rating systems, document generation, secure customer renewal portals, bug fixes in production, validation processes, and training and reviewing junior staff members.</p>
            
                <p>Technologies: Java, Gosu, React, JavaScript, NodeJS, GitLab CI/CD, HTML, CSS, XML, SQL, Oracle SQL Developer, MS SQL Server, Jira</p>
              </>
            )
      ,
    },
    {
      yearRange: "2022 - 2023",
      title: "Software Developer",
      place: "Crossplay Digital",
      desc: (
              <>
                <p>In this contract position, I collaborated with designers by converting Figma designs into reusable,
            modular React components using StoryBook. This allowed me to meet tight deadlines and isolate and 
            test each component.
                </p>
            
                <p>The main goal of this project was to create an engaging UI for crossword puzzle solvers to play 
                  games and interact with other users, as well as an administration/analytics UI for puzzle 
                  constructors. This time-sensitive and intensive project was successfully completed with the 
                  release of the first MVP.
                </p>
            
                <p>Technologies: React, TypeScript, Redux, JavaScript, NodeJS, AWS, GitHub CI/CD, HTML, CSS, MUI</p>
              </>
            )
      ,
    },
    {
      yearRange: "2018 - 2022",
      title: "Software Developer/Implementation Consultant",
      place: "commercebuild",
      desc: (
              <>
                <p>
                  I worked on and completed many eCommerce websites (100+) by creating responsive, reusable 
                  templates. My duties also involved writing custom functionality, using JavaScript and React, 
                  for customers. These websites were performant and were built for enterprise level companies 
                  as Mitsubishi. These companies all saw at least a 15% increase in sales after go-live.
                </p>
                
      
                <p>Technologies: React, Redux, JavaScript, Jira, HTML, CSS, SASS, Bootstrap</p>
              </>
            ),
    },
    {
      yearRange: "2015 - 2017",
      title: "Software Developer",
      place: "Pan Pacific Pet",
      desc: (
              <>  
                <p>
                  Re-architected eCommerce platforms, as well as the iOS catalog app. This included building an 
                  API that retrieved data from the database and served data to both mediums. Due to the new, 
                  polished user interfaces, increased performance, and new customer service features, product 
                  sales raised by roughly $2-3 million within just the first year.
                </p>
                <p>
                  Also built multitude of internal applications that empowered employees by increasing efficiency 
                  and productivity. Some examples include an expense application for employees, a CRM, and a CMS 
                  that allowed employees to manage content served on the web.
                </p>
                <p>Technologies: Swift, Objective-C, C#, VB.NET, JavaScript, jQuery, HTML, CSS, SQL, SQL Server</p>
              </>
            ),
    },
  ];

  const skills = [
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Redux JS",
      percent: 60,
    },
    {
      name: "TypeScript",
      percent: 70,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "Bootstrap",
      percent: 80,
    },
    {
      name: "MUI",
      percent: 70,
    },
    {
      name: "Java",
      percent: 70,
    },
    {
      name: "C#",
      percent: 70,
    },
    {
      name: "VB.NET",
      percent: 70,
    },
    {
      name: "ASP.NET",
      percent: 70,
    },
    {
      name: "Gosu",
      percent: 70,
    },
    {
      name: "Swift",
      percent: 65,
    },
    {
      name: "Kotlin",
      percent: 50,
    },
    {
      name: "Objective-C",
      percent: 70,
    },
    {
      name: "iOS Development",
      percent: 70,
    },
    {
      name: "React Native",
      percent: 55,
    },
    {
      name: "Guidewire",
      percent: 60,
    }
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <div className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </div>
                </div>
              ))}
          </div>
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education / Certifications
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
