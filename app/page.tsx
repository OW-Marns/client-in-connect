"use client";

import Presentation from "./page-components/Presentation";
import LikelyBuyerDynamic from "./page-components/LikelyBuyerDynamic";
import ComparableListings from "./page-components/ComparableListings";
import CaseStudies from "./page-components/CaseStudies";
import KindWords from "./page-components/KindWords";
import GetYourHomeReady from "./page-components/GetYourHomeReady";
import OurSalesProcess from "./page-components/OurSalesProcess";
import WhatYourMarketingLooksLike from "./page-components/WhatYourMarketingLooksLike";

export default function Home() {
  return (
    <Presentation>
      <LikelyBuyerDynamic />
      <ComparableListings />
      <CaseStudies />
      <KindWords />
      <GetYourHomeReady />
      <OurSalesProcess />
      <WhatYourMarketingLooksLike />
    </Presentation>
  );
}
