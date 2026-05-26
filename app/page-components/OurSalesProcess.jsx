import React from "react";
import Image from "next/image";
import { cn } from "../utils/cn";

const steps = [
  {
    id: 1,
    title: "1. APPRAISAL",
    body: [
      "Tour home",
      "Evaluate comparable sales",
      "Analyse local market insights",
      "Discuss buyer sentiment",
    ],
  },
  {
    id: 2,
    title: "2. PROPOSAL",
    body: [
      "Tailored sales strategy",
      "Home preparation plan",
      "Competitively price",
      "Marketing strategy",
    ],
  },
  {
    id: 3,
    title: "3. HOME PREPARATION",
    body: [
      "Styling & staging",
      "Repairs & upgrades",
      "Photography & videography",
      "Floorplan & copywriting",
      "Building & pest inspection",
      "Strata inspection report",
    ],
  },
  {
    id: 4,
    title: "4. PRE-MARKET",
    body: [
      "Styling & staging",
      "Repairs & upgrades",
      "Photography & videography",
      "Floorplan & copywriting",
      "Building & pest inspection",
      "Strata inspection report",
    ],
  },
  {
    id: 5,
    title: "5. LAUNCH LISTING",
    body: [
      "Live on main websites",
      "Social & digital advertising",
      "Signboard & mail cards",
      "Email marketing",
      "Brochures & print media",
    ],
  },
  {
    id: 6,
    title: "6. IN CAMPAIGN",
    body: ["Database alerts", "Buyer agents", "Private inspections"],
  },
  {
    id: 7,
    title: "7. INSIGHTS",
    body: [
      "Website engagements",
      "Buyer feedback",
      "Price assessment",
      "Market activity",
      "Social metrics",
    ],
  },
  { id: 8, title: "8. OFFERS", body: ["Buyer negotiations", "Auction"] },
  {
    id: 9,
    title: "9. EXCHANGE/SETTLE",
    body: ["Deposit held", "Keys collected", "Pre-settlement inspection"],
  },
];

const OurSalesProcess = () => {
  const [activeStep, setActiveStep] = React.useState(null);
  const toggle = (id) => setActiveStep((prev) => (prev === id ? null : id));

  return (
    <>
      <style>{`
        #our_sales_process { background-color: var(--color-accent); }

        .osp-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: var(--grid-spacer-80);
        }

        .osp-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 600 / 755;
          background-color: var(--bg-image-placeholder);
        }

        .osp-accordion {
          width: 100%;
          color: var(--color-primary);
        }

        .osp-accordion__item {
          width: 100%;
        }

        .osp-accordion__trigger {
          outline: none;
          cursor: pointer;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4px;
          padding-block: var(--spacer-20);
          border: none;
          background: none;
          color: inherit;
          text-align: left;
        }

        .osp-accordion__trigger__label {
          flex: 1;
          min-width: 0;
        }

        .osp-accordion__body-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 300ms ease;
        }

        .osp-accordion__body-wrap--open {
          grid-template-rows: 1fr;
        }

        .osp-accordion__body {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 4px;
          list-style: disc;
          padding-inline-start: var(--spacer-20);
          padding-block: 0;
          transition: padding-block 300ms ease-out;
        }

        .osp-accordion__body-wrap--open .osp-accordion__body {
          padding-block: var(--spacer-20);
        }

        @media screen and (min-width: 640px) {
          .osp-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .osp-image-wrap {
            align-self: start;
          }
        }
      `}</style>

      <section id="our_sales_process" className="section">
        <div className="section__container">
          <div className="section__header">
            <div className="section__header__group section__header__group--default">
              <p className="section__title section__title--light">
                OUR SALES PROCESS
              </p>
              <p className="c-font c-font--h2">
                Complete transparency in our process to give you confidence
                through each step
              </p>
            </div>
          </div>

          <div className="osp-grid">
            <div className="osp-image-wrap">
              <Image
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                src="https://s3-alpha-sig.figma.com/img/6490/c170/ab489844a44212a44183ff0279fe1101?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DNExCniS0q9H26EkshH2Odk3WRIt42tUU9gZfDqAi3X16kvX6bz8S7L~PoISI0Ac2wnolwwNJH75Tvfj93dPUXKgA205EAB~zlKlTyARzOhMp9ibiWrdX792Gv5hnDRE9rYcZkbtRjGEY0Bg~JV4yhqdwWe~r2LXC~OY~dmv57WkDMYSAn8uIfLe7HINojLl82XavWJmZ8Bz~upQWTzxKzhM65q5DjTJT4Ke~eglAyO7RY3sX7GuevN8WWNlJnIAGAbynVdzitboN-VzMGxUOZN0DLCvVWPmNl~5wr2sPOxReREKDv6G1C5mxtlZh2nAKWOUkhdozVIbbmrUMkGHPQ__"
                alt="Our sales process"
              />
            </div>

            <div className="osp-accordion">
              {steps.map((step) => {
                const isOpen = activeStep === step.id;

                return (
                  <div key={step.id} className="osp-accordion__item">
                    <button
                      className="osp-accordion__trigger c-font-body c-font-body--sm-w600-wide c-font--uppercase"
                      onClick={() => toggle(step.id)}
                    >
                      <span className="osp-accordion__trigger__label">
                        {step.title}
                      </span>
                      <span>{isOpen ? "−" : "+"}</span>
                    </button>

                    <div
                      className={cn(
                        "osp-accordion__body-wrap",
                        isOpen && "osp-accordion__body-wrap--open",
                      )}
                    >
                      <ul className="osp-accordion__body c-font-body c-font-body--sm-w400-normal">
                        {step.body.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurSalesProcess;
