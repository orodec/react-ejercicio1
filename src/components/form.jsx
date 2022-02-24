import React,{useRef} from 'react';
import PropTypes from 'prop-types';
import { contacto } from "../models/contacto";

const FormContact = ({add}) => {

    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const emailRef = useRef("");

    function addContact(){
        const NewContacto = new contacto
        (firstNameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
            );
            add(NewContacto);
    }

    return (
        <tr>
      <td><i onClick={addContact} className="bi bi-person-plus-fill task-action" style={{ color: "green" }}></i></td>
      <td></td>
      <td><input ref={firstNameRef} type='text' placeholder='First Name' size='7'></input></td>
      <td><input ref={lastNameRef} type='text' placeholder='Last Name' size='7'></input></td>
      <td><input ref={emailRef} type='text' placeholder='Email' size='15'></input></td>
    </tr>
    );
};


FormContact.propTypes = {
add: PropTypes.func.isRequired
};


export default FormContact;
