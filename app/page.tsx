'use client'

import Presentation from './page-components/Presentation'
import LikelyBuyerDynamic from './page-components/LikelyBuyerDynamic'
import ComparableListings from './page-components/ComparableListings'

export default function Home() {
  return (
    <Presentation>
      <LikelyBuyerDynamic />
      <ComparableListings />
    </Presentation>
  )
}
