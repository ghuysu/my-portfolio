import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { ImageSliderProps } from "../interface";

const ImageSlider: React.FC<ImageSliderProps> = ( { imageUrls } ) => {
  return (
    <div className="text-black">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
            bulletClass: 'swiper-pagination-bullet custom-bullet'
          }}
        autoplay={{ delay: 3000 }}
        loop={true}>
        {
            imageUrls.map((imageUrl, index) => (
                <SwiperSlide>
                    <img
                        src={imageUrl}
                        alt={index.toString()}
                        style={{ width: "100%", height: "auto" }}
                    />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
};

export default ImageSlider;
