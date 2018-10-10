import React, { Component } from 'react';
import './Header.css';
import logo from './logo.svg';

export default class Header extends Component {
    render(){
        return(
            <header>
                <div className="titulo">N en Línea con: </div>
                <img src={logo} className="App-logo" alt="logo" />
                <div className="titulo">React</div>             
            </header>            
        );
    }
}