import { useEffect, useState } from "react";
import React from 'react';
import { getAllUsers } from "./FetchService";

const Fetchexample = () => {

const [users, setUsers] = useState([]);

useEffect(() => {
    obtainUsers();
    return () => {
      
    };
}, []);

const obtainUsers =()=>{
    getAllUsers()
    .then((response)=>{
    console.log('All users:', response.data)
    setUsers(response.data)
    })
    .catch((error) => {
        alert(`Error while tetriving the useres: ${error}`)
    })
    .finally(() => {
        
        console.log('Ended obtaining users:');
        console.table(users);

    })
}

    return (
        <div>
            <h2>
                Users:      
           </h2>
           {users.map((users, index) => (
               <p key={index}>
                   {users.first_name} {users.last_name}
               </p>
           )
           )}
        </div>
    );
}

export default Fetchexample;
