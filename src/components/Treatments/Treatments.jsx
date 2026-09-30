import "./Treatments.css";

const baseUrl = import.meta.env.BASE_URL;

const treatments = [
  {
    title: "Dental Check-ups & Digital X-Rays",
    description:
      "Routine examinations to detect dental problems early, with digital X-rays when needed.",
    icon: `${baseUrl}images/Dental checkup 1.svg`,
  },
  {
    title: "Dental Implants",
    description:
      "Replaces missing teeth with implant-supported artificial teeth that function like natural teeth.",
    icon: `${baseUrl}images/Implants 1.svg`,
  },
  {
    title: "Smile Designing & Veneers",
    description:
      "Customized cosmetic treatments and veneers to improve the appearance of your smile.",
    icon: `${baseUrl}images/Smile design 1.svg`,
  },
  {
    title: "Gum Care",
    description:
      "Treatment for unhealthy gums and the underlying causes of loose teeth.",
    icon: `${baseUrl}images/Gum care 1.svg`,
  },
  {
    title: "Root Canal Treatment",
    description:
      "Removes infection from inside the tooth while helping preserve the natural tooth.",
    icon: `${baseUrl}images/Root Canal 1.svg`,
  },
  {
    title: "Clear Aligners & Braces",
    description:
      "Gradually straightens teeth and helps correct bite-related problems.",
    icon: `${baseUrl}images/Braces 1.svg`,
  },
];

function Treatments() {
  return (
    <section className="treatments">
      <div className="treatments__container">
        <div className="treatments__content">

          <div className="treatments__intro">
            <span className="treatments__eyebrow">
              OUR TREATMENTS
            </span>

            <div className="treatments__title-row">
              <h2 className="treatments__title">
                Comprehensive dental
                <br />
                care for every smile.
              </h2>

              <a
                className="treatments__view-all"
                href={`${baseUrl}treatments/`}
              >
                <span>View all treatments</span>

                <img
                  className="treatments__view-all-icon"
                  src={`${baseUrl}images/arrow-right.svg`}
                  alt=""
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div className="treatments__grid">
            {treatments.map((treatment) => (
              <article
                className="treatment-card"
                key={treatment.title}
              >
                <img
                  className="treatment-card__icon"
                  src={treatment.icon}
                  alt=""
                  aria-hidden="true"
                />

                <div className="treatment-card__content">
                  <h3 className="treatment-card__title">
                    {treatment.title}
                  </h3>

                  <p className="treatment-card__description">
                    {treatment.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Treatments;