import { FiLinkedin, FiFacebook, FiInstagram, FiGithub } from 'react-icons/fi'
import { SiHackerrank } from 'react-icons/si'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div><FiGithub /></div>
        <div><FiLinkedin /></div>
        <div><FiFacebook /></div>
        <div><FiInstagram /></div>
        <div><SiHackerrank /></div>
    </div>
  )
}

export default SocialMedia