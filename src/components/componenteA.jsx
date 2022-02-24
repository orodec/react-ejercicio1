import React, { useState } from "react";
import { contacto } from "../models/contacto";
import Componenteb from "./componenteB";
import FormContact from "./form";
const Componentea = () => {
  // valores iniciales para un contacto
  const contacto1 = new contacto("Óscar", "Ródenas", "oscar@gmail.com", false);
  const contacto2 = new contacto("Ester", "Perez", "ester@gmail.com", true);
  const contacto3 = new contacto("Nuria", "Ródenas", "nuria@gmail.com", false);

  const [contacts, setcontacts] = useState([contacto1, contacto2, contacto3]);

  function removeContact(contacto) {
    let index = contacts.indexOf(contacto);
    let tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setcontacts(tempContacts);
  }
  function changeStateContact(contacto){
    let index = contacts.indexOf(contacto);
    let tempContacts = [...contacts];
    tempContacts[index].conectado = !tempContacts[index].conectado;
    setcontacts(tempContacts);

  }

  function addContact(contacto){
    let tempContacts = [...contacts];
    tempContacts.push(contacto);
    setcontacts(tempContacts);
  }
  return (
    <div>
      <div className="card col-12" >
        <div className="card-body">
          <h5 className="card-title mb-2 text-muted">Contact List</h5>

          <div className="card-text mb-2 text-muted">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Connect</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
              <FormContact add={addContact}></FormContact>
                {contacts.map((contacto, index) => {
                  return (
                    <Componenteb
                      key={index}
                      contacto={contacto}
                      remove={removeContact}
                      changeState={changeStateContact}
                    ></Componenteb>
                  );
                })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Componentea;
