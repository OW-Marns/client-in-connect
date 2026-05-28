import React from "react";
import { SwiperSlide } from "swiper/react";
import Carousel from "../components/Carousel";
import { cn } from "../utils/cn";

const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const MONTHS = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

function parseDateStr(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const utcDate = new Date(Date.UTC(year, month - 1, day));
  return {
    monthName: MONTHS[month - 1],
    day,
    weekday: utcDate.toLocaleDateString("en-US", {
      weekday: "long",
      timeZone: "UTC",
    }),
  };
}

function isLightColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.5;
}

// #ebe4df = --color-accent  |  #1e1e1e = --color-primary  |  #734137 = --color-secondary
const data = {
  calendar: [
    // Week 1 — Apr 15–21
    [
      [], // Apr 15
      [], // Apr 16
      [], // Apr 17
      [
        // Apr 18 — accent
        {
          id: 1,
          color: "#ebe4df",
          event: "Photography",
          date: "2026-04-18",
          active: true,
        },
        {
          id: 2,
          color: "#ebe4df",
          event: "Floor plan",
          date: "2026-04-18",
          active: true,
        },
        {
          id: 3,
          color: "#ebe4df",
          event: "Copywriting",
          date: "2026-04-18",
          active: true,
        },
      ],
      [], // Apr 19
      [], // Apr 20
      [], // Apr 21
    ],
    // Week 2 — Apr 22–28
    [
      [], // Apr 22
      [
        // Apr 23 — primary
        {
          id: 4,
          color: "#1e1e1e",
          event: "Property goes live",
          date: "2026-04-23",
          active: true,
        },
      ],
      [
        // Apr 24 — accent
        {
          id: 5,
          color: "#ebe4df",
          event: "Signboard",
          date: "2026-04-24",
          active: true,
        },
        {
          id: 6,
          color: "#ebe4df",
          event: "Brochures delivered",
          date: "2026-04-24",
          active: true,
        },
      ],
      [
        // Apr 25 — primary
        {
          id: 7,
          color: "#1e1e1e",
          event: "First open home",
          date: "2026-04-25",
          active: true,
        },
      ],
      [
        // Apr 26 — accent
        {
          id: 8,
          color: "#ebe4df",
          event: "DL Mailcards distributed",
          date: "2026-04-26",
          active: true,
        },
      ],
      [
        // Apr 27 — primary
        {
          id: 9,
          color: "#1e1e1e",
          event: "Open home",
          date: "2026-04-27",
          active: true,
        },
      ],
      [], // Apr 28
    ],
    // Week 3 — Apr 29–May 5
    [
      [], // Apr 29
      [
        // Apr 30 — accent
        {
          id: 10,
          color: "#ebe4df",
          event: "Database - weekly email",
          date: "2026-04-30",
          active: true,
        },
      ],
      [], // May 1
      [
        // May 2 — primary
        {
          id: 11,
          color: "#1e1e1e",
          event: "Open home",
          date: "2026-05-02",
          active: true,
        },
      ],
      [], // May 3
      [
        // May 4 — primary
        {
          id: 12,
          color: "#1e1e1e",
          event: "Open home",
          date: "2026-05-04",
          active: true,
        },
      ],
      [], // May 5
    ],
    // Week 4 — May 6–12
    [
      [], // May 6
      [
        // May 7 — accent
        {
          id: 13,
          color: "#ebe4df",
          event: "Database - weekly email",
          date: "2026-05-07",
          active: true,
        },
      ],
      [], // May 8
      [
        // May 9 — primary
        {
          id: 14,
          color: "#1e1e1e",
          event: "Final mid-week open home",
          date: "2026-05-09",
          active: true,
        },
        {
          id: 15,
          color: "#1e1e1e",
          event: "Auction invitation",
          date: "2026-05-09",
          active: true,
        },
      ],
      [
        // May 10 — accent
        {
          id: 16,
          color: "#ebe4df",
          event: "Pre-Auction discussions between agent and the vendor",
          date: "2026-05-10",
          active: true,
        },
      ],
      [
        // May 11 — secondary
        {
          id: 17,
          color: "#734137",
          event: "Auction day",
          date: "2026-05-11",
          active: true,
        },
      ],
      [], // May 12
    ],
  ],
  dates: [
    [
      "2026-04-15",
      "2026-04-16",
      "2026-04-17",
      "2026-04-18",
      "2026-04-19",
      "2026-04-20",
      "2026-04-21",
    ],
    [
      "2026-04-22",
      "2026-04-23",
      "2026-04-24",
      "2026-04-25",
      "2026-04-26",
      "2026-04-27",
      "2026-04-28",
    ],
    [
      "2026-04-29",
      "2026-04-30",
      "2026-05-01",
      "2026-05-02",
      "2026-05-03",
      "2026-05-04",
      "2026-05-05",
    ],
    [
      "2026-05-06",
      "2026-05-07",
      "2026-05-08",
      "2026-05-09",
      "2026-05-10",
      "2026-05-11",
      "2026-05-12",
    ],
  ],
};

