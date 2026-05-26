const KindWords = (props) => {
  return (
    <>
      <style>{`
/* MOBILE */
#kind_words {
  width: 100%;
  background-color: rgb(40, 59, 72);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.kind_words__1 {
  width: 100%;
  background-color: rgb(40, 59, 72);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.kind_words__2 {
  width: 100%;
  height: 572px;
  border: 1px solid rgb(255, 255, 255);
  box-sizing: border-box;
  position: relative;
}
.kind_words__3 {
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  position: absolute;
  left: 24px;
  top: 506px;
}
.kind_words__4 {
  width: 10px;
  height: 10px;
}
.kind_words__5 {
  width: 10px;
  height: 10px;
}
.kind_words__6 {
  width: 10px;
  height: 10px;
}
.kind_words__7 {
  width: 1580px;
  height: 264px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: absolute;
  left: 24px;
  top: 72px;
}
.kind_words__8 {
  width: 377px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  grid-row-start: 1;
  position: absolute;
  left: 1203px;
  top: 0px;
}
.kind_words__9 {
  width: 100%;
  font-size: 16px;
  font-family: Rhymes Display;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: rgb(255, 255, 255);
  white-space: pre-line;
}
.kind_words__10 {
  width: 100%;
  font-size: 14px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: rgb(255, 255, 255);
}
.kind_words__11 {
  width: 377px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  grid-row-start: 1;
  position: absolute;
  left: 802px;
  top: 0px;
}
.kind_words__12 {
  width: 100%;
  font-size: 16px;
  font-family: Rhymes Display;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: rgb(255, 255, 255);
  white-space: pre-line;
}
.kind_words__13 {
  width: 100%;
  font-size: 14px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: rgb(255, 255, 255);
}
.kind_words__14 {
  width: 377px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  grid-row-start: 1;
  position: absolute;
  left: 401px;
  top: 0px;
}
.kind_words__15 {
  width: 100%;
  font-size: 16px;
  font-family: Rhymes Display;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: rgb(255, 255, 255);
  white-space: pre-line;
}
.kind_words__16 {
  width: 100%;
  font-size: 14px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: rgb(255, 255, 255);
}
.kind_words__17 {
  width: 377px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  grid-row-start: 1;
  position: absolute;
  left: 0px;
  top: 0px;
}
.kind_words__18 {
  width: 100%;
  font-size: 16px;
  font-family: Rhymes Display;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: rgb(255, 255, 255);
  white-space: pre-line;
}
.kind_words__19 {
  width: 100%;
  font-size: 14px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: rgb(255, 255, 255);
}
.kind_words__20 {
  width: 91px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 24px;
  top: 32px;
}
.kind_words__21 {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.kind_words__22 {
  flex: 1;
  min-width: 0;
  height: 20px;
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(255, 255, 255);
}
.kind_words__23 {
  width: 100%;
  height: 510px;
  object-fit: cover;
}

/* TABLET */
@media screen and (min-width: 640px) {
  .kind_words__1 {
    flex-direction: row;
    height: 598px;
  }
  .kind_words__2 {
    width: unset;
    height: 598px;
    flex: 1;
    min-width: 0;
  }
  .kind_words__3 {
    padding-top: 40px;
    left: 28px;
    top: 486px;
  }
  .kind_words__4 {
    width: 12px;
    height: 12px;
  }
  .kind_words__5 {
    width: 12px;
    height: 12px;
  }
  .kind_words__6 {
    width: 12px;
    height: 12px;
  }
  .kind_words__7 {
    width: 1908px;
    height: 297px;
    left: 28px;
    top: 100px;
  }
  .kind_words__8 {
    width: 456px;
    gap: 40px;
    left: 1452px;
  }
  .kind_words__9 {
    font-size: 18px;
    line-height: 20px;
  }
  .kind_words__10 {
    font-size: 15px;
    line-height: 17px;
  }
  .kind_words__11 {
    width: 456px;
    gap: 40px;
    left: 968px;
  }
  .kind_words__12 {
    font-size: 18px;
    line-height: 20px;
  }
  .kind_words__13 {
    font-size: 15px;
    line-height: 17px;
  }
  .kind_words__14 {
    width: 456px;
    gap: 40px;
    left: 484px;
  }
  .kind_words__15 {
    font-size: 18px;
    line-height: 20px;
  }
  .kind_words__16 {
    font-size: 15px;
    line-height: 17px;
  }
  .kind_words__17 {
    width: 456px;
    gap: 40px;
  }
  .kind_words__18 {
    font-size: 18px;
    line-height: 20px;
  }
  .kind_words__19 {
    font-size: 15px;
    line-height: 17px;
  }
  .kind_words__20 {
    left: 28px;
    top: 44px;
    gap: 6px;
  }
  .kind_words__22 {
    font-size: 12px;
    line-height: 16px;
  }
  .kind_words__23 {
    width: unset;
    height: unset;
    flex: 1;
    min-width: 0;
    align-self: stretch;
  }
}

/* DESKTOP */
@media screen and (min-width: 1024px) {
  .kind_words__1 {
    height: 720px;
  }
  .kind_words__2 {
    width: unset;
    height: 720px;
  }
  .kind_words__3 {
    padding-top: 56px;
    left: 80px;
    top: unset;
    bottom: 80px;
  }
  .kind_words__4 {
    width: 14px;
    height: 14px;
  }
  .kind_words__5 {
    width: 14px;
    height: 14px;
  }
  .kind_words__6 {
    width: 14px;
    height: 14px;
  }
  .kind_words__7 {
    width: 2480px;
    height: 338px;
    left: 80px;
    top: 152px;
  }
  .kind_words__8 {
    width: 560px;
    gap: 56px;
    left: 1920px;
  }
  .kind_words__9 {
    font-size: 20px;
    line-height: 24px;
  }
  .kind_words__10 {
    font-size: 16px;
    line-height: 18px;
  }
  .kind_words__11 {
    width: 560px;
    gap: 56px;
    left: 1280px;
  }
  .kind_words__12 {
    font-size: 20px;
    line-height: 24px;
  }
  .kind_words__13 {
    font-size: 16px;
    line-height: 18px;
  }
  .kind_words__14 {
    width: 560px;
    gap: 56px;
    left: 640px;
  }
  .kind_words__15 {
    font-size: 20px;
    line-height: 24px;
  }
  .kind_words__16 {
    font-size: 16px;
    line-height: 18px;
  }
  .kind_words__17 {
    width: 560px;
    gap: 56px;
  }
  .kind_words__18 {
    font-size: 20px;
    line-height: 24px;
  }
  .kind_words__19 {
    font-size: 16px;
    line-height: 18px;
  }
  .kind_words__20 {
    left: 80px;
    top: 80px;
    gap: 12px;
  }
  .kind_words__23 {
    width: unset;
    height: unset;
  }
}
`}</style>
      <section id="kind_words">
        <div className="kind_words__1">
          <div className="kind_words__2">
            <div className="kind_words__3">
              <div className="kind_words__4" />
              <div className="kind_words__5" />
              <div className="kind_words__6" />
            </div>
            <div className="kind_words__7">
              <div className="kind_words__8">
                <p className="kind_words__9">
                  {
                    "We worked with Michael at the purchase of our property and what a refreshing experience it was!\n\nAll communications were a joy. He is incredibly motivated, gets results quickly and most surprisingly he possesses a very rare sincerity. There is great comfort in dealing with someone who is genuinely helpful - making our purchase, which we expected to be stressful, so much more of a pleasant experience than we expected.\n\nWe would not hesitate in recommending him - he is simply wonderful!"
                  }
                </p>
                <p className="kind_words__10">– Chilu K</p>
              </div>
              <div className="kind_words__11">
                <p className="kind_words__12">
                  {
                    "Tia was brilliant! Easy to work with, appreciative of our needs and always obliging. She kept us informed and advised us throughout the process. She provided the highest level of customer service.\n\nEfficient, professional and personable. An absolute pleasure to deal with and whether it’s buying or selling, we look forward to working with Tia again."
                  }
                </p>
                <p className="kind_words__13">– Linda M</p>
              </div>
              <div className="kind_words__14">
                <p className="kind_words__15">
                  {
                    "Sarah has all the skills you could ever need whether selling or buying. We have seen both sides of Sarah professionally managing real estate. Not only is she highly professional and knows all the necessary processes to achieve superior results. Technical real estate skills are only part of her business acumen.\n\nSarah is determined and works hard for her clients to achieve a superior result. Add a kind personable disposition and you have all the attributes of a 100% agent. That’s Sarah!"
                  }
                </p>
                <p className="kind_words__16">– Peter V</p>
              </div>
              <div className="kind_words__17">
                <p className="kind_words__18">
                  {
                    "We worked with Michael at the purchase of our property and what a refreshing experience it was!\n\nAll communications were a joy. He is incredibly motivated, gets results quickly and most surprisingly he possesses a very rare sincerity — making our purchase so much more of a pleasant experience than we expected.\n\nWe would not hesitate in recommending him — he is simply wonderful!"
                  }
                </p>
                <p className="kind_words__19">– Chilu K</p>
              </div>
            </div>
            <div className="kind_words__20">
              <div className="kind_words__21">
                <p className="kind_words__22">KIND WORDS</p>
              </div>
            </div>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/b5fc/1d1b/3b0ea603d221ebf99dab7a16561c9546?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rl3rfR~Kxude5IjBKXbCvLAf8bOvfiDLYiXaONTIORYoCJZ0IthhQK87NB-0O-E-52ITkvY6UHHFhS27rf6eienrXCQJ3SiJwoIoEVxdKNXoWpr~jifUMrSk7E9-K0rfqaU9zJYTYdH6jmH5kjLmGQWALld49uUZW2P-VcM5Y5bqZq01GffBZsfdEJDPsDH-6d5cJsrpmPAByZrd-YCOf6uy1h7FrP4Alw0u95Ekv4q8j9jP~~RoBbm0Cn8iuhBi-kF5tlUdM7bKZFAI3tX7XP6g1J7QuncE1bk88yb0VZGtGI7cq1KyuffSKbsplu96wuQf~y8M57ws~7LM4O~GaQ__"
            alt="kind_words_img"
            className="kind_words__23"
          />
        </div>
      </section>
    </>
  );
};
