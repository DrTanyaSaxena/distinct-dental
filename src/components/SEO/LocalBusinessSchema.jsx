function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://distinctdental.in/#dentist",

    "name": "Distinct Dental",

    "url": "https://distinctdental.in/",

    "logo": "https://distinctdental.in/images/logo-wordmark.svg",

    "telephone": "+91-9187915994",

    "email": "distinctdentalblr@gmail.com",

    "address": {
      "@type": "PostalAddress",
      "streetAddress":
        "2nd floor, Plot 4, Jakkur Main Rd, opposite CSI Good Shepherd Church, Surabhi Layout, Nehru Nagar",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560064",
      "addressCountry": "IN"
    },

    "sameAs": [
      "https://www.instagram.com/distinctdental.blr.in",
      "https://www.linkedin.com/in/saxenatanya/"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}

export default LocalBusinessSchema;