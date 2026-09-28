import "./Tag.css";

function Tag({
  variant = "green",
  className = "",
  children,
  ...props
}) {
  const classes = [
    "tag",
    `tag--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classes}
      {...props}
    >
      {children}
    </span>
  );
}

export default Tag;