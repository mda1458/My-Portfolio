import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Projects.scss';

const Projects = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      data.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));
      console.log(data);
      setProjects(data);
      setFilterProject(data);
    });
  }, []);

  const handleProjectFilter = (item) => {
    setViewAll(false);
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterProject(projects);
      } else {
        setFilterProject(projects.filter((project) => project.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__project-filter">
        {[
          "Programming",
          "Web App",
          "Mobile App",
          "Desktop App",
          "AI",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleProjectFilter(item)}
            className={`app__project-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__project-portfolio"
      >
        {filterProject.map((project, index) => (
          <div
            className={`app__project-item app__flex ${
              index > 2 ? (viewAll ? "" : "hidden") : ""
            }`}
            key={index}
          >
            <div className="app__project-img app__flex">
              <img src={urlFor(project.imgUrl)} alt={project.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__project-hover app__flex"
              >
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__project-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.description}
              </p>

              <div className="app__project-tag app__flex">
                <p className="p-text">{project.tags[0]}</p>
              </div>

              <div className="app__project-techs">
                {project.techs &&
                  project.techs.map((tech, index) => (
                    <motion.div
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0 }}
                      className="app__project-tech"
                      key={index}
                    >
                      <div>{tech.tag}</div>
                      <img src={urlFor(tech.icon)} alt={project.name} />
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <button
        className={filterProject.length > 3? viewAll ? "hidden" : "":"hidden"}
        onClick={() => setViewAll(true)}
      >
        Show All
      </button>
      <button
        className={filterProject.length > 3? viewAll ? "" : "hidden": "hidden"}
        onClick={() => setViewAll(false)}
      >
        Show Less
      </button>
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, 'app__projects'),
  'projects',
  'app__primarybg',
);
