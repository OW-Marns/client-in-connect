import { useState } from "react";
import Image from "next/image";

const HERO_BG =
  "https://s3-alpha-sig.figma.com/img/9ae4/177b/851c1470345c4a713162a24a495d17e3?Expires=1780272000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KB~iZL8CUrpHqQfvixEZoglHrd-nfTsCTniCcsmUjih3sZ2Vq-klOYDmRrUUten1dJCEkfByFK3ihrDxmbGep2FChUNZW~-ZjlB10JYrmloBwVcn91jqThB81jGn9x6lmMV-c0wtYFJAaD~Roof15oXkjNTlokRHausn1t3eGwPf13eUvvXL~43C7WiftIJ1sk2peTPwS~CB3W~mrmMcp2ZIC-g7xKWMmlMnOEm~ti9sno4lDYyidq~NZ~4poDZu7uhYj1wsBemt6MKremM~ndNrwSnaC~LGhCAwSSWCxxFI0X0RdcQ4X~~X-SCgZBLnjf7dhhz00zqM79onFJWlEQ__";

const leadAgents = [
  {
    id: "michael-coombs",
    name: "Michael Coombs",
    role: "Director and Sales Agent | Lower North Shore and Byron Bay",
    phone: "0400 000 000",
    email: "michael.coombs@atlas.com.au",
    bio: "Michael Coombs is known for his diverse network, spanning local, national, and global markets, including strong connections with ex-pat and Australian-Chinese buyers. Michael's real estate knowledge and expertise are indisputable. His success is largely measured by extraordinary results for premium properties setting suburb and street records, though he still works with clients at every stage of their property journey and at all different price points.\n\nMichael has consistently achieved outstanding results across the Lower North Shore for over 20 years and is ranked among Australia's top-performing sales agents. He is also a firm believer in utilising the latest available technology to support sales and marketing, as a means of ensuring the best possible outcome for his clients.\n\nNot one to remain in the background, Michael is widely regarded as an “entrepreneurial agent”, having developed continuing close affiliations with many respected charities, schools, and other organisations that allow him to give back to the community.",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/5f26/b485/ad654b0fca7e187225c8a6f87ee5f004?Expires=1780272000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FueENGuyXf9J1OoNM3~6aAf0~ENWNYT0rsttKDE8WCuLWasmNs6b8f6C2f3IbLBUaeboBut2l1Th8QaC9bRNWHO2F9vHjtkjDRYBF-x3~RKZC1~62bwrz7TYmgwo~~~ijXwy-flbwJwPl~sGavjAxwl8bOnCZcdJL8Tz5vcerXjd6g6mWw19wF8~0C1VqIMD-C-JAGbJ~PS4JU3B0DO73nqMGr5Dvm4t-8v-ZWT1XzXRsTnCi5I5x~3wlbhCg-TSbs8Ob65B8EIxHH5RudWpVoKy~2JfPMku821NmJx3Hu6G7WHRqxn1ijBC9olPBdq-MV8ciK3CH-Q02VBQuKHokg__",
    imageAlt: "Michael Coombs",
  },
  {
    id: "sarah-burke",
    name: "Sarah Burke",
    role: "Director and Licensee in Charge | Southern Highlands",
    phone: "0400 000 000",
    email: "sarah.burke@atlas.com.au",
    bio: "With a reputation for professionalism, service-focused dedication, and a relentless commitment to her clients, Sarah has earned a loyal following. Since launching her real estate career in the Southern Highlands, Sarah has helped over 550 clients successfully achieve their property goals. Her approachable nature and clear communication style ensure the selling process is seamless and rewarding.\n\nAs a respected figure in the Southern Highlands community, Sarah is passionate about delivering outstanding results while making every step of the journey a positive experience. Growing up in the world of real estate, Sarah's experience in both the Sydney and Southern Highlands markets provides her with a unique edge that clients trust and value.\n\nSpecialising in the marketing and sale of residential, rural, and premium estates, Sarah brings a strategic vision to presenting properties in their best light. Her strong negotiation skills, coupled with a results-driven approach, ensure she consistently achieves exceptional outcomes for her clients. Recognised for her exceptional performance, Sarah was awarded Rookie of the Year in 2017 in her first year in sales by Belle Property Australasia. Since then, she has earned numerous accolades, including being ranked 24th in The Daily Telegraph’s Top 50 Women in Real Estate (NSW), named in the REB Top 50 Women in Real Estate, and recognised as the number one agent in Bowral (REA).",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/106a/99eb/a15cb32409bbc7d1ae9b4b1b29ff7df1?Expires=1780272000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bi1txoURJ8t7RLjavrSL3yxndYuzv9w1IhUCOKdBFRwE4bv0FQWq0hL2ZRpJFDCFet-XhXqtUz8m~CqC-AkUrYaXIw1vDYnMzBEoCzmaiDllln7PAJZPAYAMuOOV34ryrm9URiYISfCcXmcZd17AL183EcOf2DSyatmgtIP1EbygHIBYTWLGKizTytkvwA8kb5Fpu6aHXD51qhgSEoUF5TX64Nh4fLsbGezRsUCJjRNjkK1O6XLR4TYnXXqL1NSN0aJX1Uq8GX~JebCa-kIsMNsaFGkPjvVI6VhMttt2bPJSEfkV2NBzv3lzJGogTIJ4tZscGjD4A5nIqIzuYgRKIA__",
    imageAlt: "Sarah Burke",
  },
];

