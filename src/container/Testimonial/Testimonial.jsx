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

    // client.fetch(query).then((data) => {
    //   setTestimonials(data);
    // });

    // client.fetch(brandsQuery).then((data) => {
    //   setBrands(data);
    // });
    setTestimonials([
      {
          "_type": "testimonials",
          "_id": "3e7d1ef9-51ff-4596-8fa9-7617f98de8d3",
          "_updatedAt": "2024-09-21T09:29:28Z",
          "feedback": "On each occasion I have enjoyed working with Danish, it's always precise, these skills range from development to WebMaster... he is competent and reliable; As a Project Manager or Product Manager it is very nice to be able to trust. IT Program Manager, from Paris",
          "_createdAt": "2024-09-20T19:24:57Z",
          "_rev": "Dlj0RwBjZgOnRNY7tzS8bi",
          "name": "Crepin",
          "company": "Umanitylabs",
          "country": "FR",
          "imgurl": {
              "hotspot": {
                  "width": 1,
                  "x": 0.5,
                  "y": 0.5,
                  "height": 1,
                  "_type": "sanity.imageHotspot"
              },
              "_type": "image",
              "asset": {
                  "_ref": "image-404ea22a0d47edfaf90f03e02480aaace679ec63-699x624-jpg",
                  "_type": "reference"
              },
              "crop": {
                  "bottom": 0,
                  "_type": "sanity.imageCrop",
                  "right": 0,
                  "top": 0,
                  "left": 0
              }
          }
      },
      {
          "company": "US Client",
          "_updatedAt": "2024-09-20T18:34:55Z",
          "feedback": "Danish has been my go-to developer for all my projects, always delivering exceptional work with impeccable attention to detail, clean and bug-free code, and a deep understanding of both frontend and backend development. He consistently exceeds my expectations, going above and beyond to ensure everything is perfect, all while maintaining excellent communication and thorough documentation. I couldn’t ask for a more reliable, talented, and dedicated developer. If I could, I’d hire him full-time!",
          "imgurl": {
              "hotspot": {
                  "width": 0.897196261682243,
                  "x": 0.514018691588785,
                  "y": 0.5101779541672001,
                  "height": 0.9796440916655998,
                  "_type": "sanity.imageHotspot"
              },
              "_type": "image",
              "asset": {
                  "_ref": "image-f4967ff1f7aaffb7a1e485ccdb6c0516c5531c93-159x146-png",
                  "_type": "reference"
              },
              "crop": {
                  "bottom": 0,
                  "_type": "sanity.imageCrop",
                  "right": 0.03738317757009346,
                  "top": 0.020355908334400204,
                  "left": 0.06542056074766356
              }
          },
          "_createdAt": "2024-09-20T18:27:55Z",
          "_type": "testimonials",
          "name": "Melvin",
          "_rev": "eTv9hxwy1fwKSEtmAvk0pH",
          "_id": "9df36947-0156-41b3-af95-5c61b3c0a614"
      }
  ])
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
                  <div>{country}</div>
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
