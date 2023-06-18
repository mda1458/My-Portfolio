import { useState } from "react";
import { motion } from "framer-motion";

import cn from "classnames";
import { FaUserSecret } from "react-icons/fa";

import "./Hire.scss";

const Hire = () => {

  const sites = [
    {
      name: "Fiverr",
      url: "https://www.fiverr.com/mdanish1458",
      icon: "https://yt3.googleusercontent.com/Mj4TTOdm0OikXs2vODcDHS4FEg4Cr15Xb8W3UaJTc6YYs87oEMAMGK4BLp6hLtRve09whNDXmA=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~017c5055f5cc6e0559",
      icon: "https://www.citypng.com/public/uploads/preview/upwork-round-logo-icon-png-116625559716y405kvdce.png"
    }
  ];
  
  return (
    <motion.div
      className="fab-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="fab-button" whileHover={{ scale: 1.1 }}>
        <FaUserSecret /> <span>Hire Me</span>
      </motion.div>
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