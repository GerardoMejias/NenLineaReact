import React, { Component } from 'react';
import store from './store';
import './inicio.css'

class Inicio extends Component {
    constructor(props){
        super(props);
        this.state={
          tamaño: '',
          ganar: '',
          vista:'inicio'
        };

        this.tamaño=React.createRef();
        this.ganar=React.createRef();
        this.darValor=this.darValor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        var t = this.tamaño.current.value;
        var g = this.ganar.current.value;
        console.log("Tamaño: " + t);
        console.log("Ganar: " + g);
        
        if (isNaN(t) || isNaN(g)) {
          alert("Valor no válido");          
        }else if(t - g < 1){
          alert("El tamaño debe ser mayor a la condición de victoria (Números con decimales serán redondeados hacia abajo)")
        }else {
          this.darValor();
        } 
      }

  darValor(){

    let a=Math.floor(this.tamaño.current.value);
    let b=Math.floor(this.ganar.current.value);

    console.log("el input es:" + a);

        
    store.dispatch({
      type: 'CAMBIAR_TAMAÑO',
      tamaño: a
    });

    store.dispatch({
      type: 'CAMBIAR_VISTA',
      vista:'tablero'
    })


    let url= 'http://localhost:3001/juego';
    let data={"tam": a, "gane": b};

    fetch(url,{
      method:'POST',
      body: JSON.stringify(data),
      cors:'disabled',
      credentials:'same-origin',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(err => console.error('error'))
    .then(response => console.log("el api responde: \nTamaño: " + response.tam + " Condición de gane: " + response.gane));

  }

  render() {
    return (
      <div className="card">

        <div className="card-header">
          Construir Tablero
        </div>

        <form onSubmit={this.handleSubmit} className="card-body">

          <div className="form-group">
            <input className="form-control" type="text" name="tamaño" value={this.state.tamaño} onChange={this.handleChange} placeholder="Tamaño del tablero" ref={this.tamaño} required />
          </div>
          <div className="form-group">
            <input className="form-control" type="text" name="ganar" value={this.state.ganar} onChange={this.handleChange} placeholder="Cantidad para ganar" ref={this.ganar} required/>
          </div>
          <button className="btn btn-primary" type="submit" value="Submit">
            Aceptar
          </button> 

        </form>     

      </div>
    );
  }
}

export default Inicio;
