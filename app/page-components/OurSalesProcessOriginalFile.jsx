const OurSalesProcess = (props) => {
  return (
    <>
      <style>{`
/* MOBILE */
#our_sales_process {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 24px;
}
.our_sales_process__1 {
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
}
.our_sales_process__2 {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.our_sales_process__3 {
  flex: 1;
  min-width: 0;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.our_sales_process__4 {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.our_sales_process__5 {
  flex: 1;
  min-width: 0;
  height: 20px;
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(39, 39, 39);
}
.our_sales_process__6 {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.our_sales_process__7 {
  flex: 1;
  min-width: 0;
  font-size: 20px;
  font-family: Rhymes Display;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__8 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}
.our_sales_process__9 {
  width: 100%;
  height: 430px;
  object-fit: cover;
}
.our_sales_process__10 {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
}
.our_sales_process__11 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.our_sales_process__12 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.our_sales_process__13 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
}
.our_sales_process__14 {
  flex: 1;
  min-width: 0;
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__15 {
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__16 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.our_sales_process__17 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
}
.our_sales_process__18 {
  flex: 1;
  min-width: 0;
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__19 {
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__20 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.our_sales_process__21 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
}
.our_sales_process__22 {
  flex: 1;
  min-width: 0;
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__23 {
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__24 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.our_sales_process__25 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
}
.our_sales_process__26 {
  flex: 1;
  min-width: 0;
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__27 {
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__28 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.our_sales_process__29 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
}
.our_sales_process__30 {
  flex: 1;
  min-width: 0;
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__31 {
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__32 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.our_sales_process__33 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
}
.our_sales_process__34 {
  flex: 1;
  min-width: 0;
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__35 {
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__36 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.our_sales_process__37 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
}
.our_sales_process__38 {
  flex: 1;
  min-width: 0;
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__39 {
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__40 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.our_sales_process__41 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
}
.our_sales_process__42 {
  flex: 1;
  min-width: 0;
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__43 {
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}
.our_sales_process__44 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.our_sales_process__45 {
  width: 100%;
  background-color: rgb(235, 228, 223);
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
}
.our_sales_process__46 {
  flex: 1;
  min-width: 0;
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
  list-style-type: decimal;
  padding-inline-start: 1.5em;
}
.our_sales_process__47 {
  font-size: 10px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 14px;
  text-align: left;
  color: rgb(30, 30, 30);
}

/* TABLET */
@media screen and (min-width: 640px) {
  #our_sales_process {
    padding: 48px 28px;
  }
  .our_sales_process__1 {
    gap: 40px;
  }
  .our_sales_process__3 {
    gap: 6px;
  }
  .our_sales_process__5 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__7 {
    font-size: 27px;
    line-height: 31px;
  }
  .our_sales_process__8 {
    flex-direction: row;
    gap: 32px;
    align-items: flex-start;
    justify-content: center;
  }
  .our_sales_process__9 {
    width: unset;
    height: 589px;
    flex: 1;
    min-width: 0;
  }
  .our_sales_process__10 {
    width: unset;
    gap: 40px;
    flex: 1;
    min-width: 0;
  }
  .our_sales_process__13 {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .our_sales_process__14 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__15 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__17 {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .our_sales_process__18 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__19 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__21 {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .our_sales_process__22 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__23 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__25 {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .our_sales_process__26 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__27 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__29 {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .our_sales_process__30 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__31 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__33 {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .our_sales_process__34 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__35 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__37 {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .our_sales_process__38 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__39 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__41 {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .our_sales_process__42 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__43 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__45 {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .our_sales_process__46 {
    font-size: 12px;
    line-height: 16px;
  }
  .our_sales_process__47 {
    font-size: 12px;
    line-height: 16px;
  }
}

/* DESKTOP */
@media screen and (min-width: 1024px) {
  #our_sales_process {
    padding: 80px 32px;
  }
  .our_sales_process__1 {
    gap: 56px;
  }
  .our_sales_process__3 {
    gap: 12px;
  }
  .our_sales_process__7 {
    font-size: 34px;
    line-height: 40px;
  }
  .our_sales_process__8 {
    gap: 80px;
  }
  .our_sales_process__9 {
    width: unset;
    height: 755px;
  }
  .our_sales_process__10 {
    width: unset;
    gap: 56px;
  }
  .our_sales_process__13 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .our_sales_process__17 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .our_sales_process__21 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .our_sales_process__25 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .our_sales_process__29 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .our_sales_process__33 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .our_sales_process__37 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .our_sales_process__41 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .our_sales_process__45 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
`}</style>
      <section id="our_sales_process">
        <div className="our_sales_process__1">
          <div className="our_sales_process__2">
            <div className="our_sales_process__3">
              <div className="our_sales_process__4">
                <p className="our_sales_process__5">OUR SALES PROCESS</p>
              </div>
              <div className="our_sales_process__6">
                <p className="our_sales_process__7">
                  Complete transparency in our process to give you confidence
                  through each step
                </p>
              </div>
            </div>
          </div>
          <div className="our_sales_process__8">
            <img
              src="https://s3-alpha-sig.figma.com/img/6490/c170/ab489844a44212a44183ff0279fe1101?Expires=1780876800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DNExCniS0q9H26EkshH2Odk3WRIt42tUU9gZfDqAi3X16kvX6bz8S7L~PoISI0Ac2wnolwwNJH75Tvfj93dPUXKgA205EAB~zlKlTyARzOhMp9ibiWrdX792Gv5hnDRE9rYcZkbtRjGEY0Bg~JV4yhqdwWe~r2LXC~OY~dmv57WkDMYSAn8uIfLe7HINojLl82XavWJmZ8Bz~upQWTzxKzhM65q5DjTJT4Ke~eglAyO7RY3sX7GuevN8WWNlJnIAGAbynVdzitboN-VzMGxUOZN0DLCvVWPmNl~5wr2sPOxReREKDv6G1C5mxtlZh2nAKWOUkhdozVIbbmrUMkGHPQ__"
              alt="michelle-binella-doran"
              className="our_sales_process__9"
            />
            <div className="our_sales_process__10">
              <div className="our_sales_process__11">
                <div className="our_sales_process__12">
                  <div className="our_sales_process__13">
                    <p className="our_sales_process__14">1. APPRAISAL</p>
                    <p className="our_sales_process__15">+</p>
                  </div>
                </div>
                <div className="our_sales_process__16">
                  <div className="our_sales_process__17">
                    <p className="our_sales_process__18">2. PROPOSAL</p>
                    <p className="our_sales_process__19">+</p>
                  </div>
                </div>
                <div className="our_sales_process__20">
                  <div className="our_sales_process__21">
                    <p className="our_sales_process__22">3. HOME PREPARATION</p>
                    <p className="our_sales_process__23">+</p>
                  </div>
                </div>
                <div className="our_sales_process__24">
                  <div className="our_sales_process__25">
                    <p className="our_sales_process__26">4. PRE-MARKET</p>
                    <p className="our_sales_process__27">+</p>
                  </div>
                </div>
                <div className="our_sales_process__28">
                  <div className="our_sales_process__29">
                    <p className="our_sales_process__30">5. LAUNCH LISTING</p>
                    <p className="our_sales_process__31">+</p>
                  </div>
                </div>
                <div className="our_sales_process__32">
                  <div className="our_sales_process__33">
                    <p className="our_sales_process__34">6. IN CAMPAIGN</p>
                    <p className="our_sales_process__35">+</p>
                  </div>
                </div>
                <div className="our_sales_process__36">
                  <div className="our_sales_process__37">
                    <p className="our_sales_process__38">7. INSIGHTS</p>
                    <p className="our_sales_process__39">+</p>
                  </div>
                </div>
                <div className="our_sales_process__40">
                  <div className="our_sales_process__41">
                    <p className="our_sales_process__42">8. OFFERS</p>
                    <p className="our_sales_process__43">+</p>
                  </div>
                </div>
                <div className="our_sales_process__44">
                  <div className="our_sales_process__45">
                    <ol className="our_sales_process__46">
                      <li>EXCHANGE/SETTLE</li>
                    </ol>
                    <p className="our_sales_process__47">+</p>
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
