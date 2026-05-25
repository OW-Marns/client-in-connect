import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Carousel from "../components/Carousel";
import Image from "next/image";
import { formatPrice } from "../utils/formatPrice";

const slides = [
  {
    id: 1,
    address: "268 Narellan Drive",
    suburb: "NORTHBRIDGE",
    bedrooms: 5,
    bathrooms: 3,
    carSpaces: 4,
    pools: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/7953/0f62/b9c07b935035987652b60f602551cc9b?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jNAzYlTv09oaTNEKA5tLgsT1LguFYTyJKefndFFranQSvTF64g-ffQY2dCdgZszlDo6-7xMZacmeneEgdsvjA6VQB6BMglKOT5aFTZBojF-322mSsc41KVZBO96DlXCIMrikHSDrSfazm5jdXrV8J-u0z6o7idfJ0iApX3Pl-hEsxD8Pig-ijkAiGS2-fbOqZRlaINJfM0mEq0Ov9-NOPSaVBxZxo0MK7A32hjMlgsnVOW9OYiiv-yiumqXLiiU6mjKb-sCnWd4rJ4kRFTsBAKduZcLQeu~tbc-nFC4wthpUPgg7S6IIJw5FtnHvSbqzRkatpzkfSM-DOd~oEUL2RA__",
    tag: "SOLD",
    price: 12500000,
    description: `Evera corro in tinis quo testium dolor aut et velibus res, adis aut fugiam exerspero eventur. Sita imos dis vendes sed et aut volupta quis sunt, volor posam eum nistibus equam ossini es it, tem ne accusius abor doloret corio horan secto in aura porro video molorum etur man et rendo mos etur, omni por xerro colorias estium acepudi pelicid moloro.\n\nPeriant sandis am quis a nisquo doluptio molent vel maio que repro is consed quam. Sita imos dis es ut lant eliscie nimusanda quis sunt, aut volor posam eum nistibus venduntis equam ossini es it, tem ne accusius abor doloret corio horan. Nam situr aria sit, secto in aura porro video molorum etur man et rendo se quisit, omni por et xerro colorias adignat acepudi pelicid moloro.`,
    stats: [
      { label: "ENQUIRIES", value: 180 },
      { label: "CONTRACTS", value: 22 },
      { label: "BIDDERS", value: 18 },
      { label: "DAYS ON MARKET", value: 30 },
    ],
  },
  {
    id: 2,
    address: "268 Narellan Drive",
    suburb: "NORTHBRIDGE",
    bedrooms: 5,
    bathrooms: 3,
    carSpaces: 4,
    pools: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/7953/0f62/b9c07b935035987652b60f602551cc9b?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jNAzYlTv09oaTNEKA5tLgsT1LguFYTyJKefndFFranQSvTF64g-ffQY2dCdgZszlDo6-7xMZacmeneEgdsvjA6VQB6BMglKOT5aFTZBojF-322mSsc41KVZBO96DlXCIMrikHSDrSfazm5jdXrV8J-u0z6o7idfJ0iApX3Pl-hEsxD8Pig-ijkAiGS2-fbOqZRlaINJfM0mEq0Ov9-NOPSaVBxZxo0MK7A32hjMlgsnVOW9OYiiv-yiumqXLiiU6mjKb-sCnWd4rJ4kRFTsBAKduZcLQeu~tbc-nFC4wthpUPgg7S6IIJw5FtnHvSbqzRkatpzkfSM-DOd~oEUL2RA__",
    tag: "SOLD",
    price: 12500000,
    description: `Evera corro in tinis quo testium dolor aut et velibus res, adis aut fugiam exerspero eventur. Sita imos dis vendes sed et aut volupta quis sunt, volor posam eum nistibus equam ossini es it, tem ne accusius abor doloret corio horan secto in aura porro video molorum etur man et rendo mos etur, omni por xerro colorias estium acepudi pelicid moloro.\n\nPeriant sandis am quis a nisquo doluptio molent vel maio que repro is consed quam. Sita imos dis es ut lant eliscie nimusanda quis sunt, aut volor posam eum nistibus venduntis equam ossini es it, tem ne accusius abor doloret corio horan. Nam situr aria sit, secto in aura porro video molorum etur man et rendo se quisit, omni por et xerro colorias adignat acepudi pelicid moloro.`,
    stats: [
      { label: "ENQUIRIES", value: 180 },
      { label: "CONTRACTS", value: 22 },
      { label: "BIDDERS", value: 18 },
      { label: "DAYS ON MARKET", value: 30 },
    ],
  },
  {
    id: 3,
    address: "268 Narellan Drive",
    suburb: "NORTHBRIDGE",
    bedrooms: 5,
    bathrooms: 3,
    carSpaces: 4,
    pools: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/7953/0f62/b9c07b935035987652b60f602551cc9b?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jNAzYlTv09oaTNEKA5tLgsT1LguFYTyJKefndFFranQSvTF64g-ffQY2dCdgZszlDo6-7xMZacmeneEgdsvjA6VQB6BMglKOT5aFTZBojF-322mSsc41KVZBO96DlXCIMrikHSDrSfazm5jdXrV8J-u0z6o7idfJ0iApX3Pl-hEsxD8Pig-ijkAiGS2-fbOqZRlaINJfM0mEq0Ov9-NOPSaVBxZxo0MK7A32hjMlgsnVOW9OYiiv-yiumqXLiiU6mjKb-sCnWd4rJ4kRFTsBAKduZcLQeu~tbc-nFC4wthpUPgg7S6IIJw5FtnHvSbqzRkatpzkfSM-DOd~oEUL2RA__",
    tag: "SOLD",
    price: 12500000,
    description: `Evera corro in tinis quo testium dolor aut et velibus res, adis aut fugiam exerspero eventur. Sita imos dis vendes sed et aut volupta quis sunt, volor posam eum nistibus equam ossini es it, tem ne accusius abor doloret corio horan secto in aura porro video molorum etur man et rendo mos etur, omni por xerro colorias estium acepudi pelicid moloro.\n\nPeriant sandis am quis a nisquo doluptio molent vel maio que repro is consed quam. Sita imos dis es ut lant eliscie nimusanda quis sunt, aut volor posam eum nistibus venduntis equam ossini es it, tem ne accusius abor doloret corio horan. Nam situr aria sit, secto in aura porro video molorum etur man et rendo se quisit, omni por et xerro colorias adignat acepudi pelicid moloro.`,
    stats: [
      { label: "ENQUIRIES", value: 180 },
      { label: "CONTRACTS", value: 22 },
      { label: "BIDDERS", value: 18 },
      { label: "DAYS ON MARKET", value: 30 },
    ],
  },
];

