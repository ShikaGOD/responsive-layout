import React from "react";
import "./main.css";

import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

function Main() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <main className="page">
      <section className="page__main main-block">
        <div className="main-block__container">
          <div className="main-block__body body-main-block">
            <div className="body-main-block__content content-main-block">
              <div className="content-main-block__body">
                <div className="content-main-block__sub-title">
                  RESIDENTIAL & OFFICE SPACES
                </div>
                <h1 className="content-main-block__title">
                  Smart Living Style for Smart People
                </h1>
                <div className="content-main-block__text">
                  Much did had call new drew that kept. Limits expect wonder law
                  she. Now has you views woman noisy match money rooms.
                </div>
              </div>
              <form
                action="#"
                className="content-main-block__form form-main-block"
              >
                <input type="text" className="form-main-block__input" />
                <button type="submit" className="form-main-block__button">
                  Search Now!
                </button>
              </form>
            </div>
            <div className="body-main-block__slider slider-main-block swiper">
              <swiper-container
                ref={swiperElRef}
                slides-per-view="3"
                navigation="true"
                pagination="true"
              >
                <swiper-slide>
                  <img
                    src="https://i2.paste.pics/d7612cee7c621dee7a82a5236e5f8564.png?trs=6dc369fd2eb6de09ff8b9c38156583409832be4de2b8126866b8bf49fb3f40bd"
                    alt="NOTHING"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    src="https://i2.paste.pics/d7612cee7c621dee7a82a5236e5f8564.png?trs=6dc369fd2eb6de09ff8b9c38156583409832be4de2b8126866b8bf49fb3f40bd"
                    alt="NOTHING"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    src="https://i2.paste.pics/d7612cee7c621dee7a82a5236e5f8564.png?trs=6dc369fd2eb6de09ff8b9c38156583409832be4de2b8126866b8bf49fb3f40bd"
                    alt="NOTHING"
                  />
                </swiper-slide>
                ...
              </swiper-container>
            </div>
          </div>
          <div className="main-block__partners partners-main-block">
            <div className="partners-main-block__label">
              Our Amazing Partners
            </div>
            <div className="partners-main-block__items">
              <div className="partners-main-block__item"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
