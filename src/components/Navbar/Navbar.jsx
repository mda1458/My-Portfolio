import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../constants";

import { AiOutlineDownload } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import {
  FcHome,
  FcAbout,
  FcContacts,
  FcServices,
  FcBriefcase,
  FcRatings,
} from "react-icons/fc";

import { client } from "../../client";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [toggle, setToggle] = useState(false);
  const [resume, setResume] = useState("");

  useEffect(() => {
    const query = '*[_type == "resume"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  const navlinks = [
    {
      name: "home",
      icon: <FcHome />,
    },
    {
      name: "about",
      icon: <FcAbout />,
    },
    {
      name: "skills",
      icon: <FcServices />,
    },
    {
      name: "work",
      icon: <FcBriefcase />,
    },
    {
      name: "testimonial",
      icon: <FcRatings />,
    },
    {
      name: "contact",
      icon: <FcContacts />,
    },
  ];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#" onClick={() => setActiveLink("")}>
          <img src={images.logo} alt="logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {navlinks.map((item, index) => (
          <li
            key={index}
            className={`app__flex p-text ${
              activeLink === item.name ? "active" : ""
            }`}
          >
            <div />
            <a href={`#${item.name}`} onClick={() => setActiveLink(item.name)}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <GiHamburgerMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          >
            <GrFormClose onClick={() => setToggle(false)} />
            <ul>
              {navlinks.map((item) => (
                <li key={item}>
                  {item.icon}
                  <a href={`#${item.name}`} onClick={() => setToggle(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="menu-resume"
                  onClick={() => setToggle(false)}
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineDownload />
                  My Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
      <div className="resume">
        <a href="" target="_blank" rel="noreferrer">
          My Resume
          <AiOutlineDownload />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
