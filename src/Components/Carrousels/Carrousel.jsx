import { CoImage, SmallCarrousel } from "co-carrousels";
import imagen from "../../assets/images/Acronis1.jpg";
import imagen2 from "../../assets/images/Acronis2.jpg";
import imagen3 from "../../assets/images/Acronis3.jpg";
import imagen4 from "../../assets/images/Acronis4.jpg";
import imagen5 from "../../assets/images/Acronis5.jpg";

function Carrousel() {
  return (
    <div className="carrousel-container">
      <SmallCarrousel sty className="carrousel" controls="true">
        <CoImage src={imagen} className="carrousel-image" />
        <CoImage src={imagen2} className="carrousel-image" />
        <CoImage src={imagen3} className="carrousel-image" />
        <CoImage src={imagen4} className="carrousel-image" />
        <CoImage src={imagen5} className="carrousel-image" />
      </SmallCarrousel>
    </div>
  );
}

export default Carrousel;
