import { Swiper } from 'swiper/react'
import { cn } from '../utils/cn'

const Carousel = (props) => {
  const { className, children, ...rest } = props
  return (
    <Swiper {...rest} className={cn('carousel-swiper', className)}>
      {children}
    </Swiper>
  )
}

export default Carousel
