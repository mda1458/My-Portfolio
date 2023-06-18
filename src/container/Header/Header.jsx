import { motion } from "framer-motion"
import { AppWrap } from "../../wrapper"

import "./Header.scss"
import { images } from "../../constants"

import { Typewriter } from 'react-simple-typewriter';

const Header = () => {
  const scaleVariant = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  const skillsLogo = [
    images.react,
    images.next,
    images.node,
    images.mongodb,
    images.express,
  ]

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋🏻</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, {"I'm"}</p>
              <h1 className="head-text">Muhammad Danish</h1>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
          <Typewriter
            words={['MERN Stack Developer', 'React Js Developer', 'Next Js Developer', 'Backend Developer']}
            loop={0}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        
        <img src={images.profile} alt="profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__header-circles"
      >
        {skillsLogo.map((logo, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={logo} alt="logo" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'home');