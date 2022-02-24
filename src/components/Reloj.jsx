import React, { Component, useEffect, useState } from 'react'
// import ‘../../styles/clock.scss’;

export class Clock extends Component {
    constructor(props) {
        super(props);
        // Estado privado del component
        this.state = {
            // Se genera una fecha como estado inicial del componente
            fecha: new Date(),
            edad: 0,
            nombre: 'Martín',
            apellidos: 'San José'
        };
    }
    componentDidMount(){
        this.timerID = setInterval (
            () => this.tick(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval (this.timerID);
    }
    render() {
        return (
            <div>
                <h2>
                    Hora Actual:
                    {this.state.fecha.toLocaleTimeString()}
                </h2>
                <h3>{this.state.nombre} {this.state.apellidos}</h3>
                <h1>Edad: {this.state.edad}</h1>
            </div>
        )
    }
    tick(){
        this.setState((prevState) => {
            let edad = prevState.edad +1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        });
    }
}




export const ClockFuntion = () => {
   

    let initialState={
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [estado, setestado] = useState(initialState);
   
    
    
    useEffect(() => {
         const timerID = setInterval (() => {
                let cambioEstado={
                fecha: new Date(),
                edad: estado.edad++,
                nombre: estado.nombre,
                apellidos: estado.apellidos
                }
                setestado(cambioEstado)
               
                }, 1000);

        return () => {
            console.log('Componente va a desaparecer');
            document.title = "Tiempo detenido";
            clearInterval(timerID);
        }
     
    }, []);



    return (
        <div>
            <h2>
                    Hora Actual:
                    {estado.fecha.toLocaleTimeString()}
                </h2>
                <h3>{estado.nombre} {estado.apellidos}</h3>
                <h1>Edad: {estado.edad}</h1>
               
        </div>

    );

    
};





