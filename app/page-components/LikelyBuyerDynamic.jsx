import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Carousel from "../components/Carousel";

const slides = [
  {
    title: "Builder/Developers",
    body: "With an eye for a property's potential, these buyers may be planning a larger development incorporating the site, or plan to rebuild/renovate your home.",
  },
  {
    title: "First-time buyers",
    body: "These eager buyers are excited about getting started on their property journey, whether they are investing or setting up a home to call their own.",
  },
  {
    title: "Expatriate market",
    body: "Expats often buy property whilst overseas to make the most of capital growth or to secure a house to move into on their return home.",
  },
  {
    title: "Upsizers",
    body: "Growing families or lifestyle upgraders looking for more space, better amenities, or a move to a more prestigious suburb.",
  },
  {
    title: "Downsizers",
    body: "Empty nesters and retirees seeking a lower-maintenance property that frees up capital while keeping them close to the things they love.",
  },
  {
    title: "Investors",
    body: "Yield-focused buyers attracted by strong rental demand, capital growth potential, or the opportunity to add value through renovation.",
  },
];

const LikelyBuyerDynamicDesktop = (_props) => {
  return (
    <>
      <style>{`
        #likely_buyer_dynamic {
          background-color: var(--color-tertiary);
        }

        .local-buyer-item {
          width: 100%;
          height: 100%;
          border: 1px solid var(--color-base-white);
          box-sizing: border-box;
          color: var(--color-base-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacer-32);
          padding: var(--spacer-32);
        }

        .local-buyer-item__title {
          width: 100%;
          text-align: left;
        }

        .local-buyer-item__desc {
          width: 100%;
          text-align: left;
        }
      `}</style>

      <section id="likely_buyer_dynamic" className="section">
        <div className="section__container">
          <div className="section__header">
            <div className="section__header__group section__header__group--default">
              <p className="section__title section__title--dark">
                LIKELY BUYER DYNAMIC
              </p>
            </div>
          </div>

          <Carousel
            className="common-carousel-swiper w-full"
            modules={[Autoplay, Pagination]}
            loop={true}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 32 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            centeredSlides={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.title}>
                <div className="local-buyer-item">
                  <p className="local-buyer-item__title c-font c-font--h4">
                    {slide.title}
                  </p>
                  <p className="local-buyer-item__desc c-font-body c-font-body--md-w400-normal">
                    {slide.body}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

const LikelyBuyerDynamic = (props) => {
  return <LikelyBuyerDynamicDesktop {...props} />;
};

export default LikelyBuyerDynamic;
