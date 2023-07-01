import { FiLinkedin, FiFacebook, FiInstagram, FiGithub } from "react-icons/fi";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/mda1458"
        style={{ top: "0" }}
      >
        <div>
          <FiGithub />
        </div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/mda1458"
        style={{ top: "1.5rem" }}
      >
        <div>
          <FiLinkedin />
        </div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.fb.com/mda1458/"
        style={{ top: "3rem" }}
      >
        <div>
          <FiFacebook />
        </div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/iamdanish1458/"
        style={{ top: "4.5rem" }}
      >
        <div>
          <FiInstagram />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
