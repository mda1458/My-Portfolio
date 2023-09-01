import { useState } from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

import emailjs from '@emailjs/browser'

const Footer = () => {
  const [Error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    if (!username || !email || !message) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }
    
    const param = {
      from_name: username,
      email_id: email,
      message: message,
    }

    const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const user_id = import.meta.env.VITE_EMAILJS_USER_ID

    emailjs.send(service_id, template_id, param, user_id)
      .then(() => {
        setIsFormSubmitted(true);
        setLoading(false);
      }, () => {
        setLoading(false);
      });
  };
  return (
    <>
      <h2 className="head-text">
        Take a <span>coffee</span> & <span>chat</span> with me
      </h2>

      <div className="app__footer-cards">
        <a href="mailto:muhammaddanish1458@gmail.com">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5968/5968534.png"
            alt=""
          />
        </a>
        <a href="https://wa.me/+923135692472" target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
            alt=""
          />
        </a>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
          <div className="error">{Error}</div>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
);