const amenitiesFor = (slide) => [
  { value: slide.bedrooms, label: "BED" },
  { value: slide.bathrooms, label: "BATH" },
  { value: slide.carSpaces, label: "CAR" },
  { value: slide.pools, label: "POOL" },
];

const CaseStudies = () => (
  <>
    <style>{`
      .case-studies-item {
        color: var(--color-primary);
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: flex-start;
      }

      .case-studies-item__head {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: flex-start;
      }

      .case-studies-item__head-info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .case-studies-item__icon {
        width: 24px;
        height: 24px;
      }

      .case-studies-item__amenities {
        display: flex;
        flex-direction: row;
        gap: 32px;
        align-items: center;
      }

      .case-studies-item__amenity {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 6px;
      }

      .case-studies-item__content {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      .case-studies-item__image-wrap {
        position: relative;
        width: 100%;
        aspect-ratio: 84/53;
        background-color: rgba(0,0,0,0.05);
      }

      .case-studies-item__body {
        display: flex;
        flex-direction: column;
        gap: var(--element-block-gap);
      }

      .case-studies-item__tag-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 36px;
      }

      .case-studies-item__price {
        color: var(--color-secondary);
      }

      .case-studies-item__description {
        white-space: pre-line;
      }

      .case-studies-item__stats {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 16px;
        row-gap: 20px;
      }

      @media screen and (min-width: 640px) {
        .case-studies-item {
          gap: 32px;
        }

        .case-studies-item__head {
          gap: 32px;
        }

        .case-studies-item__head-info {
          gap: 4px;
        }

        .case-studies-item__icon {
          width: 28px;
          height: 28px;
        }

        .case-studies-item__stats {
          grid-template-columns: repeat(4, 1fr);
        }
      }

      @media screen and (min-width: 1024px) {
        .case-studies-item {
          gap: 40px;
        }

        .case-studies-item__head {
          gap: 40px;
          max-width: 840px;
        }

        .case-studies-item__head-info {
          gap: 6px;
        }

        .case-studies-item__icon {
          width: 32px;
          height: 32px;
        }

        .case-studies-item__content {
          flex-direction: row;
          align-items: flex-start;
          gap: 40px;
        }

        .case-studies-item__body {
          width: 400px;
          flex-shrink: 0;
        }

        .case-studies-item__stats {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `}</style>

    <section id="case_studies" className="section">
      <div className="section__container">
        <div className="section__header">
          <p className="section__title section__title--light">CASE STUDIES</p>
        </div>

        <Carousel
          modules={[Pagination]}
          className="common-carousel-swiper w-full"
          pagination={{ clickable: true }}
          loop
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="case-studies-item">
                <div className="case-studies-item__head">
                  <div className="case-studies-item__head-info">
                    <Image
                      width={32}
                      height={32}
                      className="case-studies-item__icon"
                      src="/atlas.svg"
                      alt="atlas"
                    />
                    <p className="c-font c-font--h2">{slide.address}</p>
                    <p className="c-font-body c-font-body--sm-w600-wide c-font--uppercase">
                      {slide.suburb}
                    </p>
                  </div>

                  <div className="case-studies-item__amenities c-font-body c-font-body--sm-w600-wide">
                    {amenitiesFor(slide).map(({ value, label }) => (
                      <div key={label} className="case-studies-item__amenity">
                        <span>{value}</span>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="case-studies-item__content">
                  <div className="case-studies-item__image-wrap">
                    <Image fill src={slide.image} alt={slide.address} />
                  </div>
                  <div className="case-studies-item__body">
                    <div className="case-studies-item__tag-row">
                      <span className="c-btn c-btn--secondary-solid c-btn--lg">
                        {slide.tag}
                      </span>
                      <p className="case-studies-item__price c-font-body c-font-body--sm-w600-wide">
                        ${formatPrice(slide.price)}
                      </p>
                    </div>
                    <p className="case-studies-item__description c-font-body c-font-body--md-w400-normal">
                      {slide.description}
                    </p>
                    <div className="case-studies-item__stats">
                      {slide.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="case-studies-item__stat"
                        >
                          <p className="c-font-body c-font-body--xs-w600-wide c-font--uppercase">
                            {stat.label}
                          </p>
                          <p
                            className="c-font--h3 c-font-body"
                            style={{ letterSpacing: "var(--font-spacing)" }}
                          >
                            {stat.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </section>
  </>
);

export default CaseStudies;
