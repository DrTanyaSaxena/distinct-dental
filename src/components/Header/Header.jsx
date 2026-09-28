import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Header.css";

function Header() {
  const baseUrl = import.meta.env.BASE_URL;

  const [menuOpen, setMenuOpen] = useState(false);

  const currentPath = window.location.pathname;

  const logoWordmark = `${baseUrl}images/logo-wordmark.svg`;
  const logoMobile = `${baseUrl}images/Logo%20mobile.svg`;

  const isActive = (path) => {
    if (path === "/") {
      return currentPath === "/";
    }

    return currentPath.startsWith(path);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__inner">

          {/* =================================================
              DESKTOP / TABLET LOGO
              ================================================= */}

          <a
            href="/"
            className="header__logo header__logo--desktop"
            aria-label="Distinct Dental home"
          >
            <img
              src={logoWordmark}
              alt="Distinct Dental"
            />
          </a>


          {/* =================================================
              MOBILE LOGO
              ================================================= */}

          <a
            href="/"
            className="header__logo header__logo--mobile"
            aria-label="Distinct Dental home"
          >
            <img
              src={logoMobile}
              alt="Distinct Dental"
            />
          </a>


          {/* =================================================
              DESKTOP NAVIGATION
              ================================================= */}

          <nav
            className="header__nav"
            aria-label="Primary navigation"
          >

            <a
              href="/"
              className={`header__nav-link ${
                isActive("/")
                  ? "header__nav-link--active"
                  : ""
              }`}
              aria-current={
                isActive("/")
                  ? "page"
                  : undefined
              }
            >
              Home
            </a>

            <a
              href="/treatments"
              className={`header__nav-link ${
                isActive("/treatments")
                  ? "header__nav-link--active"
                  : ""
              }`}
              aria-current={
                isActive("/treatments")
                  ? "page"
                  : undefined
              }
            >
              Treatments
            </a>

            <a
              href="/about"
              className={`header__nav-link ${
                isActive("/about")
                  ? "header__nav-link--active"
                  : ""
              }`}
              aria-current={
                isActive("/about")
                  ? "page"
                  : undefined
              }
            >
              About
            </a>

          </nav>


          {/* =================================================
              ACTIONS
              ================================================= */}

          <div className="header__actions">

            <Button
              variant="primary"
              href="https://wa.me/message/GJYDXXMB4BN3I1"
              className="header__appointment"
            >

              <svg
                className="header__appointment-icon"
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

              <span className="header__appointment-label--full">
                Book an appointment
              </span>

              <span className="header__appointment-label--short">
                Book appointment
              </span>

            </Button>


            {/* =================================================
                MENU BUTTON
                ================================================= */}

            <button
              type="button"
              className="header__menu-button"
              onClick={() =>
                setMenuOpen((current) => !current)
              }
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={menuOpen}
              aria-controls="header-menu-panel"
            >

              {menuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 8H19"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />

                  <path
                    d="M5 16H19"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              )}

            </button>

          </div>

        </div>
      </header>


      {/* =====================================================
          MENU OVERLAY
          ===================================================== */}

      <div
        className={`header__overlay ${
          menuOpen
            ? "header__overlay--open"
            : ""
        }`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />


      {/* =====================================================
          MENU PANEL
          ===================================================== */}

      <aside
        id="header-menu-panel"
        className={`header__panel ${
          menuOpen
            ? "header__panel--open"
            : ""
        }`}
        aria-hidden={!menuOpen}
      >

        <div className="header__panel-header">

          <span className="header__panel-title">
            Menu
          </span>

          <button
            type="button"
            className="header__panel-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

        </div>


        <nav
          className="header__panel-nav"
          aria-label="Menu navigation"
        >

          <a
            href="/"
            className={`header__panel-link ${
              isActive("/")
                ? "header__panel-link--active"
                : ""
            }`}
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="/treatments"
            className={`header__panel-link ${
              isActive("/treatments")
                ? "header__panel-link--active"
                : ""
            }`}
            onClick={closeMenu}
          >
            Treatments
          </a>

          <a
            href="/about"
            className={`header__panel-link ${
              isActive("/about")
                ? "header__panel-link--active"
                : ""
            }`}
            onClick={closeMenu}
          >
            About
          </a>

        </nav>


        <div className="header__panel-cta">

          <Button
            variant="primary"
            href="https://wa.me/message/GJYDXXMB4BN3I1"
            className="header__panel-button"
            onClick={closeMenu}
          >
            Book an appointment
          </Button>

        </div>

      </aside>
    </>
  );
}

export default Header;