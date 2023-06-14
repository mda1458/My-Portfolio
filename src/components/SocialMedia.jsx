import { FiLinkedin, FiFacebook, FiInstagram, FiGithub } from 'react-icons/fi'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a target='_blank' rel='noreferrer' href="https://github.com/mda1458">
          <FiGithub />
        </a>
      </div>
      <div>
        <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/mda1458">
          <FiLinkedin />
        </a>
      </div>
      <div>
        <a target='_blank' rel='noreferrer' href="https://www.fb.com/mda1458/">
          <FiFacebook />
        </a>
      </div>
      <div>
        <a target='_blank' rel='noreferrer' href="https://www.instagram.com/iamdanish1458/">
          <FiInstagram />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia