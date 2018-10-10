import React, { Component } from 'react';
import store from './store';

class Tablero extends Component {
  constructor(props){
    super(props);
    this.state={
        tamaño: store.getState().tamaño,
        jugador: 0,
        vista:'inicio'
    };

  }

  obtenerMatriz(a, b){

    let url= 'http://localhost:3001/matriz';
    let data={"col": a, "jugador": b};

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
    .then(response => console.log());
  }

  dibujarTablero(tam){

    document.write('<table name"tblMatrices" id="tblMatrices" border=1>')
    document.write('<tr>')

    document.write('<td align="center" valing="middle">')
    document.write('<table name="tblMtzA">')

    for (var i = 0; i < tam; i++) {
      document.write('<tr>')

      for (var j = 0; j < tam; j++) {
        document.write('<td><input type="button" size="1" maxlength="2" onClick={this.obtenerMatriz(j, this.state.jugador)}/></td>')
      }

      document.write('</tr>')
    }

    document.write('</tr>')
    document.write('</table>');
  }

  render() {
    return (
      <div className="App">
        {this.dibujarTablero(this.state.tamaño)}
      </div>
    );
  }
}

export default Tablero;