const supportingAgents = [
  {
    id: "tia-naris",
    name: "Tia Naris",
    role: "Sales Agent",
    phone: "0400 000 000",
    email: "tia.naris@atlas.com.au",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/8bfa/e8a8/7b5e05c0020ce39f8a5c65eeba5a12e0?Expires=1780272000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O~fQug8GnU3Nry6eNPflAzefTgw26vz12cd5V~L2YWAKlBXG-dPK3MvWUpAgGm~5Ji6FaGmG9Su2miiyQeLhqPs7oP7Tt3sIeNEAhnNRTujEzcGLdlpXOvgN1KScYyuvf9pVQ7NDYZO9eGkCXY0rxDDtNsHXpVEI-7HxN-tnBavXV0IZKNwUd6r~pgkw9AxLBELEFJZ~93XBpaYsQvI9sOI6pkQ-xBGgoh9v3RFHgJmP-P-CNnYPgHoGMO5RVtHfxJwdCm1vi0Pq48xNsIMQLe7QL6ezZCaWeuTQDuzpXIEC28wDqRE1Msj7R1yVXSOX8W8QSrZ6~OUeoTy00xwcFQ__",
    imageAlt: "Tia Naris",
  },
  {
    id: "nyana-hilton",
    name: "Nyana Hilton",
    role: "Sales Assistant to Michael Coombs",
    phone: "0400 000 000",
    email: "nyana.hilton@atlas.com.au",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/d6a0/792e/ba86dff2504239d3afa90aaf439a92ab?Expires=1780272000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Cf5IVKPvsdcVegWV~hWQy-N5AcHC0HvtxHqpnwAthMCq4Gng9WNGNVXt6AHtJVIQvN6Riwm2SaxFEG-~Eihm96wxxQAv~xGUH0bJ3jhAdaNEYA4hC2K2YnDTeKzbh0~9L5qUt4ai74YJWT49i8lNsNA9dAhLi~mdYXIfX~Ym1Vd-4eSvBH2qPar7SdAFiixr0Ec1VNz0CffQKeyph-mlKB5ZtC~v8FEoF~Lufa~HafuqYa~eIMRIPrlDOt0qlZCJTZKznWZLUrz~CvPuZEh7xVbKnkuiEwmhblKOn5NbBvcWImnMUdntvgmr1MItD~OaL65SP-5omVN5ZCb9TX4n1Q__",
    imageAlt: "Nyana Hilton",
  },
  {
    id: "sam-nikitaras",
    name: "Sam Nikitaras",
    role: "Sales Associate",
    phone: "0400 000 000",
    email: "sam.nikitaras@atlas.com.au",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/e8de/6b09/97cca5b990bbc7707d4238444bddded2?Expires=1780272000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Wu7qkAFZ6qMVNAbd8FQKuvUiI1vsjcbwl3ArjSFXGWYUz4X5H2xgjGZ5i50Zooepq~7MaOlHdZC9~FLv82ZxAsMD7pvY9jJj1krfRV3cAjtWzCC82Yoo35qV1Aluyzb~aaP6iM4~rGwBYJcrfNgBGsK1QL6V~hjfNzOZ17EYm3EwB7aPwRqel4iG9mcPJNNo09hQEO9~3dCNUYHFTBCYtzJsJFwVCKtsWb6PxWnE8n6IeDLRnKdSK71J-TYBtSI5IYQTCeTwzYdHmtTdubb957PiDmxcprejZ-4JLTrtijk2gqsMQl8RTHMwROg0F6rgc-QEfPr-hQJDo3p~8dvm3Q__",
    imageAlt: "Sam Nikitaras",
  },
];

