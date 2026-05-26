import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Carousel from "../components/Carousel";

const slides = [
  {
    id: 1,
    quote:
      "We worked with Michael at the purchase of our property and what a refreshing experience it was!\n\nAll communications were a joy. He is incredibly motivated, gets results quickly and most surprisingly he possesses a very rare sincerity — making our purchase so much more of a pleasant experience than we expected.\n\nWe would not hesitate in recommending him — he is simply wonderful!",
    author: "– Chilu K",
  },
  {
    id: 2,
    quote:
      "Sarah has all the skills you could ever need whether selling or buying. We have seen both sides of Sarah professionally managing real estate. Not only is she highly professional and knows all the necessary processes to achieve superior results. Technical real estate skills are only part of her business acumen.\n\nSarah is determined and works hard for her clients to achieve a superior result. Add a kind personable disposition and you have all the attributes of a 100% agent. That's Sarah!",
    author: "– Peter V",
  },
  {
    id: 3,
    quote:
      "Tia was brilliant! Easy to work with, appreciative of our needs and always obliging. She kept us informed and advised us throughout the process. She provided the highest level of customer service.\n\nEfficient, professional and personable. An absolute pleasure to deal with and whether it's buying or selling, we look forward to working with Tia again.",
    author: "– Linda M",
  },
  {
    id: 4,
    quote:
      "From the very first meeting we knew we were in good hands. The level of care and attention to detail throughout the entire campaign was outstanding — nothing was ever too much trouble.\n\nOur home sold above expectations and we genuinely believe that was a direct result of the strategy and effort put in on our behalf. We would recommend this team to anyone without hesitation.",
    author: "– James & Rachel T",
  },
];

const KindWords = () => (
  <>
    <style>{`
      .kind-words {
        width: 100%;
        background-color: var(--color-tertiary);
      }

      .kind-words__inner {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }

      .kind-words__panel {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: var(--element-block-gap);
        padding: var(--section-padding-block) var(--section-padding-inline);
        color: var(--color-base-white);
        overflow: hidden;
      }

      .kind-words__slide {
        display: flex;
        flex-direction: column;
        gap: var(--element-block-gap);
      }

      .kind-words__quote {
        white-space: pre-line;
      }

      .kind-words__photo-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
        background: var(--bg-image-placeholder);
      }

      .kind-words__photo {
        object-fit: cover;
      }

      @media screen and (min-width: 1024px) {
        .kind-words__inner {
          grid-template-columns: repeat(2, 1fr);
        }

        .kind-words__panel {
          min-height: 720px;
          padding: var(--section-padding-block);
        }

        .kind-words__photo-wrap {
          aspect-ratio: unset;
        }
      }
    `}</style>

    <section id="kind_words" className="kind-words">
      <div className="kind-words__inner">
        <div className="kind-words__panel">
          <p className="section__title section__title--dark">KIND WORDS</p>
          <Carousel
            className="common-carousel-swiper w-full h-full"
            modules={[Autoplay, Pagination]}
            loop={true}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              640: { spaceBetween: 28 },
              1024: { spaceBetween: 80 },
            }}
            centeredSlides={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="kind-words__slide">
                  <p className="c-font c-font--h5 kind-words__quote">
                    {slide.quote}
                  </p>
                  <p className="c-font-body c-font-body--lg-w400-normal">
                    {slide.author}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Carousel>
        </div>

        <div className="kind-words__photo-wrap">
          <Image
            fill
            className="kind-words__photo"
            sizes="(max-width: 640px) 100vw, 50vw"
            src="https://s3-alpha-sig.figma.com/img/b5fc/1d1b/3b0ea603d221ebf99dab7a16561c9546?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rl3rfR~Kxude5IjBKXbCvLAf8bOvfiDLYiXaONTIORYoCJZ0IthhQK87NB-0O-E-52ITkvY6UHHFhS27rf6eienrXCQJ3SiJwoIoEVxdKNXoWpr~jifUMrSk7E9-K0rfqaU9zJYTYdH6jmH5kjLmGQWALld49uUZW2P-VcM5Y5bqZq01GffBZsfdEJDPsDH-6d5cJsrpmPAByZrd-YCOf6uy1h7FrP4Alw0u95Ekv4q8j9jP~~RoBbm0Cn8iuhBi-kF5tlUdM7bKZFAI3tX7XP6g1J7QuncE1bk88yb0VZGtGI7cq1KyuffSKbsplu96wuQf~y8M57ws~7LM4O~GaQ__"
            alt="Kind words"
          />
        </div>
      </div>
    </section>
  </>
);

export default KindWords;
