import React, { Component } from 'react';
import './App.css';
import Inicio from "./inicio";
import Tablero from './Tablero';
import store from './store';
import Header from './Header';

class App extends Component {

  constructor(){
    super();
    this.state={
      vista:'inicio'
    };

    store.subscribe(()=>{
      this.setState({
          vista:store.getState().vista
      })
  })
  }

  renderVista(){
    if(this.state.vista==='inicio'){
      return <Inicio/>
    }
    else if(this.state.vista==='tablero'){
      return <Tablero/>
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        {this.renderVista()}
      </div>
    )
  }
}

export default App;
