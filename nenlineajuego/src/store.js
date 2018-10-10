import {createStore} from 'redux';


let defaultState={
    tamaño: '',
    vista: 'inicio'
};

const metodos=(state,action)=>{
    if(action.type==="CAMBIAR_TAMAÑO"){
        return {
            ...state,
            tamaño: action.tamaño
        }
    }

    if(action.type==="CAMBIAR_VISTA"){
        return {
            ...state,
            vista: action.vista
        }
    }
}

export default createStore(metodos,defaultState);