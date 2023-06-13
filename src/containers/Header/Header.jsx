import { motion } from "framer-motion"

import "./Header.scss"
import { images } from "../../constants"

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
    images.node,
    images.python,
    images.redux,
    images.sass,
  ]

  return (
    <div id="home" className="app__header app__flex">
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

          <div className="tag-cmp app_flex">
            <p className="p-text">Full Stack Developer</p>
            <p className="p-text">CYS Enthusiast</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>

      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
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
        {
          skillsLogo.map((logo, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={logo} alt="logo" />
            </div>
          ))
        }

      </motion.div>
    </div>
  )
}

export default Header