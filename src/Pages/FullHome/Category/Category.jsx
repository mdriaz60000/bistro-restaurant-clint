import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1  from "../../../assets/home/slide1.jpg"
import slide2  from "../../../assets/home/slide2.jpg"
import slide3  from "../../../assets/home/slide3.jpg"
import slide4  from "../../../assets/home/slide4.jpg"
import slide5  from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
    <section>
      <SectionTitle
      subHeading={"from 1.00am to 11.00pm "}
      heading={"Order OnLine"}
      >
    </SectionTitle>
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-white mb-20"
      >
        <SwiperSlide>
         <img src={slide1} alt="" />
         <h3 className=' text-center uppercase text-4xl -mt-16'> salads</h3>
        </SwiperSlide>
        <SwiperSlide>
         <img src={slide2} alt="" />
         <h3 className=' text-center uppercase text-4xl -mt-16'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
         <img src={slide3} alt="" />
         <h3 className=' text-center uppercase text-4xl -mt-16'> soup</h3>
        </SwiperSlide>
        <SwiperSlide>
         <img src={slide4} alt="" />
         <h3 className=' text-center uppercase text-4xl -mt-16'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
         <img src={slide5} alt="" />
         <h3 className=' text-center uppercase text-4xl -mt-16'> salads</h3>
        </SwiperSlide>
       
      </Swiper>
    </section>
    );
};

export default Category;