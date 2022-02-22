import React, {useState }from 'react';
import PropTypes from 'prop-types';
import { contacto } from '../models/contacto';


const Componenteb = ({contacto}) => {
    
    const [estado, setestado] = useState(contacto.conectado);

    function cambiarEstado (estado)  {

        let cambio = !estado 
        setestado(cambio)
   }

  
   return (
        <div>
        
        <h3> estado: {estado ? 'Contacto en linea':'Contacto no disponible'}</h3>
            <button onClick={cambiarEstado}>Cambiar estado</button>
        </div>
    );
};


Componenteb.propTypes = {
    contacto: PropTypes.instanceOf(contacto)
};


export default Componenteb;
