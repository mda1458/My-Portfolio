import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [country, setCountry] = useState('');
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  // get country name
  const getCountry = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${testimonials[currentIndex].country}`);
    const data = await response.json();
    setCountry(data[0].name.common);
  }

  useEffect(() => {
    getCountry();
  }
  , [currentIndex]);

  getCountry();

  return (
    <>
      {testimonials.length === 0 ? 
        <div className="app__testimonial-item app__flex">
          <div className="app__testimonial-content">
            <p className="p-text">No testimonials yet</p>
          </div>
        </div>
        :
       (
        <>
          <h2 className="head-text">
            What My <span>Clients</span> Say
          </h2>
          
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div className="app__testimonial-name">
                <div>
                  <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                  <h5 className="p-text">{testimonials[currentIndex].company}</h5>
                </div>
                <motion.div
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0 }}
                  className="app__testimonial-country"
                  key={currentIndex}
                >
                  <div>{country.replace(" ","_")}</div>
                  <img src={`https://flagsapi.com/${testimonials[currentIndex].country}/shiny/64.png`} alt={testimonials[currentIndex].country} />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__whitebg',
);
