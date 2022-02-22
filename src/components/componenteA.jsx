import React from "react";
import { contacto } from "../models/contacto";
import Componenteb from "./componenteB";

const Componentea = () => {
  // valores iniciales para un contacto
  const contactoUno = new contacto(
    "Óscar",
    "Ródenas",
    "añlsdfkjñ@gmail.com",
    false
  );

  return (
    <div>
      <h1>
        {" "}
        contacto: {contactoUno.nombre} {contactoUno.apellido}
      </h1>
      <h2> email: {contactoUno.email}</h2>
      <Componenteb contacto={contactoUno}></Componenteb>
    </div>
  );
};

export default Componentea;
