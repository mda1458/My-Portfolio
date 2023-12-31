import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Work <span>Experience</span>
      </h2>

      <div className="app__skills-container">
        {experiences.map((experience, index) => (
          <motion.div
            className="app__exp"
            key={index}
          >
            <div className="app__exp-item">
              <div className="app__exp-item__logo">
                <img src={urlFor(experience.imgUrl)} alt={experience} />
              </div>
              <div className="app__exp-item__date">
                <h3>
                  {new Date(experience.from).toDateString().slice(3)}
                  <div />
                </h3>
                <div />
                <h3>
                  <div />
                  {new Date(experience.to).toDateString().slice(3)}
                </h3>
              </div>
              <div className="app__exp-works">
                <div className="app__exp-work">
                  <h2>{experience.title}</h2>
                  <h3>{experience.company}</h3>
                  <p className="p-text">{experience.description}</p>
                  <div className="achievements">
                    <h4>Achievements</h4>
                    <ul>
                      {experience.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__skills"),
  "work",
  "app__primarybg"
);
