//deberiamos importar los types, para usar sus acciones
import { titleChangeTypes } from "../types";

const {NEW_TITLE} = titleChangeTypes;

const initialState = {
    title: "Stack 2 - Pantalla 1",
    saludo: "Hola Mundo!",
    description: "Una simple implementacion de Redux",
    cantidad: 4,
}

const msgReducer = (state = initialState, action) =>{
    switch (action.type) {
        case NEW_TITLE:
            return {
                ...state,
                title: action.title,
                saludo: action.saludo,
            }
        default:
            return state
    }
}

export default msgReducer;