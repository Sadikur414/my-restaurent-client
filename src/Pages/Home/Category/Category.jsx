import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
const Category = () => {
  return (
    <div>
      <SectionTitle
        heading={"oredr online"}
        subHeading={"From 11:00am to 10:00pm"}
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-5"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <div className="text-4xl text-white text-center -mt-16 uppercase">
            Salads
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <div className="text-4xl text-white text-center -mt-16 uppercase">
            Pizza
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <div className="text-4xl text-white text-center -mt-16 uppercase">
            Soup
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <div className="text-4xl text-white text-center -mt-16 uppercase">
            Desserts
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <div className="text-4xl text-white text-center -mt-16 uppercase">
            Salads
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
