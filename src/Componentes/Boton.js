import React from "react";
import "../Styles/Boton.css"

function Boton({texto,click,manejarClic }) {
  return (
    <button
      className={click ? 'boton-click' : 'boton-reiniciar'}
      onClick={manejarClic}>
      {texto }
    </button>      
  );
}
export default Boton;