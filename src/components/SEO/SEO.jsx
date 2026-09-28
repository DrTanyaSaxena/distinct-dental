function SEO({
  title,
  description,
  canonical,
}) {
  return (
    <>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={canonical}
      />
    </>
  );
}

export default SEO;