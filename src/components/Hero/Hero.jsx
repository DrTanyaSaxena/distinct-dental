import "./Hero.css";
import Button from "../Button/Button";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__image" aria-hidden="true" />

      <div className="hero__gradient" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__display">
          <span className="hero__eyebrow">
            MODERN DENTISTRY. PERSONAL CARE.
          </span>

          <h1 className="hero__title">
            Confidence begins with a healthy smile
          </h1>
        </div>

        <p className="hero__description">
          Feel your best with the personalized dental care designed to
          support your health, confidence and everyday life.
        </p>

        <div className="hero__actions">
          <Button
            variant="primary"
            href="https://wa.me/message/GJYDXXMB4BN3I1"
          >
            <img
              src="/images/calendar-outline.svg"
              alt=""
              aria-hidden="true"
            />

            <span>Book an appointment</span>
          </Button>

          <Button
            variant="secondary"
            href="/about"
          >
            <span>Meet Dr. Tanya</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;