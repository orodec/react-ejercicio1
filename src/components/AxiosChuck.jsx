import React, { useState, useEffect } from 'react';
import {getJock} from './AxiosService'
import Button from '@mui/material/Button';

const Axioschuck = () => {
    
  
    
    const [jock, setjock] = useState('');
    const [good, setgood] = useState(0);
    const [bad, setbad] = useState(0);
    const [visible, setvisible] = useState(false);
    
    useEffect(() => {
        chuck(); 
    }, []);
    
    

    const chuck = () =>{    
        getJock()
        .then((response) => {   
                setjock(response.data.value) 
                   
        })
        .catch((error) => {
            alert(`Somethin went wrong: ${error}`);
        })
        setvisible(true)   
        console.log('el valor de visible: ' + visible)
    };

    function valorar (voto){
        if (voto){
            setgood(good + 1)
        }else{
            setbad(bad + 1)
        }
        setvisible(false)   
        console.log('el valor de visible: ' + visible)
    }

console.log(jock)

    return (
        <div>
        <h1>Chuk said</h1>
            <p>{jock}</p>
            <p><Button variant="contained" onClick={chuck}>Next</Button></p>
            
               {visible ? 
            <Button style={{margin: 10}} variant="contained" onClick={()=>valorar(true)}>good</Button>
                :
                <Button style={{margin: 10}} disabled variant="contained" onClick={()=>valorar(true)}>good</Button> } 
           
            
           
                {visible ? <Button style={{margin: 10}} variant="contained" onClick={()=>valorar(false)}>bad</Button>
            :
            <Button style={{margin: 10}} disabled variant="contained" onClick={()=>valorar(false)}>bad</Button> }
           
            

            
            <p>good jocks {good}</p>
            <p>bad jocks {bad}</p>

        </div>
    );
}

export default Axioschuck;
