import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    FRONTEND: "Frontend",
    BACKEND: "Backend",
    MOBILE: "Mobile",
  };

  const projectsData = [
    {
      title: "ICBC Policy Renewal Portal",
      projectInfo:
        `ICBC allows empowers its customers by allowing them to renew policies on their own through their online portal.`,
      client: "ICBC",
      technologies: "React, JavaScript, Java, Gosu",
      industry: "Insurance",
      date: "2023-2024",
      url: {
        name: "account.icbc.com",
        link: "https://account.icbc.com/",
      },
      thumbImage: "images/projects/icbc.png",
      sliderImages: [],
      categories: [filters.FRONTEND, filters.BACKEND],
    },
    {
      title: "PolicyCenter",
      projectInfo:
        `ICBC uses Guidewire's PolicyCenter software for its brokers to deliver auto insurance to its personal and commercial customer across the province.`,
      client: "ICBC",
      technologies: "Java, Gosu, XML",
      industry: "Insurance",
      date: "2023-2024",
      url: {
        name: "Internal Broker Application",
        link: null,
      },
      thumbImage: "images/projects/policycenter.png",
      sliderImages: [],
      categories: [filters.BACKEND],
    },
    {
      title: "crosswordr",
      projectInfo:
        `The YouTube of crossword puzzles. This project allows crossword solvers and creators to collaborate 
        one platform. Creators can upload their puzzles and view their puzzle statistics. Solvers come to solve 
        puzzles and interact with other players.`,
      client: "Crossplay Digital",
      technologies: "React, Redux, TypeScript, JavaScript, HTML, CSS, iOS, Android, React Native",
      industry: "Games",
      date: "June, 2022",
      url: {
        name: "crosswordr.com",
        link: "https://crosswordr.com/",
      },
      thumbImage: "images/projects/crosswordr.png",
      sliderImages: [
        "images/projects/crosswordr2.png",
      ],
      categories: [filters.FRONTEND, filters.MOBILE],
    },
    {
      title: "Mitsubishi",
      projectInfo: "Mitsubishi's heavy vehicle engine parts eCommerce website and application.",
      client: "Mitsubishi",
      technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery, React",
      industry: "Manufacturing",
      date: "May, 2021",
      url: {
        name: "mtea-us.com",
        link: "https://www.mtea-us.com/",
      },
      sliderImages: [
        "images/projects/mitsu1.png",
        "images/projects/mitsu2.png",
      ],
      thumbImage: "images/projects/mitsu.jpg",
      categories: [filters.FRONTEND],
    },
    {
      title: "Medela",
      projectInfo:
        "Medela is an international brand for maternal products. This is the eCommerce application for Australia.",
      client: "Medela",
      technologies: "HTML, CSS, SASS, Bootstrap, JavaScript, jQuery, React",
      industry: "Manufacturing",
      date: "January, 2022",
      url: {
        name: "medelastore.com.au",
        link: "https://www.medelastore.com.au/",
      },
      thumbImage: "images/projects/medela.png",
      sliderImages: [
        "images/projects/medela2.png",
      ],
      categories: [filters.FRONTEND],
    },
    {
      title: "Vortex",
      projectInfo:
        "Vortex is North America's largest supplier for binoculars, monoculars, and rifle scopes. This is Vortex Canada's eCommerce app.",
      client: "Vortex",
      technologies: "HTML, CSS, SASS, Bootstrap, JavaScript, jQuery, React",
      industry: "Manufacturing",
      date: "February, 2022",
      url: {
        name: "vortexcanada.net",
        link: "https://www.vortexcanada.net/",
      },
      thumbImage: "images/projects/vortex.png",
      sliderImages: [
        "images/projects/vortex2.png",
      ],
      categories: [filters.FRONTEND],
    },
    {
      title: "Ennis Fabrics",
      projectInfo:
        "eCommerce application for Canada's largest fabrics manufacturer.",
      client: "Ennis Fabrics",
      technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery, React",
      industry: "Manufacturing",
      date: "March, 2020",
      url: {
        name: "ennisfabrics.com",
        link: "https://ennisfabrics.com/",
      },
      thumbImage: "images/projects/ennis.png",
      sliderImages: [
        "images/projects/ennis2.png",
      ],
      categories: [filters.FRONTEND],
    },
    {
      title: "Kookaburra",
      projectInfo:
        "Australia's biggest sports equipment manufacturer sells everything from cricket bats to football merchandise. This project is implementation of their eCommerce app.",
      client: "Kookaburra",
      technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery, React",
      industry: "Manufacturing",
      date: "September, 2019",
      url: {
        name: "kookaburrasport.com.au",
        link: "https://www.kookaburrasport.com.au/",
      },
      thumbImage: "images/projects/kookaburra.png",
      sliderImages: [
        "images/projects/kookaburra2.png",
      ],
      categories: [filters.FRONTEND],
    },
    {
      title: "Pan Pacific Pet",
      projectInfo:
        "Canada's nationwide distributor for all pet products; selling only to retailers. This project involved creation of a web application, iOS app, and API for eCommerce.",
      client: "Pan Pacific Pet",
      technologies: "HTML, CSS, JavaScript, jQuery, C#, VB.NET, ASP.NET, SQL, SQL Server",
      industry: "Manufacturing",
      date: "December, 2015",
      url: {
        name: "pacificpet.net",
        link: "https://pacificpet.net/",
      },
      thumbImage: "images/projects/ppp.png",
      sliderImages: [
        "images/projects/ppp2.png",
      ],
      categories: [filters.FRONTEND, filters.BACKEND, filters.MOBILE],
    },
    {
      title: "Pan Pacific Pet/Pacific Veterinary Sales",
      projectInfo:
        "Internal employee expense reporting software for Canada's, nationwide distributor for all pet products and animal pharmaceuticals.",
      client: "Pan Pacific Pet/Pacific Veterinary Sales",
      technologies: "HTML, CSS, JavaScript, jQuery, C#, ASP.NET, iOS, Objective-C, Swift, SQL, SQL Server",
      industry: "Manufacturing/Healthcare",
      date: "May, 2016",
      url: {
        name: "expense.pacificpet.net",
        link: "http://expense.pacificpet.net/",
      },
      thumbImage: "images/projects/pppe.png",
      categories: [filters.FRONTEND, filters.BACKEND],
    },
    {
      title: "Canadian Life Science",
      projectInfo:
        "eCommerce application for Canada's provider for chemical lab equipment.",
      client: "Canadian Life Science",
      technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery",
      industry: "Manufacturing",
      date: "October, 2019",
      url: {
        name: "lifescience.ca",
        link: "https://www.lifescience.ca/",
      },
      thumbImage: "images/projects/lifescience.png",
      categories: [filters.FRONTEND],
    },
    {
      title: "McGree Group",
      projectInfo:
        "One of Canada's biggest distributors and manufacturers for men and women's eyewear.",
      client: "McGree Group",
      technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery",
      industry: "Manufacturing",
      date: "October, 2018",
      url: {
        name: "mcgeegroup.com",
        link: "https://www.mcgeegroup.com/",
      },
      thumbImage: "images/projects/mcgee.png",
      categories: [filters.FRONTEND],
    },
    {
      title: "Chef's Paradise",
      projectInfo:
        "Over 100 years of culinary innovation and tradition, in Canada's Capital",
      client: "Chef's Paradise",
      technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery, React, WordPress, PHP",
      industry: "Wholesale Trade",
      date: "May, 2022",
      url: {
        name: "chefsparadise.ca",
        link: "https://chefsparadise.ca/",
      },
      thumbImage: "images/projects/chef1.png",
      sliderImages: [
        "images/projects/chef2.png",
      ],
      categories: [filters.FRONTEND, filters.BACKEND],
    },
    {
      title: "PFS Graphics",
      projectInfo:
        "Print & Finishing Solutions (PFS) is the largest independent distributor of commercial printing equipment in the western US",
      client: "PFS Graphics",
      technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery, React",
      industry: "Wholesale Trade",
      date: "May, 2022",
      url: {
        name: "pfsgraphics.com",
        link: "https://www.pfsgraphics.com/",
      },
      thumbImage: "images/projects/pfs.png",
      categories: [filters.FRONTEND],
    },
    {
      title: "Rayne Nutrition Feeding Calculator",
      projectInfo:
        "One of Canada's largest whollesaler for veterimary products.",
      client: "Rayne Nutrition",
      technologies: "HTML, CSS, JavaScript, jQuery, Squarespace, ASP.NET, VB.NET",
      industry: "Wholesale Trade",
      date: "March, 2016",
      url: {
        name: "raynecanada.ca",
        link: "http://www.raynecanada.ca/feedingcalculator",
      },
      thumbImage: "images/projects/rayne.png",
      categories: [filters.FRONTEND, filters.BACKEND],
    },
    {
      title: "Worldpoint",
      projectInfo:
        "Curriculum & course materials for American Heart Association (AHA), NAEMT®, AAP, AAOS, and more, to training supplies for CPR & AED training, skill training & simulation, and live rescue.",
      client: "Worldpoint",
      technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery, React",
      industry: "Wholesale Trade",
      date: "March, 2016",
      url: {
        name: "worldpoint.com",
        link: "https://www.worldpoint.com/",
      },
      thumbImage: "images/projects/worldpoint.png",
      categories: [filters.FRONTEND],
    },
    {
      title: "Music in Motion",
      projectInfo:
        "Leader in music education, equipping tens of thousands of schools throughout the U.S. and abroad with an extensive variety of music education resources",
      client: "Music in Motion",
      technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery, React, PHP",
      industry: "Education/Manufacturing",
      date: "January, 2022",
      url: {
        name: "musicmotion.com",
        link: "https://www.musicmotion.com/",
      },
      thumbImage: "images/projects/mim.png",
      categories: [filters.FRONTEND, filters.BACKEND],
    },
    {
      title: "LaSalle College School Supplies",
      projectInfo:
        "LaSalle College is a subsidized private post-secondary educational institution. This project was to create the eCommerce store for students.",
      client: "LaSalle College",
      technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery, React",
      industry: "Education",
      date: "December, 2020",
      url: {
        name: "lasallecollege.com",
        link: "https://www.lasallecollege.com/",
      },
      thumbImage: "images/projects/lasalle.png",
      sliderImages: [
        "images/projects/lasalle2.png",
      ],
      categories: [filters.FRONTEND],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
