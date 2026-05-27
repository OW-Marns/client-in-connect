"use client";

import Presentation from "./page-components/Presentation";
import LikelyBuyerDynamic from "./page-components/LikelyBuyerDynamic";
import ComparableListings from "./page-components/ComparableListings";
import CaseStudies from "./page-components/CaseStudies";
import KindWords from "./page-components/KindWords";
import GetYourHomeReady from "./page-components/GetYourHomeReady";
import OurSalesProcess from "./page-components/OurSalesProcess";
import WhatYourMarketingLooksLike from "./page-components/WhatYourMarketingLooksLike";
import PriceGuideAndFees from "./page-components/PriceGuideAndFees";
import MarketingYourHome from "./page-components/MarketingYourHome";

export default function Home() {
  return (
    <Presentation>
      <MarketingYourHome />
      <LikelyBuyerDynamic />
      <ComparableListings />
      <CaseStudies />
      <KindWords />
      <GetYourHomeReady />
      <OurSalesProcess />
      <WhatYourMarketingLooksLike />
      <PriceGuideAndFees />
    </Presentation>
  );
}
