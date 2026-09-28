import SEO from "../../components/SEO/SEO";
import LocalBusinessSchema from "../../components/SEO/LocalBusinessSchema";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import FeatureStrip from "../../components/FeatureStrip/FeatureStrip";
import Treatments from "../../components/Treatments/Treatments";
import Gallery from "../../components/Gallery/Gallery";
import Hours from "../../components/Hours/Hours";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* =================================================
          SEO
          ================================================= */}

      <SEO
        title="Distinct Dental | Dentist in Jakkur, Bengaluru"
        description="Distinct Dental provides comprehensive dental care, implants, periodontics, laser dentistry and cosmetic treatments in Jakkur, Bengaluru."
        canonical="https://distinctdental.in/"
      />

      <LocalBusinessSchema />


      {/* =================================================
          HEADER
          ================================================= */}

      <Header />


      {/* =================================================
          MAIN
          ================================================= */}

      <main>

        <Hero />

        <FeatureStrip />

        <Treatments />

        <Gallery />

        <Hours />

      </main>


      {/* =================================================
          FOOTER
          ================================================= */}

      <Footer />

    </div>
  );
}

export default Home;