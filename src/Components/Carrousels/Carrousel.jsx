import { SmallCarrousel, CoImage , FullCarrousel, } from "co-carrousels";
import imagen from "../../assets/images/Acronis1.jpg";
import imagen2 from "../../assets/images/Acronis2.jpg";
import imagen3 from "../../assets/images/Acronis3.jpg";

function Carrousel() {
  return (
    <>
      <div style={{
        padding: "0px"}} className="container">
        <div className="wrapp">
          <FullCarrousel controls="true">
            <CoImage src={imagen} />
            <CoImage src={imagen2} />
            <CoImage src={imagen3} />
          </FullCarrousel>
        </div>
      </div>
    </>
  );
}

export default Carrousel;
