import "./Footer.css";

function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* =================================================
            TOP CONTENT
            ================================================= */}

        <div className="footer__content">

          {/* -------------------------------------------------
              LOGO
              ------------------------------------------------- */}

          <div className="footer__logo-wrapper">

            <a
              href="/"
              className="footer__logo"
              aria-label="Distinct Dental home"
            >
              <img
                src={`${baseUrl}images/logo-wordmark.svg`}
                alt="Distinct Dental"
              />
            </a>

          </div>


          {/* -------------------------------------------------
              QUICK LINKS
              ------------------------------------------------- */}

          <div className="footer__quick-links">

            <h3 className="footer__section-title">
              Quick links:
            </h3>

            <div className="footer__quick-links-list">

              <a
                href="/treatments"
                className="footer__link"
              >
                Treatments
              </a>

              <a
                href="/about"
                className="footer__link"
              >
                Meet Dr. Tanya
              </a>

            </div>

          </div>


          {/* -------------------------------------------------
              FOLLOW US
              ------------------------------------------------- */}

          <div className="footer__follow">

            <h3 className="footer__section-title">
              Follow us:
            </h3>

            <div className="footer__social-links">

              {/* Instagram */}

              <a
                href="https://www.instagram.com/distinctdental.blr.in?stkn=NWhsbzE0NnE1NjRu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Distinct Dental on Instagram"
                className="footer__social-link"
              >
                <img
                  src={`${baseUrl}images/instagram.svg`}
                  alt=""
                  aria-hidden="true"
                />
              </a>


              {/* Google */}

              <a
                href="https://share.google/PGwlItdxAjQsqQhM8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Distinct Dental on Google"
                className="footer__social-link"
              >
                <img
                  src={`${baseUrl}images/google.svg`}
                  alt=""
                  aria-hidden="true"
                />
              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/saxenatanya/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Dr. Tanya Saxena on LinkedIn"
                className="footer__social-link"
              >
                <img
                  src={`${baseUrl}images/linkedin-in.svg`}
                  alt=""
                  aria-hidden="true"
                />
              </a>

            </div>

          </div>


          {/* -------------------------------------------------
              CONTACT DETAILS
              ------------------------------------------------- */}

          <div className="footer__contact">

            <div className="footer__contact-top">

              {/* Contact */}

              <div className="footer__contact-item">

                <div className="footer__contact-heading">

                  <img
                    src={`${baseUrl}images/phone-outline.svg`}
                    alt=""
                    aria-hidden="true"
                  />

                  <span>
                    Contact
                  </span>

                </div>


                <a
                  href="tel:+919187915994"
                  className="footer__contact-value"
                >
                  +91-9187915994
                </a>

              </div>


              {/* Email */}

              <div className="footer__contact-item">

                <div className="footer__contact-heading">

                  <img
                    src={`${baseUrl}images/email-outline.svg`}
                    alt=""
                    aria-hidden="true"
                  />

                  <span>
                    Email
                  </span>

                </div>


                <a
                  href="mailto:distinctdentalblr@gmail.com"
                  className="footer__contact-value"
                >
                  distinctdentalblr@gmail.com
                </a>

              </div>

            </div>


            {/* Address */}

            <div className="footer__contact-address">

              <div className="footer__contact-heading">

                <img
                  src={`${baseUrl}images/location-point.svg`}
                  alt=""
                  aria-hidden="true"
                />

                <span>
                  Address
                </span>

              </div>


              <p className="footer__contact-value">
                2nd floor, Plot 4, Jakkur Main Rd, opposite CSI good
                shepherd church, Surabhi Layout, Nehru Nagar,
                Bengaluru, Karnataka 560064
              </p>

            </div>

          </div>


          {/* -------------------------------------------------
              TAGLINE
              ------------------------------------------------- */}

          <div className="footer__tagline">
            Because
            <br />
            Every Smile
            <br />
            is Distinct
          </div>

        </div>


        {/* =================================================
            COPYRIGHT
            ================================================= */}

        <div className="footer__copyright">
          © 2026 Distinct Dental, All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;