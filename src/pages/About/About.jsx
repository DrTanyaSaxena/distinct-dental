import SEO from "../../components/SEO/SEO";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./About.css";

function About() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="about-page">

      {/* =================================================
          SEO
          ================================================= */}

      <SEO
        title="Dr. Tanya Saxena | Periodontist in Bengaluru | Distinct Dental"
        description="Meet Dr. Tanya Saxena, Periodontist and Oral Implantologist at Distinct Dental in Bengaluru."
        canonical="https://distinctdental.in/about"
      />


      {/* =================================================
          HEADER
          ================================================= */}

      <Header />


      <main className="about-page__main">

        {/* =================================================
            ABOUT HERO / DOCTOR INTRODUCTION
            ================================================= */}

        <section className="about-intro">

          <div className="about-intro__container">

            {/* =================================================
                PHOTO
                ================================================= */}

            <div className="about-intro__image-wrap">

              <img
                className="about-intro__image"
                src={`${baseUrl}images/Dr.%20Tanya%20Saxena.jpg`}
                alt="Dr. Tanya Saxena"
              />

            </div>


            {/* =================================================
                CONTENT
                ================================================= */}

            <div className="about-intro__content">

              <span className="about-intro__eyebrow">
                MEET YOUR DENTIST
              </span>


              <h1 className="about-intro__title">
                Dr. Tanya Saxena
              </h1>


              <p className="about-intro__degree">
                BDS, MDS
              </p>


              <p className="about-intro__speciality">
                (Periodontology &amp; Implantology)
              </p>


              <div className="about-intro__body">

                <p>
                  Dr. Tanya Saxena is a specialist Periodontist and Oral
                  Implantologist and the Managing Director of Distinct Dental.
                  She has expertise in periodontal treatments, dental implants,
                  laser dentistry, and cosmetic dental procedures.
                </p>


                <p>
                  With a focus on precision, advanced technology, and
                  personalized care, Dr. Tanya is committed to providing
                  comprehensive dental treatment in a comfortable and
                  patient-centered environment.
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>


      <Footer />

    </div>
  );
}

export default About;