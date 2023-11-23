import "./Servicio.css"

function Servicio(props) {
  return (
    <div className="servicio">
      <i className={props.iconClass}></i>
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
    </div>
  );
}

export default Servicio;
