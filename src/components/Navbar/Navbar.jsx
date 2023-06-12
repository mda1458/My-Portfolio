import { useState } from "react";
import { motion } from "framer-motion";

import "./Navbar.scss"
import { images } from "../../constants"
import { GiHamburger } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navlinks = ["home", "about", "work", "skills", "contact"];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navlinks.map((item, index) => (
          <li key={index} className="app__flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
          <GiHamburger onClick={() => setToggle(true)} />
          {
            toggle && (
              <motion.div
                whileInView={{ x: [300, 0]}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >

                <GrFormClose onClick={() => setToggle(false)} />
                <ul>
                {navlinks.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))}
                </ul>

              </motion.div>
            )
          }
      </div>
    </nav>
  );
}

export default Navbar