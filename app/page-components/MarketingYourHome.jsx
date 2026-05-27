import React from "react";
import { cn } from "../utils/cn";

const packages = [
  {
    id: "diamond",
    label: "DIAMOND PACKAGE",
    title:
      "MC - Diamond Package - Full Campaign (Auction + Fen Shui) | Option 1",
    total: "$39,736.80",
    categories: [
      {
        label: "CREATIVE SERVICES",
        items: [
          {
            name: "Premium Photography Package Day & Dusk, Retouching",
            price: "$1,320.00",
          },
          {
            name: "Drone photography & retouching up to 3 images",
            price: "$220.00",
          },
          {
            name: "HD Video / Prestige Property Video up to 3 hrs/ 1x Social Edit / Professional Presenter or Voiceover",
            price: "$3,180.00",
          },
          { name: "Floorplan 5-6 Bedrooms", price: "$270.00" },
          { name: "Site Plan", price: "$40.00" },
          { name: "Professional Copywriting Onsite", price: "$280.00" },
        ],
      },
      {
        label: "MISCELLANEOUS",
        items: [
          { name: "Feng Shui Assessment", price: "$3,300.00" },
          { name: "Building & Pest Inspection - 6 bedroom", price: "$585.00" },
          { name: "REA Audience Maximiser", price: "$399.00" },
          { name: "Auctioneer Fee - Peter Kakos", price: "$880.00" },
          {
            name: "Mailcard Delivery - DL, A6 & A5 (Houses Only) per thousand, 1000qty",
            price: "$185.90",
          },
          {
            name: "Mailcard Delivery - DL, A6 & A5 (Houses Only) per thousand, 1000qty",
            price: "$185.90",
          },
          {
            name: "Campaign Management- Campaign Digital, Compliance and Administration",
            price: "$995.00",
          },
        ],
      },
      {
        label: "DIGITAL",
        items: [
          { name: "Domain Platinum Edge", price: "$2,706.00" },
          { name: "Realestate.com.au", price: "$3,489.00" },
          { name: "Atlas.com.au", price: null },
          { name: "WeChat Premium Listing", price: "$1,320.00" },
          {
            name: "Plezzel Digital Campaign 21 Days (Facebook, Instagram, Google)",
            price: "$748.00",
          },
        ],
      },
      {
        label: "PRINT",
        items: [
          {
            name: "4 x 6 Illuminated (Solar) Signboard with Flag Holder",
            price: "$581.00",
          },
          {
            name: "150 x A4 4 Page Portrait (Long Edge)/300gsm Sovereign Silk Laminated",
            price: "$345.00",
          },
          { name: "Double Page Spread", price: "$500.00" },
          {
            name: "1000 x DL Flyer (Double Sided)/Ecostar 350gsm",
            price: "$221.00",
          },
          {
            name: "1000 x DL Flyer (Double Sided)/Ecostar 350gsm",
            price: "$221.00",
          },
        ],
      },
      {
        label: "NEWSPAPER ADS",
        items: [
          { name: "Mosman Daily Double Page Spread Ad 2", price: "$2,200.00" },
          { name: "Full Page (Domain Bundle)", price: null },
          { name: "Full Page (Domain Bundle)", price: null },
          { name: "Full Page (Domain Bundle)", price: null },
          { name: "Full Page (Domain Bundle)", price: null },
          { name: "Full Page (Domain Bundle)", price: null },
          { name: "Full Page (Domain Bundle)", price: null },
          { name: "Domain Dream Homes", price: null },
          { name: "Domain Social Boost (facebook)", price: null },
          { name: "SMH/AFR- Full Page Package Price", price: "$11,165.00" },
          { name: "Mosman Daily Double Page Spread Ad 1", price: "$2,200.00" },
          { name: "Mosman Daily Double Page Spread Ad 3", price: "$2,200.00" },
        ],
      },
    ],
  },
  {
    id: "platinum",
    label: "PLATINUM PACKAGE",
    title: "Platinum Package – Stage 2 (Auction) | Option 2",
    total: "$18,115.80",
    categories: [
      {
        label: "DIGITAL",
        items: [
          { name: "Domain Platinum Edge", price: "$2,706.00" },
          { name: "Realestate.com.au", price: "$3,489.00" },
          { name: "Atlas.com.au", price: null },
          { name: "WeChat Premium Listing", price: "$1,320.00" },
          {
            name: "Plezzel Digital Campaign 21 Days (Facebook, Instagram, Google)",
            price: "$748.00",
          },
        ],
      },
      {
        label: "PRINT",
        items: [
          {
            name: "4 x 6 Illuminated (Solar) Signboard with Flag Holder",
            price: "$581.00",
          },
          {
            name: "150 x A4 4 Page Portrait (Long Edge)/300gsm Sovereign Silk Laminated",
            price: "$345.00",
          },
          { name: "Double Page Spread", price: "$500.00" },
        ],
      },
      {
        label: "NEWSPAPER ADS",
        items: [
          { name: "Mosman Daily Ad 1", price: "$2,200.00" },
          { name: "Mosman Daily Ad 2", price: "$2,200.00" },
          { name: "Mosman Daily Ad 3", price: "$2,200.00" },
        ],
      },
      {
        label: "MISCELLANEOUS",
        items: [
          { name: "Mail Delivery - 2,000qty", price: "$371.80" },
          { name: "Auctioneer Fee - Peter Kakos", price: "$880.00" },
          {
            name: "Stage 2 Campaign Management- Campaign Digital, Compliance and Administration",
            price: "$495.00",
          },
        ],
      },
    ],
  },
];

