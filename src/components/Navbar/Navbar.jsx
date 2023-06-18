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
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navlinks.map((item, index) => (
          <li key={index} className="app__flex p-text">
            <div />
            <a href={`#${item.name}`}>{item.name}</a>
          </li>
        ))}
      </ul>

      {/* Hire Me */}
      <div className="app__navbar-hire">
        <div className="dropdown">
          <button className="dropbtn">Hire Me</button>
          <div className="dropdown-content">
            <a href="https://www.fiverr.com/mdanish1458" rel="noreferrer" target="_blank">
              <img
                src="https://yt3.googleusercontent.com/Mj4TTOdm0OikXs2vODcDHS4FEg4Cr15Xb8W3UaJTc6YYs87oEMAMGK4BLp6hLtRve09whNDXmA=s900-c-k-c0x00ffffff-no-rj"
                alt=""
              />{" "}
              <span>Fiverr</span>
            </a>
            <a href="https://www.upwork.com/freelancers/~017c5055f5cc6e0559" rel="noreferrer" target="_blank">
              <img
                src="https://www.citypng.com/public/uploads/preview/upwork-round-logo-icon-png-116625559716y405kvdce.png"
                alt=""
              />{" "}
              <span>Upwork</span>
            </a>
          </div>
        </div>
      </div>

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