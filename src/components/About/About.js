import "./About.css";

const About = () => {
  return (
    <div className="section-a" id="section-a-company-objectives">
      <div className="container">
        <div className="row flex">
          <div className="cards">
            <div className="sub-title">Vision</div>
            <p className="description" style={{ textAlign: "start" }}>
              To dominate as the ultimate creative media solutions provider,
              specializing in African animation, impactful brand representation,
              and cutting-edge feature films production.
            </p>
          </div>
          <div className="cards">
            <div className="sub-title">Mission</div>
            <p className="description" style={{ textAlign: "start" }}>
              We are dedicated to crafting unparalleled media experiences that
              resonate globally, while incessantly embracing new technological
              frontiers to ensure our offerings stay at the pinnacle of
              innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
