import React from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import Carousel from "../components/Carousel";
import { cn } from "../utils/cn";

const slides = [
  {
    id: 1,
    title: "FOCUS ON STYLING",
    body: "Styling a home to have broad appeal is well worth doing. Professional styling creates a 'wow' moment the minute a buyer walks in and makes a home feel spacious and welcoming. A stylist's touch is also valuable in controlling the buyer experience, helping them appreciate the home's full potential. Many of our agents have built strong relationships with professional stylists who specialise in delivering the biggest impact for a real estate campaign.",
    image:
      "https://s3-alpha-sig.figma.com/img/018c/a642/359457f8281db455e328e8b00a059090?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VLKjBNI-tfmQjPXoilkE-FcMWX02b3Xp0vWqSgYmvwgLzgsSqkYP2Z6mee0zDPZ9gEVpNgOyvjSmKva6V0PcEeusdgF6LyaVB1bWR-0NCENLCLSYyLP-QcPOIejM-X9vA4DnTb~MzYHWD448C300FJHZfsOC7Hedi92vuVJmFWFoiNSmwrSjTHIAwKQW8T4zJb2xI9Bg6eHdRM6p9j0ia2FqIpUaVq~9RqYBE4qzPpX6ex3Y-yjHugpFB2duT~6JWUul97G0F~Gr6fZ3RlREbwWhwziyqAdFuilOSiYa5s8JSAB3aLVVyMSILYh8TSK4rRPPvs--DeeV6T2ygRVdCA__",
  },
  {
    id: 2,
    title: "MAKING A GREAT FIRST IMPRESSION",
    body: "Stand well back from your house and take a good look — if the garden needs a tidy up, the trim needs repainting, or the front gate has seen better days; now is the time to get those jobs done. Weeds and peeling paint are an instant turn-off. Aim for a home that looks well-maintained and easy to care for.",
    image:
      "https://s3-alpha-sig.figma.com/img/0044/e277/4bf04d6c2f1bed98d80e58b2f4623b76?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hTQdc022XQ8kaHFcb4jxbdXEe44gG1H2KdL3orPk1O3PRivSWMyev4TIVojCzeCfy0PaCVMv7fhlPsf4MVe898AvItB703cMxzJ7HryoWMP2hJHKw8xQ4~OUrhWMZkQtUkJwfUAMiNFwOCRknU13vEjCquVE1DVc2VEZXazeNc-kpXVwDNcrZRwlGX0XvQy3JF14PiJZu7hmHMxVwzi-wpDb5gilUnvVa~ACr3C-sEoXww-dG~oLidxy8CUL5WzQJwtY3heZ1mLJX5yU5mqtYF858m~5VWKrYIjDuU8sG2H72u63uSFaa7Y5fmLYHBtNPuAV0J41FOxWYNGIZhif5g__",
  },
  {
    id: 3,
    title: "KEEP IT SPARKLING CLEAN",
    body: "Buyers instantly pick up on cooking and pet smells, dusty shelves and bathrooms that are less than fresh when they visit a property so do whatever it takes to clean your house thoroughly inside and out. Cobwebs can accumulate without you noticing so be sure to keep an eye out for these too.",
    image:
      "https://s3-alpha-sig.figma.com/img/118c/548d/12a7648ae4b0bd162cd9b0754a4300ca?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bpomQHVIrDLYVM3kpGnsEqnx0jHYToZxBwYEs8EEAOtz4RItJx9dlCiSVXWoS-1WVmV3Z--qQ2QGviWbOnWd2T4eqb0nMjM7t0lkwi4tz2fFoV8187RVeCiG2mmzPE9nADf-x0ctAuTcOmmKLTT5DLWrib1AJNBHtdj4M94NtTPgpn7zVv-y1OSS0uPpf6QQzMjFvUydNvCwLd9H3eb2Nl8aDgVEp0HsmgC69RQM7mxEqv1dzoSvP93RPBCTLwW~Fx9wAev9n4o~QnW7yf0L0h6OeiVxwDCMjKH5QB~LVyN1NjadVtS2WeHOoervCiXei63AgZzCnoFLuB8j3vLHeQ__",
  },
  {
    id: 4,
    title: "LET BUYERS IMAGINE",
    body: "Personal items and family photographs give would-be buyers a good sense of who lives in the house, but it makes it harder for them to see themselves in the space. It's best to remove children's artwork from the fridge, pack away personal bathroom items and store framed photos in drawers. Clear away any clutter. Unless it beautifies or serves a functional purpose, remove it. Your aim is to show off the space, so avoid too much furniture in a room or things that distract rather than enhance. On the flipside, don't clear away so much clutter that a room looks empty. And don't forget about verandahs, garages and sheds.",
    image:
      "https://s3-alpha-sig.figma.com/img/374b/6afd/4f80dd25ba2341ed5ab9e6b9af4f2601?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LJBM-h1C59Tcee9OiLIAXG4~GEiUy~2j8O4QkWi8USS~FYyA0GhW3-rXL6~2jANenNcyQcTLXobEMrFqRbc4C1dHLTfW3ZvsBOEtnmNh6n8dHlOMuNNxoZ4wKPUNvjry8KY~ygiGorLV5FYZW4d1EFTkVQlWJlvF8iJp2qcurb4cD6ViK-ypOU05iIn85AJQ0Um91HSZLcf0TeqZlPBxvDwJOSZKj7PVXCnO6Yne5qvYfUherGH3~T-01fTLSPxSNesQsSFmlvnmhdsB6ZbxtV54TZ3jAr6b01In2IlIveaeXG6VCB5bwEmqeey3wfVaUNY2PteW~nrSLFrVPJMkZw__",
  },
];

