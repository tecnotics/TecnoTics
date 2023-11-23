
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carrousel({
  selectedItem,
  onChange,
  showThumbs,
  infiniteLoop,
  autoPlay,
  interval,
  images,
}) {
  const renderSlides = () => {
    return images.map((image, index) => (
      <div key={index} className="carousel__slide">
        <img src={image} alt={`Slide ${index}`} />
      </div>
    ));
  };

  return (
    <Carousel
      selectedItem={selectedItem}
      onChange={onChange}
      showThumbs={showThumbs}
      infiniteLoop={infiniteLoop}
      autoPlay={autoPlay}
      interval={interval}
    >
      {renderSlides()}
    </Carousel>
  );
}

export default Carrousel;