const partner = {
  name: "Michelle Binella-Doran",
  role: "Partnering Sales Agent, Ray White",
  phone: "0400 000 000",
  email: "michelle.binella-doran@raywhite.com",
  bio: "Nam recum eos sitios dita alit, sit ut aped quasi dios ducit odici utem re saperit plis di beatem facearum et lature parchillam arumquias plabore pernatem harum que peles exerumquunt, coreictiis cus provid magnatiisit, quo et et offictat volor se quam harum in non numquiam, is esto il mincture naturer con essintium sit ut aped quasi dios ducit odici utem re saperit plis di beatem facearum et lature parchillam arumquias plabore pernatem harum que peles exerumquunt, coreictiis cus provid magnatiisit, quo et et offictat volor se quam harum in non numquiam, is esto il mincture quasi dios pernatem harum naturer con essintium.\n\nSaperit plis di beatem facearum nam recum eos sitios dita alit, sit ut aped quasi dios ducit odici utem re saperit plis di beatem facearum et lature parchillam arumquias plabore pernatem harum que peles exerumquunt, coreictiis cus provid magnatiisit, quo et et offictat volor se quam harum in non numquiam, is esto il mincture naturer con essintium.",
  imageSrc:
    "https://s3-alpha-sig.figma.com/img/0356/41a0/f04a545f646ff1e759551f1a4ee1fa1c?Expires=1780272000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fc9COCjfWTx~wqG1nFPM5EkfGJJ7b8mw0UPwNzy-MK0dsv5G97Bv~nLu0iiyTkfH0S~6TgW8Dlx0vkHjRjRZaNBRiNA-yhqzDT34OD3SlNRJLebCIyhCZjzSm~n1I8IkdgWbD64XviNYltntAVY-194uB95gxKCXO43GpnSzPdJlqPcTvCbpgSAOLX5ahdRllFuyMUjWVsaAGxkrCVpkXaiozTrby6muWRFr-zH4E4KYZHwau964vPfz24tyv5ySQcHz6LspgLTAkLfhnXkROO5o~0PLMXDmJ9Ob7TY2Oq5oiGztZ9Qo1WwoM3LMg533M0g0Evfn7DUUANy7xoV02A__",
  imageAlt: "Michelle Binella-Doran",
};

