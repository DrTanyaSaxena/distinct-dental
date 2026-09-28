import "./ConsultationCTA.css";
import Button from "../Button/Button";

function ConsultationCTA() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="consultation-cta">
      <div className="consultation-cta__container">

        {/* =================================================
            RESPONSIVE IMAGE

            Desktop:
            Book appointment image.jpg

            Tablet:
            booktab.jpg

            Mobile:
            BAMob.jpg
            ================================================= */}

        <picture className="consultation-cta__picture">

          <source
            media="(max-width: 767px)"
            srcSet={`${baseUrl}images/BAMob.jpg`}
          />

          <source
            media="(min-width: 768px) and (max-width: 1199px)"
            srcSet={`${baseUrl}images/booktab.jpg`}
          />

          <img
            className="consultation-cta__image"
            src={`${baseUrl}images/Book%20appointment%20image.jpg`}
            alt=""
            aria-hidden="true"
          />

        </picture>


        {/* =================================================
            GRADIENT
            ================================================= */}

        <div
          className="consultation-cta__gradient"
          aria-hidden="true"
        />


        {/* =================================================
            CONTENT
            ================================================= */}

        <div className="consultation-cta__content">

          <span className="consultation-cta__eyebrow">
            YOUR DENTAL HEALTH MATTERS
          </span>

          <h2 className="consultation-cta__title">
            Book a consultation
            <br />
            today.
          </h2>

          <p className="consultation-cta__description">
            Take the first step towards a healthier, brighter smile with
            personalized care from our experienced team.
          </p>

          <Button
            variant="secondary"
            href="https://wa.me/message/GJYDXXMB4BN3I1"
          >
            <span
              className="consultation-cta__calendar-icon"
              aria-hidden="true"
            />

            <span>
              Book an appointment
            </span>
          </Button>

        </div>

      </div>
    </section>
  );
}

export default ConsultationCTA;