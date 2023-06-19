
const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "skills", "work", "testimonial", "contact"].map(
        (item, index) => (
          <a
            key={index}
            href={`#${item}`}
            className="app__navigation-dot"
            style={{
              background: active === item ? "var(--secondary-color)" : "",
            }}
          />
        )
      )}
    </div>
  );
}

export default NavigationDots