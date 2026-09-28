import {
  useEffect,
  useRef,
  useState,
} from "react";

import IconButton from "../IconButton/IconButton";

import "./Gallery.css";


/* =========================================================
   IMAGE FILES
   ========================================================= */

const desktopPhotos = [
  "clinic-01.png",
  "clinic-02.png",
  "clinic-03.png",
  "clinic-04.png",
  "clinic-05.png",
  "clinic-06.png",
];


const tabletPhotos = [
  "clinic-01 tab.jpg",
  "clinic-02 tab.jpg",
  "clinic-03 tab.jpg",
  "clinic-04 tab.jpg",
  "clinic-05 tab.jpg",
  "clinic-06tab.jpg",
];


const mobilePhotos = [
  "clinic-01 mob.jpg",
  "clinic-02 mob.jpg",
  "clinic-03 mob.jpg",
  "clinic-04 mob.jpg",
  "clinic-05 mob.jpg",
  "clinic-06 mob.jpg",
];


const TOTAL_PHOTOS = 6;


/* =========================================================
   AUTOPLAY SETTINGS
   ========================================================= */

const AUTOPLAY_DELAY = 2000;


/* =========================================================
   COMPONENT
   ========================================================= */

function Gallery() {
  const baseUrl = import.meta.env.BASE_URL;

  const buildImagePath = (fileName) =>
    `${baseUrl}images/${encodeURIComponent(fileName)}`;


  /* =======================================================
     SOURCES
     ======================================================= */

  const desktopSources = desktopPhotos.map(buildImagePath);
  const tabletSources = tabletPhotos.map(buildImagePath);
  const mobileSources = mobilePhotos.map(buildImagePath);


  /* =======================================================
     STATE
     ======================================================= */

  const [activeIndex, setActiveIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);


  /* =======================================================
     LOOPED ARRAYS
     ======================================================= */

  const loopedDesktopPhotos = [
    ...desktopSources,
    desktopSources[0],
  ];


  const loopedTabletPhotos = [
    ...tabletSources,
    tabletSources[0],
  ];


  const loopedMobilePhotos = [
    ...mobileSources,
    mobileSources[0],
  ];


  /* =======================================================
     NEXT
     ======================================================= */

  const nextSlide = () => {
    setIsAnimating(true);

    setTrackIndex((current) => current + 1);

    setActiveIndex((current) =>
      current === TOTAL_PHOTOS - 1
        ? 0
        : current + 1
    );
  };


  /* =======================================================
     PREVIOUS
     ======================================================= */

  const previousSlide = () => {
    setIsAnimating(true);

    if (trackIndex === 0) {
      setIsAnimating(false);

      setTrackIndex(TOTAL_PHOTOS);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);

          setTrackIndex(TOTAL_PHOTOS - 1);

          setActiveIndex(TOTAL_PHOTOS - 1);
        });
      });

      return;
    }

    setTrackIndex((current) => current - 1);

    setActiveIndex((current) =>
      current === 0
        ? TOTAL_PHOTOS - 1
        : current - 1
    );
  };


  /* =======================================================
     LOOP RESET
     ======================================================= */

  useEffect(() => {
    if (trackIndex !== TOTAL_PHOTOS) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsAnimating(false);

      setTrackIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [trackIndex]);


  /* =======================================================
     AUTOPLAY
     ALL SCREEN SIZES

     Advances automatically every 2 seconds.
     ======================================================= */

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);

    return () => {
      clearInterval(autoplay);
    };
  }, []);


  /* =======================================================
     DESKTOP / TABLET OFFSET
     ======================================================= */

  const desktopTabletOffset =
    (trackIndex / 7) * 100;


  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <section className="gallery">

      <div className="gallery__container">

        {/* =================================================
            CONTENT
            ================================================= */}

        <div className="gallery__content">

          <div className="gallery__heading">

            <span className="gallery__eyebrow">
              OUR CLINIC
            </span>

            <h2 className="gallery__title">
              Where modern care meets comfort.
            </h2>

          </div>


          <p className="gallery__description">
            From our welcoming reception to our advanced
            treatment rooms, every detail is designed with
            your comfort in mind.
          </p>

        </div>


        {/* =================================================
            MEDIA
            ================================================= */}

        <div className="gallery__media">

          {/* =================================================
              DESKTOP
              ================================================= */}

          <div className="gallery__photos gallery__photos--desktop">

            <div
              className="gallery__track"
              style={{
                transform:
                  `translate3d(-${desktopTabletOffset}%, 0, 0)`,

                transition: isAnimating
                  ? "transform 300ms ease-out"
                  : "none",
              }}
            >

              {loopedDesktopPhotos.map((photo, index) => (
                <img
                  key={`desktop-${index}`}
                  className="gallery__photo"
                  src={photo}
                  alt=""
                  aria-hidden="true"
                />
              ))}

            </div>

          </div>


          {/* =================================================
              TABLET
              ================================================= */}

          <div className="gallery__photos gallery__photos--tablet">

            <div
              className="gallery__track"
              style={{
                transform:
                  `translate3d(-${desktopTabletOffset}%, 0, 0)`,

                transition: isAnimating
                  ? "transform 300ms ease-out"
                  : "none",
              }}
            >

              {loopedTabletPhotos.map((photo, index) => (
                <img
                  key={`tablet-${index}`}
                  className="gallery__photo"
                  src={photo}
                  alt=""
                  aria-hidden="true"
                />
              ))}

            </div>

          </div>


          {/* =================================================
              MOBILE
              ================================================= */}

          <div className="gallery__photos gallery__photos--mobile">

            <div
              className="gallery__track"
              style={{
                transform: `translate3d(-${
                  trackIndex * (100 / 7)
                }%, 0, 0)`,

                transition: isAnimating
                  ? "transform 300ms ease-out"
                  : "none",
              }}
            >

              {loopedMobilePhotos.map((photo, index) => (
                <img
                  key={`mobile-${index}`}
                  className="gallery__photo"
                  src={photo}
                  alt=""
                  aria-hidden="true"
                />
              ))}

            </div>

          </div>


          {/* =================================================
              CONTROLS
              ================================================= */}

          <div className="gallery__controls">

            <div className="gallery__navigation">

              <IconButton
                label="Previous clinic image"
                onClick={previousSlide}
              >
                <span aria-hidden="true">
                  ←
                </span>
              </IconButton>


              <IconButton
                label="Next clinic image"
                onClick={nextSlide}
              >
                <span aria-hidden="true">
                  →
                </span>
              </IconButton>

            </div>


            <div className="gallery__counter">

              <span>
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span>/</span>

              <span>
                {String(TOTAL_PHOTOS).padStart(2, "0")}
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Gallery;