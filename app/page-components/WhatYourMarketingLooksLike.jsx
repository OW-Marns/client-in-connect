import React from "react";
import Image from "next/image";
import { cn } from "../utils/cn";

const cards = [
  {
    id: 1,
    title: "Styling",
    image:
      "https://s3-alpha-sig.figma.com/img/b0ae/13b5/7fc84b0b3d58252b338c24e424212dae?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z-MccxfvFju-~DixMnQq5O6kbMvKwNXsRaSpnj4-HqXC4TuIObS1MESm42-qhQ6fIQjAfGTrfCfwvyP5POXf-oFbm0w0jT-LPy5Sju7i6x51Ge6z42lefASgWX4mtp4dZsxbXfiDd4JX4TQTIOQRt~Rm6SH5ZmV9GgL91xnhl8CY8JXukIA1S4KcUdFxBRVSsuXTAQZSeuPkt~DiatJI1FCpjQK2lu93BcxBdBnVBdPckZ2ci3Ba7PvFuapMxmjBu6aqyrwlGi0mF7g7dyCKzLXftiZx46Y-wGnBM1G88w-v5Lynlxa8QvVQMYQujdgbsNKEdizhz~ut3BnVzLjPrg__",
    body: [
      "Styling a home to have broad appeal is well worth doing. Professional styling creates a 'wow' moment the minute a buyer walks in and makes a home feel spacious and welcoming. A stylist's touch is also valuable in controlling the buyer experience, helping them appreciate the home's full potential.",
      "Many of our agents have built strong relationships with professional stylists who specialise in delivering the biggest impact for a real estate campaign.",
    ],
  },
  {
    id: 2,
    title: "Photography",
    image:
      "https://s3-alpha-sig.figma.com/img/d57b/a30d/4e25beb60e7ba510785295f8e60fada9?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qkGU9IUdQ68AEjKiWlG-FE8OSOBCCZSfIm3kFj7V8ji5cZpDt-Kg5Ya31kdfB1IWlzZR8Hvx0C-022qD40g9M5YYIqV2GJudc91VCoqWm9T3ha~wdHrKS0Ztvsr2U36s-cCwbDoeKPKQ3GncHAiOK9T5vxT~VwrOOOPv2dpJ45ZcWC3fbdQmpDNOw2hs~-vFwNtB5aHvrp4IYQauecFp8XIm16m1QCNDm-x4x3qGaZSkZo3QqKikYhhACpWEekwKnWZ8N9OuAZJdjrzyYmoFdwj5ivGxiL86yVn~~J3EdqBjxqg9TgPY8cehVSqNgjXX3Qr9rS5QzihXW8ZSfk1Lqg__",
    body: [
      "The visual impact of photography and videography is of pivotal importance when selling property.",
      "At Atlas, we know the beauty is in the detail. We work with a leading production team to capture your property and hero the magic moments that creates an emotive connection with potential buyers.",
      "All of our listing visuals are to the highest quality and used across various marketing assets.",
    ],
  },
  {
    id: 3,
    title: "Print Material",
    image:
      "https://s3-alpha-sig.figma.com/img/8f28/1a10/0c5a4d53a30ae61d4ba9b448a8507068?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mBIZa~UFt8yGoASmVRKCGf1veddCywvEq0gtZhliFprDq8m5F4-MNwXWL4OW9zCa35CuBICkqN73~t-LTnhjJqk8GOknDgTrW~u91bp44s7FyMjmGRE4qa5mhlRptstjEX6p-QpAfCn9YzL2t4n2qVIjCiFkjllvAV4TEc781RW7gpm8Qz0BMO3NXKrecuAkImaJA5lq9c56tujWS2Ws-lwdzbCAVrB4GcfuVzdev8H3gHfjOvzyu7ddq-pio5d8cP1ouefb6NYrnpNSCbiDs-XBXIW~~Zo2PobH8KSdmqS0mN6OVoO-AgHXobC11YmoHU54k-UBhhvXgT3Q2CM-jA__",
    body: [
      "Our marketing is elegant, sophisticated and flexible. Words are carefully selected to describe your property to attract the perfect buyer and further embodies our lifestyle approach to real estate. We are not afraid to do things differently and know what hooks can get the most potential buyers interested in your property.",
      "Our print material catches the eyes of the audience, utilising a clean and minimal approach whilst emphasising lifestyle – utilising purposeful space and negative space to enhance the overall aesthetic of the design. We work closely with media partners to gain as much exposure of your listing as possible. This can be in print, and their digital platforms.",
    ],
  },
  {
    id: 4,
    title: "Signboards",
    image:
      "https://s3-alpha-sig.figma.com/img/56c8/09ef/20f506d43caa3e8271c04bf30bae1e9b?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rUti3~ZwDv7s2d5E9u6GAj6I28SjUoZQVsTaShrBaZJUgdS~VTibFIw5Msx-t303CiSacf-6ySXHtO3uFDpb22nXpZwaNp7kkWj8Opqx0x3Ruz1~w-Qxa-E9MUAow0oVrSmyNeYrTEfYvBgnCfLOuZiLwj-Dz36xQF9nNct~h7~-W7aLe2dKe-yJrs-U1V7r0WbvVpb1S6J76TRBviUMc4-14qsKGuzT3e4GCNJX2TW-dPXvNqND16jo~v9LYie7tS45LugCONTmyMj8S5zRGVQ9gHUV79vyuS2j-J62qd3HwYBvi5IBbBUuXKQKi0AhCoiCmbd~oOMUEBQPoEbmUA__",
    body: [
      "We have developed a unique design to showcase your property on our signboards. Using a short, descriptive sentence, we allow potential buyers to immediately visually grasp what makes your property so special.",
      "The overall design is kept clean and minimal, to make it easy for potential buyers to read and absorb information – including careful consideration to the position of the QR code for ease of scanning. All of the key details are present, however this unique approach to describing the property simply adds to our lifestyle meets real estate approach.",
    ],
  },
  {
    id: 5,
    title: "Atlas Website",
    image:
      "https://s3-alpha-sig.figma.com/img/48aa/80a4/39bc27707ab7312181ca48cbebe22f92?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NuGzRDFNClFQ-2PDARBpv1tJUeZ1J3M~EszkppI7J-1ZdpPBhPTZC6FJiTGP2CyOdvjQc6zQLxLH4KJAcY44p3KYrE6sfGbwrMEmVbdTm5GzEoeFtEsnkbF3HW4f~i0krdDa9IglzmZWoJZPQljIMyKIjlSbNvvQjXRh8Wl~hSg02snLym5fJHpBtxG4u3E7~Edn~Zw2PVmHVbY3qsEawayKYahpXbCuJe7J8pfRUA57ElKyyieI7N6So8hEXxfxpa7nPtW21mcpYYONp2sb5G~f6mOdfJmTZkJ1KGfADyuk9Sg1UVwpnPlFF0U3dhJ8MlCRMiVim48i5ow1-ZgY~Q__",
    body: [
      "At Atlas, we use the latest digital marketing tools to target potential likely buyers of your property across social media and digital platforms. Our website has been re-designed to improve user experience, as well as showcase our lifestyle approach to real estate. Buyers can easily navigate properties for sale and access all property information in one place.",
      "Our email marketing sends your listing to matched buyers in our database. We advertise your property weekly and use our insights to connect with buyers who have engaged with your property.",
    ],
  },
  {
    id: 6,
    title: "Social Media",
    image:
      "https://s3-alpha-sig.figma.com/img/4c6d/9714/fb8b83d43a09813863d1adb332620fbf?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K8rzZ4fBD54t-nNNsAQBGGVCHM~oeL6D17Q5g4T0VXyCfI7W~xsxg-nJ9-wo433z9u0FOPt0PBdqaqsfhR3RG~2Satv9gW3Zw0UPrwNcOprBM7bkwhnMmBrCaKZJN5KdW6LCipqn5Sb~CZFAsba1tQqmKQhReI16nO17I80rxwYYtGtGiaw92BV9YY45WYXfDL~kjmHLRA-vGjEj1Gt~Ic-19zrOWiKr44IvMTyPw-vgH-8fnQp1IBI7jevwVEO3-pjQgIFyxp3KyFKxLaVBGfyE2X-y94ciPuL1rsq6XtJEs0HTYP~KmS0QqLY5WLvcIOExsw2YrEqS0ci8LA~ecQ__",
    body: [
      "Our unique social media campaigns are designed to target audiences that are matched to your property and likely buyer dynamics. This attracts buyers that are not actively looking on real estate portals which extends the reach of your campaign and can give you the best results.",
      "We also use various marketing strategies and implement bespoke social ads, vendor paid ads and other key methods as a way of increasing the reach of your property throughout the campaign.",
    ],
  },
];

