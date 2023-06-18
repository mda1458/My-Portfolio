
const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            key={index}
            href={`#${item}`}
            className="app__navigation-dot"
            style={{ background: active === item ? "#313BAC" : "" }}
          />
        )
      )}
    </div>
  );
}

export default NavigationDots