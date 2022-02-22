import React, { useState } from "react";
import PropTypes from "prop-types";
import { contacto } from "../models/contacto";

const Componenteb = ({ contacto }) => {
  const [estado, setestado] = useState(contacto.conectado);

  return (
    <div>
      <h3>
        {" "}
        estado: {estado ? "Contacto en linea" : "Contacto no disponible"}
      </h3>
      <button onClick={() => (estado ? setestado(false) : setestado(true))}>
        Cambiar Estado
      </button>
    </div>
  );
};

Componenteb.propTypes = {
  contacto: PropTypes.instanceOf(contacto),
};

export default Componenteb;
