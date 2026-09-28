import SEO from "../../components/SEO/SEO";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TreatmentCard from "../../components/TreatmentCard/TreatmentCard";
import Patients from "../../components/Patients/Patients";
import ConsultationCTA from "../../components/ConsultationCTA/ConsultationCTA";

import "./Treatment.css";

const treatments = [
  {
    title: "Dental Check-ups & Digital X-Rays",
    description:
      "Routine examinations to detect dental problems early, with digital X-rays when needed.",
    icon: "Dental checkup 1.svg",
  },
  {
    title: "Cleaning & Polishing",
    description:
      "Removes plaque, tartar and surface stains to keep teeth and gums healthy.",
    icon: "Dental Icons-16.svg",
  },
  {
    title: "Gum Disease & Loose Tooth",
    description:
      "Treats infected or unhealthy gums and addresses causes of tooth mobility.",
    icon: "Gum care 1.svg",
  },
  {
    title: "Bad Breath & Tooth Sensitivity",
    description:
      "Identifies the cause and provides treatment to reduce bad breath or sensitivity.",
    icon: "Dental Icons-14.svg",
  },
  {
    title: "Teeth Whitening & Gum Lightening",
    description:
      "Brightens discolored teeth and reduces excessive gum pigmentation for a more even appearance.",
    icon: "Dental Icons-13.svg",
  },
  {
    title: "Laser Dentistry",
    description:
      "Advanced laser tools for safer, gentler gum, tissue and dental procedures with precision.",
    icon: "Dental Icons-11.svg",
  },
  {
    title: "Tooth-Colored Fillings & Broken Tooth Repair",
    description:
      "Restores cavities and damaged teeth using natural-looking materials.",
    icon: "Dental Icons-10.svg",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Removes infection from inside a tooth and preserves the natural tooth.",
    icon: "Root Canal 1.svg",
  },
  {
    title: "Emergency Dental Care",
    description:
      "Prompt treatment for dental pain, swelling, trauma, bleeding and other urgent problems.",
    icon: "Dental Icons-8.svg",
  },
  {
    title: "Crowns, Bridges & Dentures",
    description:
      "Restores damaged or missing teeth and improves function and appearance.",
    icon: "Dental Icons-7.svg",
  },
  {
    title: "Denture Repair",
    description:
      "Repairs damaged or broken dentures to restore their fit and function.",
    icon: "Dental Icons-6.svg",
  },
  {
    title: "Smile Designing & Veneers",
    description:
      "Improves the appearance of teeth using customized cosmetic treatments and veneers.",
    icon: "Smile design 1.svg",
  },
  {
    title: "Full Mouth Rehabilitation",
    description:
      "Comprehensive treatment to restore the health, function and appearance of multiple teeth.",
    icon: "Dental Icons-4.svg",
  },
  {
    title: "Tooth Removal",
    description:
      "Safely removes teeth that cannot be adequately restored or require extraction.",
    icon: "Dental Icons-3.svg",
  },
  {
    title: "Dental Implants",
    description:
      "Replaces missing teeth with implant-supported artificial teeth that function like natural teeth.",
    icon: "Implants 1.svg",
  },
  {
    title: "Clear Aligners & Braces",
    description:
      "Gradually straightens teeth and helps correct bite-related problems.",
    icon: "Braces 1.svg",
  },
  {
    title: "Children's Dentistry",
    description:
      "Dental care focused on children's oral health, prevention, growth and development.",
    icon: "Child.svg",
  },
  {
    title: "Preventive Dental Care",
    description:
      "Regular check-ups, hygiene care and personalized advice to prevent future dental problems.",
    icon: "Dental Icons.svg",
  },
];

function Treatment() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="treatment-page">

      {/* =================================================
          SEO
          ================================================= */}

      <SEO
        title="Dental Treatments in Jakkur, Bengaluru | Distinct Dental"
        description="Explore dental treatments at Distinct Dental in Jakkur, Bengaluru, including dental implants, laser dentistry, gum care, root canal treatment and cosmetic dentistry."
        canonical="https://distinctdental.in/treatments"
      />


      {/* =================================================
          HEADER
          ================================================= */}

      <Header />


      <main className="treatment-page__main">

        {/* =================================================
            HERO
            ================================================= */}

        <section className="treatment-hero">

          <img
            className="treatment-hero__image"
            src={`${baseUrl}images/Treatment%20hero.png`}
            alt=""
            aria-hidden="true"
          />


          <picture className="treatment-hero__tablet-image">
            <img
              src={`${baseUrl}images/treatmentsherotab.jpg`}
              alt=""
              aria-hidden="true"
            />
          </picture>


          <picture className="treatment-hero__mobile-image">
            <img
              src={`${baseUrl}images/treatmentheromob.jpg`}
              alt=""
              aria-hidden="true"
            />
          </picture>


          <div
            className="treatment-hero__gradient"
            aria-hidden="true"
          />


          <div
            className="treatment-hero__mobile-gradient"
            aria-hidden="true"
          />


          <div className="treatment-hero__container">

            <div className="treatment-hero__content">

              <span className="treatment-hero__eyebrow">
                OUR TREATMENTS
              </span>


              <h1 className="treatment-hero__title treatment-hero__title--desktop">
                Comprehensive
                <br />
                care for every
                <br />
                smile.
              </h1>


              <h1 className="treatment-hero__title treatment-hero__title--mobile">
                Comprehensive care
                <br />
                for every smile.
              </h1>


              <p className="treatment-hero__description">
                From preventive care to advanced treatments, we offer a
                full range of dental services designed around your comfort,
                oral health and long-term well being.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            TREATMENT LIST
            ================================================= */}

        <section className="treatment-list">

          <div className="treatment-list__container">

            <div className="treatment-list__grid">

              {treatments.map((treatment) => (
                <TreatmentCard
                  key={treatment.title}
                  icon={
                    <img
                      src={`${baseUrl}images/${treatment.icon}`}
                      alt=""
                      aria-hidden="true"
                    />
                  }
                  title={treatment.title}
                  description={treatment.description}
                />
              ))}

            </div>

          </div>

        </section>


        <Patients />

        <ConsultationCTA />

      </main>


      <Footer />

    </div>
  );
}

export default Treatment;