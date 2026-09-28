import "./FeatureStrip.css";

const features = [
  {
    icon: "/images/feather-solid.svg",
    line1: "Gentle care for",
    line2: "all ages",
  },
  {
    icon: "/images/circuit.svg",
    line1: "Modern",
    line2: "technology",
  },
  {
    icon: "/images/person.svg",
    line1: "Personalized",
    line2: "treatment plans",
  },
  {
    icon: "/images/smile-beam.svg",
    line1: "A comfortable",
    line2: "experience",
  },
];

function FeatureStrip() {
  return (
    <section className="feature-strip-section">
      <div className="feature-strip">

        <div className="feature-strip__content">

          {features.map((feature, index) => (
            <div
              key={feature.line1}
              className={`feature-strip__item feature-strip__item--${
                index + 1
              }`}
            >
              <div className="feature-strip__icon">
                <img
                  src={feature.icon}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <div className="feature-strip__text">
                <span>{feature.line1}</span>
                <span>{feature.line2}</span>
              </div>
            </div>
          ))}

        </div>


        <div
          className="feature-strip__divider feature-strip__divider--1"
          aria-hidden="true"
        />

        <div
          className="feature-strip__divider feature-strip__divider--2"
          aria-hidden="true"
        />

        <div
          className="feature-strip__divider feature-strip__divider--3"
          aria-hidden="true"
        />

      </div>
    </section>
  );
}

export default FeatureStrip;