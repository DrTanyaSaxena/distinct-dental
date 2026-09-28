import "./Hours.css";
import Button from "../Button/Button";


/* =========================================================
   HOURS DATA
   ========================================================= */

const hours = [
  {
    day: "Monday",
    first: "10:00 AM – 2:00 PM",
    second: "5:30 PM – 8:30 PM",
  },
  {
    day: "Tuesday",
    first: "10:00 AM – 2:00 PM",
    second: "5:30 PM – 8:30 PM",
  },
  {
    day: "Wednesday",
    first: "10:00 AM – 2:00 PM",
    second: "5:30 PM – 8:30 PM",
  },
  {
    day: "Thursday",
    first: "Closed",
    second: "",
    closed: true,
  },
  {
    day: "Friday",
    first: "10:00 AM – 2:00 PM",
    second: "5:30 PM – 8:30 PM",
  },
  {
    day: "Saturday",
    first: "10:00 AM – 2:00 PM",
    second: "5:30 PM – 8:30 PM",
  },
  {
    day: "Sunday",
    first: "11:00 AM – 5:00 PM",
    second: "",
  },
];


/* =========================================================
   HOURS ICON
   ========================================================= */

function HoursIcon() {
  return (
    <svg
      className="hours__inline-icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M12 7.5V12L15 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* =========================================================
   LOCATION ICON
   ========================================================= */

function LocationIcon() {
  return (
    <svg
      className="hours__inline-icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 21C12 21 19 14.8 19 9.7C19 5.99 15.87 3 12 3C8.13 3 5 5.99 5 9.7C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="9.5"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}


/* =========================================================
   CALENDAR ICON
   ========================================================= */

function CalendarIcon() {
  return (
    <svg
      className="hours__button-icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M8 3.5V7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M16 3.5V7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M4 9H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* =========================================================
   DIRECTIONS ICON
   ========================================================= */

function DirectionsIcon() {
  return (
    <svg
      className="hours__button-icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13.4 4.1L19.9 10.6C20.7 11.4 20.7 12.6 19.9 13.4L13.4 19.9C12.6 20.7 11.4 20.7 10.6 19.9L4.1 13.4C3.3 12.6 3.3 11.4 4.1 10.6L10.6 4.1C11.4 3.3 12.6 3.3 13.4 4.1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 12H15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M12.8 9.3L15.5 12L12.8 14.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* =========================================================
   COMPONENT
   ========================================================= */

function Hours() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="hours">

      <div className="hours__container">

        {/* =================================================
            IMAGE
            ================================================= */}

        <div className="hours__image">

          <picture>

            {/* MOBILE */}
            <source
              media="(max-width: 767px)"
              srcSet={`${baseUrl}images/hours%20mob%20img.jpg`}
            />

            {/* TABLET */}
            <source
              media="(min-width: 768px) and (max-width: 1199px)"
              srcSet={`${baseUrl}images/Hours%20tab.jpg`}
            />

            {/* DESKTOP */}
            <img
              src={`${baseUrl}images/Clinic%20hours%20photo.png`}
              alt="Distinct Dental clinic"
            />

          </picture>

        </div>


        {/* =================================================
            CONTENT
            ================================================= */}

        <div className="hours__content">

          {/* =================================================
              HEADING
              ================================================= */}

          <div className="hours__heading">

            <span className="hours__eyebrow">
              VISIT DISTINCT DENTAL
            </span>

            <h2 className="hours__title">
              Clinic opening hours
            </h2>

          </div>


          {/* =================================================
              DETAILS
              ================================================= */}

          <div className="hours__details">

            {/* =================================================
                HOURS
                ================================================= */}

            <div className="hours__block">

              <div className="hours__block-heading">

                <HoursIcon />

                <span>
                  Hours
                </span>

              </div>


              <div className="hours__list">

                {hours.map((entry) => (
                  <div
                    key={entry.day}
                    className={`hours__row ${
                      entry.closed
                        ? "hours__row--closed"
                        : ""
                    }`}
                  >

                    <span className="hours__day">
                      {entry.day}
                    </span>


                    <div className="hours__times">

                      <span>
                        {entry.first}
                      </span>

                      {entry.second && (
                        <span>
                          {entry.second}
                        </span>
                      )}

                    </div>

                  </div>
                ))}

              </div>

            </div>


            {/* =================================================
                ADDRESS
                ================================================= */}

            <div
              className="
                hours__block
                hours__block--address
              "
            >

              <div className="hours__block-heading">

                <LocationIcon />

                <span>
                  Address
                </span>

              </div>


              <p className="hours__address">
                2nd floor, Plot 4, Jakkur Main Rd,
                opposite CSI good shepherd church,
                Surabhi Layout, Nehru Nagar,
                Bengaluru, Karnataka 560064
              </p>

            </div>

          </div>


          {/* =================================================
              ACTIONS
              ================================================= */}

          <div className="hours__actions">

            <Button
              variant="primary"
              href="https://wa.me/message/GJYDXXMB4BN3I1"
            >

              <CalendarIcon />

              <span>
                Book an appointment
              </span>

            </Button>


            <Button
              variant="secondary"
              href="https://maps.app.goo.gl/HfJ561SgL9jQfCmZ7"
            >

              <DirectionsIcon />

              <span>
                Get directions
              </span>

            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hours;