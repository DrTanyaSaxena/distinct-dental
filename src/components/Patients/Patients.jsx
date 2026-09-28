import "./Patients.css";
import Tag from "../Tag/Tag";

const baseUrl = import.meta.env.BASE_URL;

const patientCases = [
  {
    title: "Gum depigmentation",
    tabletTitle: "Gum depigmentation",

    before: "DS1.jpg",
    after: "DS2.jpg",

    tabletBefore: "DS1tab.jpg",
    tabletAfter: "DS2tab.jpg",
  },
  {
    title: "Gum enlargement",
    tabletTitle: "Gum enlargement",

    before: "GE1.jpg",
    after: "GE2.jpg",

    tabletBefore: "GE1tab.jpg",
    tabletAfter: "GE2tab.jpg",
  },
  {
    title: "Laser treatment",
    tabletTitle: "Laser treatment",

    before: "LT2.jpg",
    after: "LT1.jpg",

    tabletBefore: "LT2tab.jpg",
    tabletAfter: "LT1tab.jpg",
  },
  {
    title: "Gum depigmentation",
    tabletTitle: "Dental scaling",

    before: "GD1.jpg",
    after: "GD2.jpg",

    tabletBefore: "GD1tab.jpg",
    tabletAfter: "GD2tab.jpg",
  },
  {
    title: "Broken tooth repair",
    tabletTitle: "Restoration of broken tooth",

    before: "BT1.jpg",
    after: "BT2.jpg",

    tabletBefore: "BT1tab.jpg",
    tabletAfter: "BT2tab.jpg",
  },
  {
    title: "Full mouth rehabilitation",
    tabletTitle: "Full mouth rehabilitation",

    before: "FMR1.jpg",
    after: "FMR2.jpg",

    tabletBefore: "FMR1tab.jpg",
    tabletAfter: "FMR2tab.jpg",
  },
];


function PatientCase({
  title,
  tabletTitle,
  before,
  after,
  tabletBefore,
  tabletAfter,
}) {
  return (
    <article className="patient-case">

      {/* -------------------------------------------------
          Desktop title
          ------------------------------------------------- */}

      <h3 className="patient-case__title patient-case__title--desktop">
        {title}
      </h3>


      {/* -------------------------------------------------
          Tablet title
          ------------------------------------------------- */}

      <h3 className="patient-case__title patient-case__title--tablet">
        {tabletTitle}
      </h3>


      {/* -------------------------------------------------
          BEFORE
          ------------------------------------------------- */}

      <div className="patient-case__image">

        <picture>
          <source
            media="(min-width: 768px) and (max-width: 1199px)"
            srcSet={`${baseUrl}images/${tabletBefore}`}
          />

          <img
            src={`${baseUrl}images/${before}`}
            alt={`${title} before treatment`}
          />
        </picture>

        <div className="patient-case__tag">
          <Tag variant="warm">
            Before
          </Tag>
        </div>

      </div>


      {/* -------------------------------------------------
          AFTER
          ------------------------------------------------- */}

      <div className="patient-case__image">

        <picture>
          <source
            media="(min-width: 768px) and (max-width: 1199px)"
            srcSet={`${baseUrl}images/${tabletAfter}`}
          />

          <img
            src={`${baseUrl}images/${after}`}
            alt={`${title} after treatment`}
          />
        </picture>

        <div className="patient-case__tag">
          <Tag variant="green">
            After
          </Tag>
        </div>

      </div>

    </article>
  );
}


function Patients() {

  const marqueeCases = [
    ...patientCases,
    ...patientCases,
  ];

  return (
    <section className="patients">

      <div className="patients__container">

        {/* =================================================
            HEADING
            ================================================= */}

        <div className="patients__heading">

          <span className="patients__eyebrow">
            REAL PATIENTS
          </span>

          <h2 className="patients__title">
            See the difference our
            <br />
            treatments make.
          </h2>

          <p className="patients__description">
            Here are a few examples of how we’ve helped our patients
            achieve healthier, more confident smiles.
          </p>

        </div>


        {/* =================================================
            CAROUSEL
            ================================================= */}

        <div className="patients__viewport">

          <div className="patients__track">

            {marqueeCases.map((patient, index) => (
              <PatientCase
                key={`${patient.title}-${index}`}
                {...patient}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}


export default Patients;