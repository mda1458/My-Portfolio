import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {
  return (
    <>
      <h2 className="head-text">
        About <span>Me</span>
      </h2>
      <div className="app__about-text">
        <div className="about-text">
          <p>
            {"I'm"} a <span>BSCS</span> student at{" "}
            <span>
              <a href="https://nust.edu.pk/" rel="noreferrer" target="_blank">
                National University of Sciences & Technology, Islamabad
              </a>
            </span>
            , currently on an exciting journey of exploration and growth. 🌱💻🔍
          </p>
          <p>
            My passion lies in the realm of <span>coding</span> and{" "}
            <span>development</span>, where I find endless joy in turning
            complex problems into elegant solutions. 💡✨💪
          </p>
          <p>
            My programming muscles are well-toned, particularly in languages
            like <span>Python, C++, and Java</span>. Armed with these skills,{" "}
            {"I'm "}
            always ready to tackle challenges head-on! 💥👊
          </p>
          <p>
            🌐 When it comes to <span>Web Development</span>, {"I'm"}{" "}
            well-versed in utilizing powerful frameworks and libraries like{" "}
            <span>React JS, Next Js, and Express Js</span>. Crafting beautiful
            and interactive web experiences is my specialty! 🖥️💼🎨
          </p>
        </div>
        <div className="about-img">
          <img
            src="https://seeklogo.com/images/N/nust-logo-E161A9240F-seeklogo.com.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
