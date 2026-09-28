import "./TreatmentCard.css";

function TreatmentCard({
  icon,
  title,
  description,
  className = "",
  children,
  ...props
}) {
  const classes = [
    "treatment-service-card",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={classes}
      {...props}
    >
      <div className="treatment-service-card__icon">
        {icon}
      </div>

      <div className="treatment-service-card__content">
        {children ?? (
          <>
            {title && (
              <h3 className="treatment-service-card__title">
                {title}
              </h3>
            )}

            {description && (
              <p className="treatment-service-card__description">
                {description}
              </p>
            )}
          </>
        )}
      </div>
    </article>
  );
}

export default TreatmentCard;