const description =
  "At Atlas, we are expert negotiators, but it's our strategic approach to marketing that will get the right emotionally engaged buyers coming through your door.";

const disclaimer =
  "Disclaimer: Domain.com.au pricing subject to change as it is dependent on the agreed listing price. The Auction booking fee is a nonrefundable fee even if property sells prior to Auction.";

const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 8H13M13 8L8 3M13 8L8 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MarketingYourHome = () => {
  const [activeId, setActiveId] = React.useState("diamond");
  const activePackage = packages.find((p) => p.id === activeId);

  return (
    <>
      <style>{`
        #marketing_your_home {
          background-color: var(--color-base-white);
        }

        .myh-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .myh-top {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--grid-spacer-40);
        }

        .myh-tab-menu {
          width: 100%;
          height: 112px;
          display: flex;
          flex-direction: row;
          gap: var(--spacer-40);
        }

        .myh-description {
          order: -1;
          color: var(--color-primary);
        }

        .myh-tab {
          outline: none;
          cursor: pointer;
          height: fit-content;
          gap: 1rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding-block: var(--btn-md-padding-block);
          padding-inline: var(--btn-md-padding-inline);
          transition: padding-block 300ms ease-in-out;
          border: none;
        }

        .myh-tab--active-diamond {
          padding-block: calc(var(--btn-md-padding-block) + 36px);
          background-color: var(--color-primary);
          color: var(--color-base-white);
        }

        .myh-tab--active-platinum {
          padding-block: calc(var(--btn-md-padding-block) + 36px);
          background: linear-gradient(175.87deg, #8e8e8e 4.92%, #1e1e1e 84.9%);
          color: var(--color-base-white);
        }

        .myh-tab--inactive {
          background: transparent;
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
        }

        .myh-panel {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--element-block-gap);
          padding-block: var(--grid-spacer-40);
          padding-inline: var(--spacer-32);
          color: var(--color-base-white);
        }

        .myh-panel--diamond {
          background-color: var(--color-primary);
        }

        .myh-panel--platinum {
          background: linear-gradient(173.25deg, #1e1e1e 4.92%, #8e8e8e 93.78%);
        }

        .myh-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .myh-group__title {
          width: 100%;
          padding-block: 4px;
        }

        .myh-group__title > p {
          letter-spacing: 3px;
        }

        .myh-group__items {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .myh-item {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: var(--grid-spacer-40);
        }

        .myh-item__name {
          flex: 1;
          min-width: 0;
        }

        .myh-item__price {
          white-space: nowrap;
        }

        .myh-divider {
          width: 100%;
          height: 1px;
          background-color: var(--color-base-white);
          flex-shrink: 0;
        }

        .myh-total {
          width: 100%;
          display: grid;
          align-items: center;
          grid-template-columns: 1fr auto;
          gap: var(--grid-spacer-40);
        }

        .myh-total__label {
          flex: 1;
          min-width: 0;
        }

        .myh-total__amount {
          white-space: nowrap;
        }

        .myh-cta-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--grid-spacer-40);
        }

        .myh-download-btn {
          outline: none;
          cursor: pointer;
          width: fit-content;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding-block: var(--btn-md-padding-block);
          padding-inline: var(--btn-md-padding-inline);
          background-color: var(--color-base-white);
          color: var(--color-primary);
          border: none;
        }

        @media screen and (min-width: 1024px) {
          .myh-top {
            flex-direction: row;
            align-items: flex-start;
          }

          .myh-tab-menu {
            flex: 1;
            min-width: 0;
            width: auto;
          }

          .myh-description {
            order: 0;
            width: 400px;
            flex-shrink: 0;
          }

          .myh-item__price {
            width: 368px;
          }

          .myh-total__amount {
            width: 368px;
          }
        }
      `}</style>

      <section id="marketing_your_home" className="section">
        <div className="section__container">
          <div className="section__header">
            <div className="section__header__group section__header__group--default">
              <p className="section__title">MARKETING YOUR HOME</p>
              <p className="c-font c-font--h2">
                Effective marketing is a crucial component for the successful
                sale of your home
              </p>
            </div>
          </div>

          <div className="myh-content">
            <div className="myh-top">
              <div className="myh-tab-menu">
                {packages.map((pkg) => {
                  const isActive = pkg.id === activeId;
                  return (
                    <button
                      key={pkg.id}
                      className={cn(
                        "myh-tab c-font-body c-font-body--sm-w600-wide c-font--uppercase",
                        isActive
                          ? pkg.id === "diamond"
                            ? "myh-tab--active-diamond"
                            : "myh-tab--active-platinum"
                          : "myh-tab--inactive",
                      )}
                      onClick={() => setActiveId(pkg.id)}
                    >
                      <span>{pkg.label}</span>
                      {!isActive && <ArrowRight />}
                    </button>
                  );
                })}
              </div>
              <p className="myh-description c-font-body c-font-body--md-w400-normal">
                {description}
              </p>
            </div>

            <div
              className={cn(
                "myh-panel",
                activeId === "diamond"
                  ? "myh-panel--diamond"
                  : "myh-panel--platinum",
              )}
            >
              <p className="c-font c-font--h3">{activePackage.title}</p>

              {activePackage.categories.map((cat) => (
                <div key={cat.label} className="myh-group">
                  <div className="myh-group__title">
                    <p className="c-font-body c-font-body--xs-w600-wide c-font--uppercase">
                      {cat.label}
                    </p>
                  </div>

                  <div className="myh-group__items">
                    {cat.items.map((item, i) => (
                      <div key={`${cat.label}-${i}`} className="myh-item">
                        <p className="myh-item__name c-font-body c-font-body--sm-w400-normal">
                          {item.name}
                        </p>
                        <p className="myh-item__price c-font-body c-font-body--sm-w400-normal">
                          {item.price ?? ""}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="myh-divider" />

              <div className="myh-total">
                <div className="myh-total__label">
                  <p className="c-font-body c-font-body--xs-w600-wide c-font--uppercase">
                    CAMPAIGN TOTAL
                  </p>
                </div>
                <p className="myh-total__amount c-font c-font--h3">
                  {activePackage.total}
                </p>
              </div>

              <div className="myh-cta-group">
                <button className="myh-download-btn c-font-body c-font-body--sm-w600-wide c-font--uppercase">
                  DOWNLOAD QUOTE
                </button>
                <p className="c-font-body c-font-body--xs-w400-normal">
                  {disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketingYourHome;