const partnerLogos = [
  {
    id: "atlas",
    bgColor: "var(--color-primary)",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/6a55/724b/da25249f8823b2f3ace6a8eb33ab07d1?Expires=1780272000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mdIiXp-tDSbaLoJ8n94IUkVFGe1KCW57wU1T6LDHKkcF1J9GvJ-WSBKOCQ-RRnoVy2dPFSLzoVZzeF~o1~mdtr0dVZdhEGUANX3wa5Nc71Gt3g2adZRXAQUQeB30EesDcIkIfLIvSdsQsKZMr9fHXqJPwkfqihoRjMXzHrbmnBkg8dI7kk4o~zzGk-dONpGs11qEuRRUyZnlsrtgsBh940~cvh9Ye90HCR5euNImXLh-QLbYguKpso1-2o8-YONoMijdd9-EEA9K4K3UPbPfFRB4yOemmpIuSnUgs6T-vpcKPC4Tyw8sIgb4fGB2enYErG4tX8X3iDxx7M5Ng2~DXw__",
    imageAlt: "Atlas",
    width: 80,
    height: 54,
  },
  {
    id: "ray-white",
    bgColor: "#ffe400",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/db46/d566/6ab77980fcf9cd29ae269452add2946a?Expires=1780272000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ct30DOMvXykeIu8ldfLasikfQWA41mLGwKzM0DA37R7SZvSYmmFPI4XDjxe6LBhGVy-8w~qAPNHHO0~5Fsjr0EN8nMtsM1UxuhgML8Dk8yqvt-0fXCB7xQLg88YNxgKnv9Sr~M~eiKrRcGnTsqKFVKwotoTZwMZquvvsvGifWMa~o3IibKpMz-O1R~MQ2IB9E-x9nfqhFAKMwDQHvGHW0MqGfrIVnRyKR6eMGtFY~2UJpOdPEnetPJoyBDD6CBiSYc2nsZRhN138hNg~UXzRXDNX1IwQ5hW0fDB-PXRTFcdKaPvPVp3QplYh-WVNaZYrxjve7Fun4Ipk-77W8nsOmg__",
    imageAlt: "Ray White",
    width: 120,
    height: 48,
  },
];