const GetYourHomeReady = () => {
  const swiperRef = React.useRef(null);
  const [isEnd, setIsEnd] = React.useState(false);
  const [isBeginning, setIsBeginning] = React.useState(true);

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
        #get_your_home_ready .swiper.common-carousel-swiper .swiper-pagination-bullet {
          background-color: var(--color-primary);
        }

        #get_your_home_ready .section__header__group {
          max-width: 600px;
        }

        .gyhr-card {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: var(--grid-spacer-80);
          color: var(--color-primary);
        }

        .gyhr-card__image-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          aspect-ratio: 3 / 2;
          background-color: var(--bg-image-placeholder);
        }

        .gyhr-card__body {
          display: flex;
          flex-direction: column;
          gap: var(--spacer-20);
        }

        @media screen and (min-width: 1024px) {
          .gyhr-card {
            grid-template-columns: repeat(2, 1fr);
          }

          .gyhr-card__body {
            padding: var(--spacer-20) var(--spacer-40) var(--spacer-20) 0;
          }
        }
      `}</style>

      <section id="get_your_home_ready" className="section">
        <div className="section__container">
          <div className="section__header">
            <div className="section__header__group section__header__group--default">
              <p className="section__title section__title--light">
                GET YOUR HOME READY
              </p>
              <p className="c-font c-font--h2">
                Our recommendations will assist in a seamless and successful
                sale
              </p>
            </div>
          </div>

          <Carousel
            loop={false}
            navigation={false}
            centeredSlides={false}
            slidesPerView={1}
            className="common-carousel-swiper swiper-gyhr-navigation w-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="gyhr-card">
                  <div className="gyhr-card__image-wrap">
                    <Image
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      src={slide.image}
                      alt={slide.title}
                    />
                  </div>
                  <div className="gyhr-card__body">
                    <p className="c-font-body c-font-body--sm-w600-wide c-font--uppercase">
                      {slide.title}
                    </p>
                    <p className="c-font-body c-font-body--md-w400-normal">
                      {slide.body}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {navButtons}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default GetYourHomeReady;
