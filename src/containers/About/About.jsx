import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { AppWrap } from "../../wrapper"

import "./About.scss"

import { client, urlFor } from "../../client"

const About = () => {
  const [abouts, setAbouts] = useState([])

  const getimgUrl = (imgUrl) => {
    return urlFor(imgUrl).url()
  }

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((abouts) => setAbouts(abouts))
  }, [])


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
            <img src={getimgUrl(about.imgUrl)} alt="" />
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

export default AppWrap(About, 'about');