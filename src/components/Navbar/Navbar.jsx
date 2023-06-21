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
  FcDoughnutChart,
} from "react-icons/fc";

import { client } from "../../client";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [toggle, setToggle] = useState(false);
  const [resume, setResume] = useState("");

  useEffect(() => {
    const query = '*[_type == "resume"]';

    client.fetch(query).then((data) => {
      const ref = data[0].pdf.asset._ref.slice(5, -4);
      const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
      const url = `https://cdn.sanity.io/files/${projectId}/production/${ref}.pdf?dl=${data[0].title}.pdf`;
      setResume(url);
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
      name: "work",
      icon: <FcBriefcase />,
    },
    {
      name: "skills",
      icon: <FcServices />,
    },
    {
      name: "projects",
      icon: <FcDoughnutChart />,
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const about = document.getElementById("about");
      const work = document.getElementById("work");
      const skills = document.getElementById("skills");
      const projects = document.getElementById("projects");
      const testimonial = document.getElementById("testimonial");
      const contact = document.getElementById("contact");

      if (
        currentScrollY >= 0 &&
        currentScrollY < about.offsetTop - 100 &&
        activeLink !== "home"
      ) {
        setActiveLink("home");
      } else if (
        currentScrollY >= about.offsetTop - 100 &&
        currentScrollY < work.offsetTop - 100 &&
        activeLink !== "about"
      ) {
        setActiveLink("about");
      } else if (
        currentScrollY >= work.offsetTop - 100 &&
        currentScrollY < skills.offsetTop - 100 &&
        activeLink !== "work"
      ) {
        setActiveLink("work");
      } else if (
        currentScrollY >= skills.offsetTop - 100 &&
        currentScrollY < projects.offsetTop - 100 &&
        activeLink !== "skills"
      ) {
        setActiveLink("skills");
      } else if (
        currentScrollY >= projects.offsetTop - 100 &&
        currentScrollY < testimonial.offsetTop - 100 &&
        activeLink !== "projects"
      ) {
        setActiveLink("projects");
      } else if (
        currentScrollY >= testimonial.offsetTop - 100 &&
        currentScrollY < contact.offsetTop - 100 &&
        activeLink !== "testimonial"
      ) {
        setActiveLink("testimonial");
      } else if (
        currentScrollY >= contact.offsetTop - 100 &&
        activeLink !== "contact"
      ) {
        setActiveLink("contact");
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);

  }, [activeLink]);

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
                  href={resume}
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
        <a href={resume} target="_blank" rel="noreferrer">
          My Resume
          <AiOutlineDownload />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
