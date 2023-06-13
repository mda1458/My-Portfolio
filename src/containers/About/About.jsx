import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { images } from "../../constants"
import "./About.scss"

const About = () => {
  const abouts = [
    {
      title: "Web Design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: images.about01
    },
    {
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: images.about02
    },
    {
      title: "App Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: images.about03
    },
    {
      title: "SEO",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: images.about04
    },
  ]
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good design</span><br /> means <span>Good business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity:1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={about.img} alt="" />
            <h2 className="bold-text" style={{marginTop: 20}}>
              {about.title}
            </h2>
            <p className="p-text" style={{marginTop: 10}}>
              {about.description}
            </p>
          </motion.div>
        ))}

      </div>
    </>
  )
}

export default About