import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import slider1 from '@assets/slide-1.png';
import slider2 from '@assets/slide-2.png';
import slider3 from '@assets/slide-3.png';
import { register } from 'swiper/element';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

register();

export function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Keyboard]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      keyboard={{
        enabled: true,
      }}
    >
      <SwiperSlide>
        <img
          className="h-80 w-full select-none object-cover"
          src={slider1}
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="h-80 w-full select-none object-cover"
          src={slider2}
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="h-80 w-full select-none object-cover"
          src={slider3}
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}
