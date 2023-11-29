import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import "./Carrousel.css"; // Importa tu hoja de estilos
import { useNavigate } from "react-router-dom";

const Carrousel = ({ slides }) => {
  const navigate = useNavigate();

  const handleSlideClick = (path) => {
    navigate(path);
  };

  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      speed={600}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      parallax={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="swiper-slide-custom"
          onClick={() => handleSlideClick(slide.path)}
        >
          <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="carousel-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrousel;