const MeetYourTeam = () => {
  const [openBioId, setOpenBioId] = useState(null);

  return (
    <>
      <style>{`
        .myt {
          width: 100%;
          background-color: var(--color-surface);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Hero ── */
        .myt__hero {
          width: 100%;
          height: 275px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--section-padding-block) var(--section-padding-inline);
          background-image: linear-gradient(rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.3)), url("${HERO_BG}");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-color: var(--color-primary);
          color: var(--color-base-white);
          overflow: hidden;
        }

        .myt__hero-content {
          width: 100%;
          flex: 1;
          max-width: 1280px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        @media screen and (min-width: 640px) {
          .myt__hero {
            height: 400px;
          }
        }

        @media screen and (min-width: 1024px) {
          .myt__hero {
            height: 525px;
          }
        }

        /* ── Body ── */
        .myt__body {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--section-padding-block) var(--section-padding-inline);
        }

        .myt__inner {
          width: 100%;
          max-width: 1280px;
          display: flex;
          flex-direction: column;
          gap: var(--element-block-gap);
        }

        /* ── Section header (label + rule) ── */
        .myt__section-header {
          display: flex;
          flex-direction: row;
          gap: 14px;
          align-items: center;
          color: var(--color-primary);
        }

        .myt__divider {
          flex: 1;
          height: 1px;
          background-color: var(--color-primary);
        }

        /* ── Lead agents ── */
        .myt__lead-agents {
          display: flex;
          flex-direction: column;
          gap: var(--element-block-gap);
        }

        .myt__lead-agent {
          display: flex;
          flex-direction: column;
          gap: var(--spacer-20);
        }

        .myt__lead-photo-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 377 / 441;
        }

        .myt__lead-info {
          display: flex;
          flex-direction: column;
          gap: var(--spacer-24);
          color: var(--color-primary);
        }

        /* Bio text — hidden on mobile unless open, always visible on tablet+ */
        .myt__bio {
          display: none;
          white-space: pre-line;
        }

        .myt__bio--open {
          display: block;
        }

        /* Accordion toggle — mobile only */
        .myt__bio-toggle {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding-block: 4px;
          cursor: pointer;
          background: none;
          border: none;
          text-align: left;
        }

        .myt__bio-toggle-line {
          width: 25px;
          height: 1px;
          background-color: var(--color-primary);
          opacity: 0.5;
          flex-shrink: 0;
        }

        .myt__bio-toggle-label--open {
          opacity: 0.5;
        }

        @media screen and (min-width: 768px) {
          .myt__lead-agent {
            flex-direction: row;
            align-items: flex-start;
            gap: var(--grid-spacer-80);
          }

          .myt__lead-photo-wrap {
            width: 380px;
            height: 540px;
            flex-shrink: 0;
            aspect-ratio: unset;
          }

          .myt__lead-info {
            flex: 1;
            min-width: 0;
            gap: var(--element-block-gap);
          }

          /* Always show bio, hide toggle on tablet+ */
          .myt__bio {
            display: block;
          }

          .myt__bio-toggle {
            display: none;
          }
        }

        /* ── Supporting agents ── */
        .myt__support-agents {
          display: flex;
          flex-direction: column;
          gap: var(--element-block-gap);
        }

        .myt__support-agent {
          display: flex;
          flex-direction: column;
          gap: var(--spacer-20);
        }

        .myt__support-photo-wrap {
          position: relative;
          width: 100%;
          height: auto;
          aspect-ratio: 377 / 441;
        }

        .myt__support-info {
          display: flex;
          flex-direction: column;
          gap: var(--spacer-24);
          color: var(--color-primary);
        }

        @media screen and (min-width: 768px) {
          .myt__support-agents {
            flex-direction: row;
            gap: var(--grid-spacer-40);
          }

          .myt__support-agent {
            flex: 1;
            min-width: 0;
            gap: var(--spacer-24);
          }

          .myt__support-photo-wrap {
            aspect-ratio: 400 / 586;
          }
        }

        /* ── Partner ── */
        .myt__partner {
          display: flex;
          flex-direction: column;
          gap: var(--spacer-24);
        }

        .myt__partner-photo-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 600 / 586;
        }

        .myt__partner-info {
          display: flex;
          flex-direction: column;
          gap: var(--element-block-gap);
          color: var(--color-primary);
        }

        .myt__partner-logos {
          display: flex;
          flex-direction: row;
          gap: var(--spacer-40);
          align-items: flex-start;
        }

        .myt__logo-badge {
          width: 150px;
          height: 96px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
        }

        @media screen and (min-width: 768px) {
          .myt__partner {
            flex-direction: row;
            align-items: flex-start;
            gap: var(--grid-spacer-80);
          }

          .myt__partner-photo-wrap {
            flex: 1;
            min-width: 0;
            aspect-ratio: 600 / 586;
          }

          .myt__partner-info {
            flex: 1;
            min-width: 0;
          }
        }

        /* ── Sub-section (label + content group) ── */
        .myt__sub-section {
          display: flex;
          flex-direction: column;
          gap: var(--element-block-gap);
        }

        /* ── Shared name block ── */
        .myt__name-block {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .myt__contact {
          display: flex;
          flex-direction: column;
        }
      `}</style>

      <section id="meet_your_team" className="myt">
        {/* Hero */}
        <div className="myt__hero">
          <div className="myt__hero-content">
            <div className="section__header">
              <div className="section__header__group section__header__group--default">
                <p className="section__title section__title--dark">
                  MEET THE TEAM
                </p>
                <p className="c-font c-font--h2">
                  Introducing our experienced team that will manage your
                  property campaign
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="myt__body">
          <div className="myt__inner">
            {/* Lead agents */}
            <div className="myt__lead-agents">
              {leadAgents.map((agent) => (
                <div key={agent.id} className="myt__lead-agent">
                  <div className="myt__lead-photo-wrap">
                    <Image
                      fill
                      cover
                      src={agent.imageSrc}
                      alt={agent.imageAlt}
                    />
                  </div>
                  <div className="myt__lead-info">
                    <div className="myt__name-block">
                      <p className="c-font c-font--h3">{agent.name}</p>
                      <p className="c-font-body c-font-body--sm-w400-normal">
                        {agent.role}
                      </p>
                    </div>
                    <div className="myt__contact">
                      <p className="c-font-body c-font-body--md-w400-normal">
                        {agent.phone}
                      </p>
                      <p className="c-font-body c-font-body--md-w400-normal">
                        {agent.email}
                      </p>
                    </div>
                    <button
                      className="myt__bio-toggle"
                      onClick={() =>
                        setOpenBioId(openBioId === agent.id ? null : agent.id)
                      }
                      aria-expanded={openBioId === agent.id}
                    >
                      {openBioId === agent.id && (
                        <span className="myt__bio-toggle-line" />
                      )}
                      <span
                        className={`c-font-body c-font-body--sm-w600-wide c-font--uppercase${openBioId === agent.id ? " myt__bio-toggle-label--open" : ""}`}
                      >
                        {openBioId === agent.id ? "CLOSE" : "READ BIO +"}
                      </span>
                    </button>
                    <p
                      className={`myt__bio c-font-body c-font-body--md-w400-normal${openBioId === agent.id ? " myt__bio--open" : ""}`}
                    >
                      {agent.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Supporting agents */}
            <div className="myt__sub-section">
              <div className="myt__section-header">
                <p className="c-font-body c-font-body--sm-w600-wide c-font--uppercase">
                  SUPPORTING YOUR LEAD AGENTS
                </p>
                <div className="myt__divider" />
              </div>
              <div className="myt__support-agents">
                {supportingAgents.map((agent) => (
                  <div key={agent.id} className="myt__support-agent">
                    <div className="myt__support-photo-wrap">
                      <Image
                        fill
                        cover
                        src={agent.imageSrc}
                        alt={agent.imageAlt}
                      />
                    </div>
                    <div className="myt__support-info">
                      <div className="myt__name-block">
                        <p className="c-font c-font--h3">{agent.name}</p>
                        <p className="c-font-body c-font-body--sm-w400-normal">
                          {agent.role}
                        </p>
                      </div>
                      <div className="myt__contact">
                        <p className="c-font-body c-font-body--md-w400-normal">
                          {agent.phone}
                        </p>
                        <p className="c-font-body c-font-body--md-w400-normal">
                          {agent.email}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner */}
            <div className="myt__sub-section">
              <div className="myt__section-header">
                <p className="c-font-body c-font-body--sm-w600-wide c-font--uppercase">
                  IN INCLUSIVE PARTNERSHIP WITH
                </p>
                <div className="myt__divider" />
              </div>
              <div className="myt__partner">
                <div className="myt__partner-photo-wrap">
                  <Image
                    src={partner.imageSrc}
                    alt={partner.imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="myt__partner-info">
                  <div className="myt__name-block">
                    <p className="c-font c-font--h3">{partner.name}</p>
                    <p className="c-font-body c-font-body--sm-w400-normal">
                      {partner.role}
                    </p>
                  </div>
                  <p
                    className="c-font-body c-font-body--md-w400-normal"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {partner.bio}
                  </p>
                  <div className="myt__contact">
                    <p className="c-font-body c-font-body--md-w400-normal">
                      {partner.phone}
                    </p>
                    <p className="c-font-body c-font-body--md-w400-normal">
                      {partner.email}
                    </p>
                  </div>
                  <div className="myt__partner-logos">
                    {partnerLogos.map((logo) => (
                      <div
                        key={logo.id}
                        className="myt__logo-badge"
                        style={{ backgroundColor: logo.bgColor }}
                      >
                        <Image
                          src={logo.imageSrc}
                          alt={logo.imageAlt}
                          width={logo.width}
                          height={logo.height}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetYourTeam;