function getInitialWeekAndSlide() {
  for (let w = 0; w < data.calendar.length; w++) {
    const idx = data.calendar[w].findIndex((d) => d.length > 0);
    if (idx >= 0) return { week: w, slide: idx };
  }
  return { week: 0, slide: 0 };
}

const initial = getInitialWeekAndSlide();

const CalendarCell = ({ dateStr, events }) => {
  const { monthName, day } = parseDateStr(dateStr);
  const hasEvents = events.length > 0;
  const cellBg = hasEvents ? events[0].color : "var(--color-base-white)";
  const lightBg = !hasEvents || isLightColor(events[0].color);
  return (
    <div
      className={cn("yct-cell", lightBg ? "yct-cell--light" : "yct-cell--dark")}
      style={{ backgroundColor: cellBg }}
    >
      <div className="yct-cell__date-group">
        <p className="yct-cell__month c-font-body c-font-body--xs-w600-wide c-font--uppercase">
          {monthName}
        </p>
        <p className="c-font-body c-font--h3 c-font--spacing">{day}</p>
      </div>

      {hasEvents && (
        <div className="yct-cell__events">
          {events.map((event) => (
            <p
              key={event.id}
              className={cn(
                "c-font-body c-font-body--md-w400-normal",
                !event.active && "yct-event--inactive",
              )}
            >
              {event.event}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const CalendarMobile = () => {
  const [activeWeek, setActiveWeek] = React.useState(initial.week);
  const [activeSlide, setActiveSlide] = React.useState(initial.slide);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleWeekSelect = (weekIdx) => {
    const idx = data.calendar[weekIdx].findIndex((d) => d.length > 0);
    setActiveWeek(weekIdx);
    setActiveSlide(idx >= 0 ? idx : 0);
    setDropdownOpen(false);
  };

  return (
    <div className="yct-cal-mobile">
      <div className="yct-cal-mobile__header">
        <p className="c-font c-font--h3">{DAYS_OF_WEEK[activeSlide]}</p>
        {/* WEEK Dropdown */}
        <div>
          <button
            className="yct-cal-mobile__week-btn c-font-body c-font-body--xs-w600-wide c-font--uppercase"
            onClick={() => setDropdownOpen((o) => !o)}
          >
            WEEK {activeWeek + 1}
            <span className="yct-cal-mobile__caret" />
          </button>
          {dropdownOpen && (
            <>
              <div
                className="yct-cal-mobile__backdrop"
                onClick={() => setDropdownOpen(false)}
              />
              <div className="yct-cal-mobile__dropdown">
                {data.dates.map((_, weekIdx) => (
                  <button
                    key={weekIdx}
                    className={cn(
                      "yct-cal-mobile__dropdown-item c-font-body c-font-body--xs-w600-wide c-font--uppercase",
                      activeWeek === weekIdx &&
                        "yct-cal-mobile__dropdown-item--active",
                    )}
                    onClick={() => handleWeekSelect(weekIdx)}
                  >
                    WEEK {weekIdx + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <Carousel
        key={activeWeek}
        initialSlide={activeSlide}
        loop={false}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {data.dates[activeWeek].map((dateStr, dayIdx) => {
          const events = data.calendar[activeWeek][dayIdx];
          return (
            <SwiperSlide key={dateStr}>
              <CalendarCell dateStr={dateStr} events={events} />
            </SwiperSlide>
          );
        })}
      </Carousel>
    </div>
  );
};

const CalendarDesktop = () => (
  <div className="yct-cal-desktop">
    <div className="yct-cal-wrap">
      <div className="yct-day-headers">
        {DAYS_OF_WEEK.map((day) => (
          <div key={day} className="yct-day-header">
            <p className="c-font c-font--h4">{day}</p>
          </div>
        ))}
      </div>

      <div className="yct-cal-grid">
        {data.dates.map((week, weekIdx) =>
          week.map((dateStr, dayIdx) => {
            const events = data.calendar[weekIdx][dayIdx];
            return (
              <CalendarCell key={dateStr} dateStr={dateStr} events={events} />
            );
          }),
        )}
      </div>
    </div>
  </div>
);

const YourCampaignTimeline = () => {
  const [activeTab, setActiveTab] = React.useState("calendar");

  return (
    <>
      <style>{`
        #your_campaign_timeline {
          background-color: var(--color-surface);
        }

        .yct-tabs {
          width: 100%;
          display: flex;
          flex-direction: row;
        }

        .yct-tab {
          outline: none;
          cursor: pointer;
          flex: 0 1 156px;
          border: none;
          background: transparent;
          border-bottom: 5px solid var(--color-surface);
          padding-block: var(--btn-md-padding-block);
          padding-inline: var(--btn-md-padding-inline);
          color: var(--color-primary);
        }

        .yct-tab--active {
          border-bottom-color: var(--color-secondary);
        }

        /* ===== CALENDAR ===== */

        .yct-cal-mobile {
          width: 100%;
          display: flex;
          flex-direction: column;
          padding-top: 20px;
          gap: 12px;
        }

        .yct-cal-mobile__header {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .yct-cal-mobile__week-btn {
          border: none;
          outline: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: var(--spacer-16);
          color: var(--color-base-white);
          background-color: var(--color-primary);
          padding: var(--btn-sm-padding-block) var(--btn-sm-padding-inline);
        }

        .yct-cal-mobile__caret {
          display: inline-block;
          flex-shrink: 0;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid var(--color-base-white);
        }

        .yct-cal-mobile__dropdown {
          position: absolute;
          top: calc(100% + 2px);
          right: 0;
          z-index: 10;
          min-width: 150px;
          display: flex;
          flex-direction: column;
          background-color: var(--color-primary);
        }

        .yct-cal-mobile__dropdown-item {
          border: none;
          outline: none;
          cursor: pointer;
          text-align: left;
          background: transparent;
          color: var(--color-base-white);
          padding: var(--btn-sm-padding-block) var(--btn-sm-padding-inline);
          opacity: 0.5;
        }

        .yct-cal-mobile__dropdown-item--active {
          opacity: 1;
        }

        .yct-cal-mobile__backdrop {
          position: fixed;
          inset: 0;
          z-index: 9;
        }

        .yct-cal-desktop {
          display: none;
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        @media screen and (min-width: 640px) {
          .yct-cal-mobile { display: none; }
          .yct-cal-desktop { display: block; }
        }

        .yct-cal-wrap {
          min-width: 640px;
        }

        .yct-day-headers {
          display: grid;
          gap: 1px;
          grid-template-columns: repeat(7, 1fr);
          background-color: var(--color-base-white);
          border-bottom: 1px solid var(--color-primary);
          padding-bottom: 8px;
        }

        .yct-day-header {
          padding-block: var(--btn-md-padding-block);
          text-align: center;
        }

        .yct-cal-grid {
          gap: 1px;
          display: grid;
          grid-template-columns: repeat(7, 1fr);
        }

        .yct-cell {
          min-height: 210px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacer-20);
          padding-block: var(--spacer-20);
          padding-inline: 4px;
        }

        .yct-cell--light { color: var(--color-primary); }
        .yct-cell--dark  { color: var(--color-base-white); }

        .yct-cell__date-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .yct-cell__month {
          letter-spacing: var(--font-spacing-3);
        }

        .yct-cell__events {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .yct-cell__events p {
          text-align: center;
        }

        .yct-event--inactive {
          opacity: 0.45;
        }

        /* ===== TIMELINE ===== */

        .yct-timeline {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .yct-tl-week {
          width: 100%;
          display: flex;
          flex-direction: row;
        }

        .yct-tl-week--accent { background-color: var(--color-accent); }
        .yct-tl-week--white  { background-color: var(--color-base-white); }

        .yct-tl-week__label {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          width: var(--spacer-32);
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          letter-spacing: var(--font-spacing-3);
          color: var(--color-secondary);
        }

        .yct-tl-events {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        .yct-tl-event {
          min-height: 64px;
          display: grid;
          align-items: center;
          grid-template-columns: 102px 1px 1fr;
        }

        @media screen and (min-width: 425px) {
          .yct-tl-event {
            min-height: 80px;
            grid-template-columns: 135px 1px 1fr;
          }
        }

        @media screen and (min-width: 640px) {
          .yct-tl-event {
            min-height: 96px;
            grid-template-columns: 1fr 1px 1fr;
          }
        }

        .yct-tl-event__date {
          gap: 4px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          padding: var(--spacer-20);
          color: var(--color-primary);
        }

        @media screen and (min-width: 425px) {
          .yct-tl-event__date {
            gap: 8px;
            flex-direction: row;
            align-items: center;
          }
        }

        .yct-tl-event__month {
          letter-spacing: var(--font-spacing-3);
        }

        .yct-tl-divider {
          width: 1px;
          align-self: stretch;
          background-color: var(--color-primary);
        }

        .yct-tl-event__activities {
          gap: 8px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: var(--spacer-20);
          color: var(--color-primary);
        }

        .yct-tl-activity--inactive {
          opacity: 0.45;
        }
      `}</style>

      <section id="your_campaign_timeline" className="section">
        <div className="section__container">
          <div className="section__header">
            <div className="section__header__group section__header__group--default">
              <p className="section__title section__title--light">
                YOUR CAMPAIGN TIMELINE
              </p>
              <p className="c-font c-font--h2">
                Deliverables to successfully market and sell your home
              </p>
            </div>
          </div>

          <div className="yct-tabs">
            {[
              { id: "calendar", label: "CALENDAR" },
              { id: "timeline", label: "TIMELINE" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={cn(
                  "yct-tab c-font-body c-font-body--sm-w600-wide c-font--uppercase",
                  activeTab === tab.id && "yct-tab--active",
                )}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "calendar" ? (
            <>
              <CalendarMobile />
              <CalendarDesktop />
            </>
          ) : (
            <div className="yct-timeline">
              {data.dates.map((week, weekIdx) => {
                const daysWithEvents = week
                  .map((dateStr, dayIdx) => ({
                    dateStr,
                    events: data.calendar[weekIdx][dayIdx],
                  }))
                  .filter(({ events }) => events.length > 0);

                if (daysWithEvents.length === 0) return null;

                return (
                  <div
                    key={weekIdx}
                    className={cn(
                      "yct-tl-week",
                      weekIdx % 2 === 0
                        ? "yct-tl-week--accent"
                        : "yct-tl-week--white",
                    )}
                  >
                    <div className="yct-tl-week__label">
                      <p className="c-font-body c-font-body--xs-w600-wide c-font--uppercase">
                        WEEK {weekIdx + 1}
                      </p>
                    </div>
                    <div className="yct-tl-events">
                      {daysWithEvents.map(({ dateStr, events }) => {
                        const { monthName, day } = parseDateStr(dateStr);
                        return (
                          <div key={dateStr} className="yct-tl-event">
                            <div className="yct-tl-event__date">
                              <p className="yct-tl-event__month c-font-body c-font-body--xs-w600-wide c-font--uppercase">
                                {monthName}
                              </p>
                              <p className="c-font-body c-font--h3 c-font--spacing">
                                {day}
                              </p>
                            </div>
                            <div className="yct-tl-divider" />
                            <div className="yct-tl-event__activities">
                              {events.map((event) => (
                                <p
                                  key={event.id}
                                  className={cn(
                                    "c-font-body c-font-body--md-w400-normal",
                                    !event.active &&
                                      "yct-tl-activity--inactive",
                                  )}
                                >
                                  {event.event}
                                </p>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default YourCampaignTimeline;