const WhatYourMarketingLooksLike = () => {
  const [activeCard, setActiveCard] = React.useState(null);
  const toggle = (id) => setActiveCard((prev) => (prev === id ? null : id));

  return (
    <>
      <style>{`
        #what_your_marketing_looks_like {
          background-color: var(--color-base-white);
        }

        .wymll-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: var(--grid-spacer-40);
        }

        .wymll-card {
          position: relative;
          aspect-ratio: 400 / 300;
          background-color: var(--color-primary);
          overflow: hidden;
        }

        .wymll-card__gradient {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(to top, rgba(30, 30, 30, 0.3) 0%, rgba(132, 132, 132, 0) 50%);
        }

        .wymll-card__title {
          position: absolute;
          bottom: var(--spacer-24);
          left: var(--spacer-32);
          right: var(--spacer-32);
          color: var(--color-base-white);
        }

        .wymll-card__overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--spacer-20);
          padding: var(--spacer-32);
          color: var(--color-base-white);
          background-color: var(--color-secondary);
          transition: left 300ms ease;
          overflow-y: auto;
        }

        .wymll-card--open .wymll-card__overlay {
          left: 0;
        }

        .wymll-card__toggle {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          cursor: pointer;
          width: 30px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          font-size: 14px;
          color: var(--color-base-white);
          padding-bottom: var(--spacer-20);
          background-color: var(--color-secondary);
          border: none;
        }

        @media screen and (min-width: 640px) {
          .wymll-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (min-width: 1024px) {
          .wymll-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .wymll-card {
            cursor: pointer;
          }

          .wymll-card__overlay {
            left: 0;
            opacity: 0;
            transition: opacity 300ms ease;
          }

          .wymll-card:hover .wymll-card__overlay {
            opacity: 1;
          }

          .wymll-card__toggle {
            display: none;
          }
        }
      `}</style>

      <section id="what_your_marketing_looks_like" className="section">
        <div className="section__container">
          <div className="wymll-grid">
            {cards.map((card) => {
              const isOpen = activeCard === card.id;

              return (
                <div
                  key={card.id}
                  className={cn("wymll-card", isOpen && "wymll-card--open")}
                >
                  <Image
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    src={card.image}
                    alt={card.title}
                  />
                  <div className="wymll-card__gradient" />
                  <p className="wymll-card__title c-font c-font--h3">
                    {card.title}
                  </p>
                  <div className="wymll-card__overlay">
                    {card.body.map((para, i) => (
                      <p
                        key={i}
                        className="c-font-body c-font-body--sm-w400-normal"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                  <button
                    className="wymll-card__toggle"
                    onClick={() => toggle(card.id)}
                  >
                    {isOpen ? "-" : "+"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatYourMarketingLooksLike;
