
import PropTypes from "prop-types";
import { contacto } from "../models/contacto";

const Componenteb = ({ contacto, remove, changeState }) => {
  function estado() {
    if (contacto.conectado) {
      return (
        <i
          onClick={() => changeState(contacto)}
          className="bi-toggle-on task-action"
          style={{ color: "green" }}
        ></i>
      );
    }
    return (
      <i
        onClick={() => changeState(contacto)}
        className="bi-toggle-off task-action"
        style={{ color: "gray" }}
      ></i>
    );
  }

  return (
    <tr>
      <td>
        {" "}
        <i
          className="bi-trash task-action"
          style={{ color: "tomato" }}
          onClick={() => remove(contacto)}
        ></i>
      </td>
      <td> {estado()}</td>
      <td>{contacto.nombre}</td>
      <td>{contacto.apellido}</td>
      <td>{contacto.email}</td>
    </tr>
  );
};

Componenteb.propTypes = {
  contacto: PropTypes.instanceOf(contacto),
  remove: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default Componenteb;
