import React, { Component } from 'react';
import store from './store';

class Ficha extends Component {
    constructor(props){
        super(props);
        this.state={
            fila: 0,
            columna: 0,
            jugador: 0,
            vista:'inicio'
        };

    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.tamaño}</h1>
            </div>
        );
    }
}

export default Ficha;
