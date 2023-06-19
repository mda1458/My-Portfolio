import { useState } from "react";
import { motion } from "framer-motion";

import "./Navbar.scss"
import { images } from "../../constants"

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

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [toggle, setToggle] = useState(false);

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
        <a href="#" onClick={()=>setActiveLink('')}>
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
            // create ease inout transition
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          >
            <GrFormClose onClick={() => setToggle(false)} />
            <ul>
              {navlinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.name}`} onClick={() => setToggle(false)}>
                    {item.icon}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar