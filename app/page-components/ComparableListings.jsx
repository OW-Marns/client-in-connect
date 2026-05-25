import React from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import Carousel from "../components/Carousel";
import { cn } from "../utils/cn";
import { formatPrice } from "../utils/formatPrice";

const COMPARABLE_IMAGE =
  "https://s3-alpha-sig.figma.com/img/a1d7/efcf/cc07e909f053eb4791b150795d70fee1?Expires=1780272000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MXIRwmd7himcoYb~tjd~OEfUywRNiik7EI9P~gCUqvhzHMqDtKSSMoNRBu2mYohTz4mwQnEGAnISbpCoKH3ReTrYoTJqvxOPbbyuB3~TTl6RA0VYkEQ2QSCx37CCzGwXnzuvUWbVm78JLP8ROd1tMtvHtsFWkzE5vO0WPI7zq8qlPwW8uMoYCv4FfDAqcptWzZtjIx-g-T2wHbjiNS0WLeGQ47U1HNDzy2tPqszhbckWv2nHbiiX4rzNzYpHifuS~HsLjtOZOZrAkQj3olqilPaNlPC4F90Fpin~ieegN~lJQIVCuWfqaLAoEmasEDlZ68N5YmgShDPbzHv5L4HRfg__";

const recent_sales_data = [
  {
    id: 1,
    tag: "SOLD",
    address: "268 Old Bruce Highway",
    suburb: "Wollstonecraft",
    complete_address: "268 Old Bruce Highway, Wollstonecraft",
    image: COMPARABLE_IMAGE,
    bedrooms: 5,
    bathrooms: 3,
    carSpaces: 4,
    pools: 1,
    price: 12500000,
    sale_date: "22/03/2026",
    land_sqm: 1607,
    inside_sqm: 543,
    description:
      "Evera corro in tinis quo testium dolor aut et velibus res, adis aut fugiam exerspero eventur. Sita imos dis vene sum nistibus ossini aura deo molor. Periant sandis am quis a nisquo doluptio mol en vel maio que repro is consed quam. Sita to imos mut posa nistibus venduntis accusibus abor doloret son corio horan valoris.",
  },
  {
    id: 2,
    tag: "SOLD",
    address: "268 Old Bruce Highway",
    suburb: "Wollstonecraft",
    complete_address: "268 Old Bruce Highway, Wollstonecraft",
    image: COMPARABLE_IMAGE,
    bedrooms: 5,
    bathrooms: 3,
    carSpaces: 4,
    pools: 1,
    price: 12500000,
    sale_date: "22/03/2026",
    land_sqm: 1607,
    inside_sqm: 543,
    description:
      "Evera corro in tinis quo testium dolor aut et velibus res, adis aut fugiam exerspero eventur. Sita imos dis vene sum nistibus ossini aura deo molor. Periant sandis am quis a nisquo doluptio mol en vel maio que repro is consed quam. Sita to imos mut posa nistibus venduntis accusibus abor doloret son corio horan valoris.",
  },
  {
    id: 3,
    tag: "SOLD",
    address: "268 Old Bruce Highway",
    suburb: "Wollstonecraft",
    complete_address: "268 Old Bruce Highway, Wollstonecraft",
    image: COMPARABLE_IMAGE,
    bedrooms: 5,
    bathrooms: 3,
    carSpaces: 4,
    pools: 1,
    price: 12500000,
    sale_date: "22/03/2026",
    land_sqm: 1607,
    inside_sqm: 543,
    description:
      "Evera corro in tinis quo testium dolor aut et velibus res, adis aut fugiam exerspero eventur. Sita imos dis vene sum nistibus ossini aura deo molor. Periant sandis am quis a nisquo doluptio mol en vel maio que repro is consed quam. Sita to imos mut posa nistibus venduntis accusibus abor doloret son corio horan valoris.",
  },
  {
    id: 4,
    tag: "FOR SALE",
    address: "14 Harbourview Terrace",
    suburb: "Mosman",
    complete_address: "14 Harbourview Terrace, Mosman",
    image: COMPARABLE_IMAGE,
    bedrooms: 4,
    bathrooms: 2,
    carSpaces: 2,
    pools: 0,
    price: 8200000,
    sale_date: null,
    land_sqm: 980,
    inside_sqm: 390,
    description:
      "Stunning harbour-view residence offering seamless indoor-outdoor living with north-facing aspect, entertainer's terrace and premium finishes throughout.",
  },
  {
    id: 5,
    tag: "AUCTION",
    address: "52 Balfour Street",
    suburb: "Neutral Bay",
    complete_address: "52 Balfour Street, Neutral Bay",
    image: COMPARABLE_IMAGE,
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 1,
    pools: 0,
    price: 3100000,
    sale_date: "14/06/2026",
    land_sqm: 412,
    inside_sqm: 210,
    description:
      "Charming Californian bungalow in tightly held street. High ceilings, original leadlight windows and a private rear courtyard ideal for entertaining.",
  },
  {
    id: 6,
    tag: "SOLD",
    address: "7 Cranbrook Avenue",
    suburb: "Bellevue Hill",
    complete_address: "7 Cranbrook Avenue, Bellevue Hill",
    image: COMPARABLE_IMAGE,
    bedrooms: 6,
    bathrooms: 4,
    carSpaces: 3,
    pools: 1,
    price: 18750000,
    sale_date: "10/04/2026",
    land_sqm: 2210,
    inside_sqm: 720,
    description:
      "Grand double-brick family residence set behind private gates. Features wine cellar, home theatre, tennis court and sweeping district views from every level.",
  },
];

const new_to_market_data = [
  {
    id: 1,
    tag: "AUCTION",
    title: "Luxurious Hidden Resort Oasis",
    complete_address: "25 Spring Cove Avenue, Wollstonecraft",
    address: "25 Spring Cove Avenue",
    suburb: "Wollstonecraft",
    image: COMPARABLE_IMAGE,
    bedrooms: 5,
    bathrooms: 3,
    carSpaces: 4,
    pools: 1,
    price: 12500000,
    auctionDetails: "On site, Saturday 28 November at 10:30am",
    inspections: "Inspections are on Wednesdays and Saturdays at 10:00am",
  },
  {
    id: 2,
    tag: "FOR SALE",
    title: "Modern Coastal Retreat",
    complete_address: "8 Harbourview Terrace, Mosman",
    address: "8 Harbourview Terrace",
    suburb: "Mosman",
    image: COMPARABLE_IMAGE,
    bedrooms: 4,
    bathrooms: 2,
    carSpaces: 2,
    pools: 1,
    price: 7850000,
    auctionDetails: "On site, Sunday 5 December at 11:00am",
    inspections: "Inspections are on Tuesdays and Saturdays at 11:00am",
  },
  {
    id: 3,
    tag: "AUCTION",
    title: "Grand Victorian Masterpiece",
    complete_address: "142 Hopetoun Avenue, Paddington",
    address: "142 Hopetoun Avenue",
    suburb: "Paddington",
    image: COMPARABLE_IMAGE,
    bedrooms: 6,
    bathrooms: 4,
    carSpaces: 3,
    pools: 0,
    price: 9200000,
    auctionDetails: "On site, Saturday 11 December at 9:30am",
    inspections: "Inspections are on Wednesdays and Sundays at 12:00pm",
  },
  {
    id: 4,
    tag: "FOR SALE",
    title: "Sleek Architect-Designed Sanctuary",
    complete_address: "3 Fernleigh Close, Killara",
    address: "3 Fernleigh Close",
    suburb: "Killara",
    image: COMPARABLE_IMAGE,
    bedrooms: 5,
    bathrooms: 3,
    carSpaces: 2,
    pools: 1,
    price: 6400000,
    auctionDetails: "Private treaty — contact agent",
    inspections: "Inspections are on Thursdays and Saturdays at 1:00pm",
  },
  {
    id: 5,
    tag: "AUCTION",
    title: "Beachfront Trophy Home",
    complete_address: "77 Marine Parade, Manly",
    address: "77 Marine Parade",
    suburb: "Manly",
    image: COMPARABLE_IMAGE,
    bedrooms: 7,
    bathrooms: 5,
    carSpaces: 4,
    pools: 2,
    price: 18750000,
    auctionDetails: "On site, Saturday 18 December at 10:00am",
    inspections: "Inspections are on Mondays and Saturdays at 10:30am",
  },
  {
    id: 6,
    tag: "FOR SALE",
    title: "Charming Garden Cottage Estate",
    complete_address: "56 Roseberry Street, Turramurra",
    address: "56 Roseberry Street",
    suburb: "Turramurra",
    image: COMPARABLE_IMAGE,
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 1,
    pools: 0,
    price: 3100000,
    auctionDetails: "Private treaty — contact agent",
    inspections: "Inspections are on Fridays and Sundays at 2:00pm",
  },
];

const amenitiesFor = (slide) => [
  { value: slide.bedrooms, label: "BED" },
  { value: slide.bathrooms, label: "BATH" },
  { value: slide.carSpaces, label: "CAR" },
  { value: slide.pools, label: "POOL" },
];

