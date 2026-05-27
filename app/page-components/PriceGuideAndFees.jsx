import React from "react";
import Image from "next/image";
import { cn } from "../utils/cn";

const cards = [
  {
    id: 1,
    title: "RECOMMENDED PRICE GUIDE",
    image:
      "https://s3-alpha-sig.figma.com/img/124e/838c/64a0ab16b41b9bdaa01954a1886771ce?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lhcbueeka2GNwCUokA6OslbIfKeGtOET1B0dZnCNd9BNudjp441KyWTSKRx80Pyb44Zwo-9YDLBMJaasswAYEgNJfn8QyD1NTQEtR40EGEBhnL29kGvu~IuqPU33f6mT7Tq8cTtG7Nyo9w2awcI3RW6E1tyTyyGXnOAXSwMvIdaz9lF4ItmJI9~dRyA4WBZq1D8oPas6nlPG48bsc9gshQCfcSrnGDRuHat7EC7YNc4p4dH00eXfyUNlWg-9CFjVgBp3cw6GkH6AEXFK-sP572AzYxc9SJ3xc6sub6Ouf41onIXqeXbCicHTBNO8Ejsev-RElgONP6wYgH2acCGpvg__",
    value: "$12,500,000",
    body: "We don't leave anything to chance and guesswork is not part of our pricing equation. We have taken into consideration current market conditions including competing properties, buyer activity, recent sales and the current economic climate.",
  },
  {
    id: 2,
    title: "FEE OF SERVICE",
    image:
      "https://s3-alpha-sig.figma.com/img/99a6/ae9c/72bdee6803c18bb28f15e9920766f199?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VF4angr4dFdnC40xjW~dOwowGognRuYybuWibcPkXNrhsSmTRBUe-TEqdbcj~aYFP785gi5WRyXlisDLVT5Lz~YZOjfpFdhb9~lSiiIe6j7rzZ69EvpMLmFva09JCyY1tXkWPwKvVV3rvpJKcSJjQObsIN~OoFnHdz-fkumCOTtjyvJ0pfmv4fK5qVq36Qvit68wupADJJvyaNtzdtx6dB1ijTgbRCR1AvQpx1WSWN1kb76B--bLzpfqBz-8IZExB32gkb1CPq8-ih-LUePBq996dOdaf07e8HUyYESJ~bNxX3xNtsmT9cfc961Oyku98zDdvcjLcD5oq~6N2AVRQA__",
    value: "2.25% incl. GST",
    body: "Our competitive rates are calculated around the time and work that will be put into preparing, marketing, negotiating and closing the successful sale of your property.",
  },
];

const PriceGuideAndFees = () => {
  const [openCards, setOpenCards] = React.useState(new Set());
  const toggle = (id) =>
    setOpenCards((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <>
      <style>{`
        #price_guide_and_fees {
          background-color: var(--color-accent);
        }

        .pgaf-cards {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--grid-spacer-40);
        }

        .pgaf-card {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .pgaf-card__image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 640 / 440;
          background-color: var(--bg-image-placeholder);
        }

        .pgaf-card__panel {
          width: 100%;
          display: flex;
          flex-direction: column;
          color: var(--color-base-white);
          background-color: var(--color-secondary);
        }

        .pgaf-card__panel__header {
          outline: none;
          cursor: pointer;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
          border: none;
          color: inherit;
          background: none;
          text-align: left;
          padding-block: var(--grid-spacer-40);
          padding-inline: var(--spacer-40);
        }

        .pgaf-card__panel__label {
          flex: 1;
          min-width: 0;
        }

        .pgaf-card__panel__header span {
          line-height: 1;
        }

        .pgaf-card__panel__body-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 300ms ease;
        }

        .pgaf-card__panel__body-wrap--open {
          grid-template-rows: 1fr;
        }

        .pgaf-card__panel__body {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-block: 0;
          padding-inline: var(--spacer-40);
          transition: padding-block 300ms ease-out;
        }

        .pgaf-card__panel__body-wrap--open .pgaf-card__panel__body {
          padding-block: var(--grid-spacer-40);
        }

        .pgaf-quote-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pgaf-quote {
          flex: 1;
          min-width: 0;
          text-align: center;
          color: var(--color-base-black);
        }

        .pgaf-bottom-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
        }

        @media screen and (min-width: 1024px) {
          .pgaf-card {
            height: 440px;
            flex-direction: row;
          }

          .pgaf-card__image-wrap {
            flex: 1;
            min-width: 0;
            height: 100%;
            aspect-ratio: unset;
          }

          .pgaf-card__panel {
            flex: 1;
            min-width: 0;
            justify-content: space-between;
          }

          .pgaf-card__panel__body-wrap {
            display: block;
            opacity: 0;
            transition: opacity 300ms ease;
          }

          .pgaf-card__panel__body-wrap--open {
            opacity: 1;
          }

          .pgaf-card__panel__body {
            overflow: visible;
            height: auto;
          }

        }
      `}</style>

      <section id="price_guide_and_fees" className="section">
        <div className="section__container">
          <div className="section__header">
            <div className="section__header__group section__header__group--default">
              <p className="section__title section__title--light">
                PRICE GUIDE AND FEES
              </p>
              <p className="c-font c-font--h2">
                Your property campaign estimated fee of service
              </p>
            </div>
          </div>

          <div className="pgaf-cards">
            {cards.map((card) => {
              const isOpen = openCards.has(card.id);

              return (
                <div key={card.id} className="pgaf-card">
                  <div className="pgaf-card__image-wrap">
                    <Image
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      src={card.image}
                      alt={card.title}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="pgaf-card__panel">
                    <button
                      className="pgaf-card__panel__header"
                      onClick={() => toggle(card.id)}
                    >
                      <span className="pgaf-card__panel__label c-font-body c-font-body--sm-w600-wide c-font--uppercase">
                        {card.title}
                      </span>
                      <span>{isOpen ? "-" : "+"}</span>
                    </button>
                    <div
                      className={cn(
                        "pgaf-card__panel__body-wrap",
                        isOpen && "pgaf-card__panel__body-wrap--open",
                      )}
                    >
                      <div className="pgaf-card__panel__body">
                        <p className="c-font-body c-font--h3">{card.value}</p>
                        <p className="c-font-body c-font-body--md-w400-normal">
                          {card.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pgaf-quote-wrap">
            <p className="pgaf-quote c-font c-font--h1">
              Where lifestyle and luxury meets the right agents
            </p>
          </div>
        </div>
      </section>

      <div className="pgaf-bottom-image-wrap">
        <Image
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          src="https://s3-alpha-sig.figma.com/img/26b1/e12f/043c050be87a7c57364502fc039058c0?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hyeltRxDtccPmoeAAIGDwZRgMvQ6Ecy2XAc1pj4g4zDTcgBFigfr4D8l6kP0pwJAy9aXT85M6eN9g6bXBUP9HmnooCnWAHMUqVg0qrS5s7eDoxiiKSl2T1i9qFOcg1Ggm5ZW18J76TCKE7uVTQg5J3H3AUYbzX2DRRWYDqjEMy2WZ7dZ4X1mr-H7uqGko~CGAzWlKP9JBDRKngK6Wv1-IR4xlBTJMe7P2jXL6X49kwq2gUH5~vxqPPTQBIBb9BEnCrBZIy3IRxK44CnA9cbZgQyJuvuc3UdVjcZUmaa-NPawrnn7xmfLWyWkuRaIQ38yVHhuVbXD4bJoxIxP5O~VAw__"
          alt="Price guide and fees"
        />
      </div>
    </>
  );
};

export default PriceGuideAndFees;
