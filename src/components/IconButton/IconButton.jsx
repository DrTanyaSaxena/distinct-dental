import "./IconButton.css";

function IconButton({
  label,
  variant = "secondary",
  disabled = false,
  className = "",
  children,
  ...props
}) {
  const classes = [
    "icon-button",
    `icon-button--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      aria-label={label}
      {...props}
    >
      {children}
    </button>
  );
}

export default IconButton;