const ComparableListingsDesktop = (_props) => {
  const swiperRef = React.useRef(null);
  const [isEnd, setIsEnd] = React.useState(false);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [activeView, setActiveView] = React.useState("recent_sales");

  const sharedCarouselProps = {
    loop: false,
    navigation: false,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 32 },
      1024: { slidesPerView: 3, spaceBetween: 40 },
    },
    onSwiper: (swiper) => {
      swiperRef.current = swiper;
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    },
    onSlideChange: (swiper) => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    },
  };

  const navButtons = (
    <>
      <button
        className={cn(
          "swiper-button-prev",
          isBeginning ? "opacity-30" : "opacity-100",
        )}
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
      >
        ⯇
      </button>
      <button
        className={cn(
          "swiper-button-next",
          isEnd ? "opacity-30" : "opacity-100",
        )}
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
      >
        ⯈
      </button>
    </>
  );

  return (
    <>
      <style>{`
        #comparable_listings {
          background-color: var(--color-accent);
        }

        #comparable_listings .swiper.common-carousel-swiper .swiper-pagination-bullet {
          background-color: var(--color-primary);
        }

        .comparable-item {
          width: 100%;
          height: 100%;
          background-color: var(--color-base-white);
          color: var(--color-primary);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .comparable-item__head .c-font--h4 {
          padding-top: 4px;
        }

        .comparable-item__tag__wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          padding-inline: var(--spacer-32);
        }

        .comparable-item__tag__box {
          height: 40px;
          background-color: var(--color-secondary);
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-end;
          padding: 8px 24px;
        }

        .comparable-item__head {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          padding-inline: var(--spacer-32);
        }

        .swiper-comlisting-navigation--new-to-market .comparable-item__head {
          padding-bottom: 14px;
        }

        .comparable-item__head__icon {
          width: 18px;
          height: 18px;
        }

        .comparable-item__amenities {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
          padding: 14px var(--spacer-32);
        }

        .case-studies-item__amenity {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 6px;
        }

        .comparable-item__image {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          background-color: rgba(0,0,0,0.05);
        }

        .comparable-item__detail {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 8px;
          padding: 14px var(--spacer-32);
        }

        .swiper-comlisting-navigation--new-to-market .comparable-item__detail {
          align-items: flex-end;
        }

        .comparable-item__detail__column-1 {
          width: 150px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        .swiper-comlisting-navigation--new-to-market .comparable-item__detail__column-1 {
          flex: 1;
          gap: 24px;
          width: 100%;
        }

        .comparable-item__detail__column-2 {
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
        }

        .swiper-comlisting-navigation--new-to-market .comparable-item__detail__column-2 {
          flex: none;
          align-items: flex-end;
        }

        .comparable-item__detail__item {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          padding: 2px 0;
        }

        .comparable-item__detail__group {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .comparable-item__detail__desc {
          flex: 1;
          white-space: pre-line;
        }

        /* ==================== TABLET ==================== */
        @media screen and (min-width: 640px) {
          .swiper-comlisting-navigation--new-to-market .comparable-item__head {
            padding-bottom: 16px;
          }

          .comparable-item__head__icon {
            width: 20px;
            height: 20px;
          }

          .comparable-item__amenities {
            gap: 24px;
            padding-block: 16px;
          }

          .comparable-item__detail {
            padding-block: 16px;
          }
        }

        /* ==================== DESKTOP ==================== */
        @media screen and (min-width: 1024px) {
          .swiper-comlisting-navigation--new-to-market .comparable-item__head {
            padding-bottom: 20px;
          }

          .comparable-item__head__icon {
            width: 24px;
            height: 24px;
          }

          .comparable-item__amenities {
            gap: 32px;
            padding-block: 20px;
          }

          .comparable-item__detail {
            padding-block: 20px;
          }
        }
      `}</style>

      <section id="comparable_listings" className="section">
        <div className="section__container">
          <div className="section__header">
            <div className="section__header__group section__header__group--default">
              <p className="section__title section__title--light">
                COMPARABLE LISTINGS
              </p>
            </div>

            <button
              className="c-btn c-btn--primary-solid c-btn--md"
              onClick={() =>
                setActiveView((v) =>
                  v === "recent_sales" ? "new_to_market" : "recent_sales",
                )
              }
            >
              {activeView === "recent_sales" ? "NEW TO MARKET" : "RECENT SALES"}
            </button>
          </div>

          {activeView === "recent_sales" ? (
            <Carousel
              className="common-carousel-swiper swiper-comlisting-navigation w-full"
              {...sharedCarouselProps}
            >
              {recent_sales_data.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="comparable-item">
                    <div className="comparable-item__tag__wrapper">
                      <div className="comparable-item__tag__box">
                        <p
                          className="c-font-body c-font-body--xs-w600-wide"
                          style={{ color: "var(--color-base-white)" }}
                        >
                          {slide.tag}
                        </p>
                      </div>
                    </div>

                    <div className="comparable-item__head">
                      <Image
                        width={24}
                        height={24}
                        className="comparable-item__head__icon"
                        src="/atlas.svg"
                        alt="atlas"
                      />
                      <p
                        className="c-font c-font--h4"
                        style={{ color: "var(--color-base-black)" }}
                      >
                        {slide.address}
                      </p>
                      <p
                        className="c-font-body c-font-body--xs-w600-wide c-font--uppercase"
                        style={{ color: "var(--color-primary-supporting)" }}
                      >
                        {slide.suburb}
                      </p>
                    </div>

                    <div className="comparable-item__amenities c-font-body c-font-body--xs-w600-wide">
                      {amenitiesFor(slide).map(({ value, label }) => (
                        <div key={label} className="case-studies-item__amenity">
                          <span>{value}</span>
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="comparable-item__image">
                      <Image fill alt="" src={slide.image} />
                    </div>

                    <div className="comparable-item__detail">
                      <div className="comparable-item__detail__column-1">
                        {[
                          { label: "PRICE", value: formatPrice(slide.price) },
                          { label: "SALE DATE", value: slide.sale_date ?? "—" },
                          { label: "LAND", value: `${slide.land_sqm} SQM` },
                          { label: "INSIDE", value: `${slide.inside_sqm} SQM` },
                        ].map(({ label, value }) => (
                          <div
                            key={label}
                            className="comparable-item__detail__item"
                          >
                            <p className="c-font-body c-font-body--xs-w600-wide">
                              {label}
                            </p>
                            <p className="c-font-body c-font-body--xs-w400-wide">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="comparable-item__detail__column-2">
                        <p className="comparable-item__detail__desc c-font-body c-font-body--xs-w400-normal">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {navButtons}
            </Carousel>
          ) : (
            <Carousel
              className="common-carousel-swiper swiper-comlisting-navigation swiper-comlisting-navigation--new-to-market w-full"
              {...sharedCarouselProps}
            >
              {new_to_market_data.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="comparable-item">
                    <div className="comparable-item__tag__wrapper">
                      <div className="comparable-item__tag__box">
                        <p
                          className="c-font-body c-font-body--xs-w600-wide"
                          style={{ color: "var(--color-base-white)" }}
                        >
                          {slide.tag}
                        </p>
                      </div>
                    </div>

                    <div className="comparable-item__head">
                      <Image
                        width={24}
                        height={24}
                        className="comparable-item__head__icon"
                        src="/atlas.svg"
                        alt="atlas"
                      />
                      <p
                        className="c-font c-font--h4"
                        style={{ color: "var(--color-base-black)" }}
                      >
                        {slide.title}
                      </p>
                      <p
                        className="c-font-body c-font-body--xs-w600-wide"
                        style={{ color: "var(--color-primary-supporting)" }}
                      >
                        {slide.address}
                      </p>
                    </div>

                    <div className="comparable-item__image">
                      <Image fill alt="" src={slide.image} />
                    </div>

                    <div className="comparable-item__amenities c-font-body c-font-body--xs-w600-wide">
                      {amenitiesFor(slide).map(({ value, label }) => (
                        <div key={label} className="case-studies-item__amenity">
                          <span>{value}</span>
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="comparable-item__detail">
                      <div className="comparable-item__detail__column-1">
                        <div className="comparable-item__detail__item">
                          <p className="c-font-body c-font-body--xs-w600-wide">
                            Guide
                          </p>
                          <p className="c-font-body c-font-body--xs-w400-wide">
                            {formatPrice(slide.price)}
                          </p>
                        </div>
                        <div className="comparable-item__detail__group">
                          <p className="c-font-body c-font-body--xs-w400-normal">
                            {slide.auctionDetails}
                          </p>
                          <p className="c-font-body c-font-body--xs-w400-normal">
                            {slide.inspections}
                          </p>
                        </div>
                      </div>
                      <div className="comparable-item__detail__column-2">
                        <button className="c-btn c-btn--sm c-btn--primary-solid">
                          VIEW
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {navButtons}
            </Carousel>
          )}
        </div>
      </section>
    </>
  );
};

const ComparableListings = (props) => {
  return <ComparableListingsDesktop {...props} />;
};

export default ComparableListings;
