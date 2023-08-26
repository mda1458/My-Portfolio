import { motion } from "framer-motion";

import { FaUserSecret } from "react-icons/fa";
import { images } from "../../constants";

import "./Hire.scss";

const Hire = () => {

  const sites = [
    {
      name: "Fiverr",
      url: "https://www.fiverr.com/mdanish1458",
      icon: images.fiverr,
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~0151ab7f32f8e74445",
      icon: images.upwork,
    },
  ];
  
  return (
    <motion.div
      className="fab-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="fab-button">
        <FaUserSecret /> <span>Hire Me</span>
      </div>
      <ul className="fab-actions">
        {sites.map((site, index) => (
          <motion.li
            className="fab-actions-item"
            key={index}
            whileHover={{ scale: 1.1 }}
          >
            <a href={site.url} rel="noreferrer" target="_blank">
              <motion.span
                className="fab-icon"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={site.icon} alt={site.name} />
              </motion.span>
              <motion.span
                className="fab-label"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {site.name}
              </motion.span>
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Hire;
