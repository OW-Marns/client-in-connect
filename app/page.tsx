'use client'

import Presentation from './page-components/Presentation'
import LikelyBuyerDynamic from './page-components/LikelyBuyerDynamic'
import ComparableListings from './page-components/ComparableListings'
import CaseStudies from './page-components/CaseStudies'

export default function Home() {
  return (
    <Presentation>
      <LikelyBuyerDynamic />
      <ComparableListings />
      <CaseStudies />
    </Presentation>
  )
}
