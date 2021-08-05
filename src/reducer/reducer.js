import {
  ELIMINAR,
  COMPLETAR,
  AGREGAR_FAVORITOS,
  AGREGAR,
} from "../actions/actionNames";
import { completar, eliminar, agregarFavorito } from "../actions/actions";

// var idTodo = 0;

const initialState = {
  task:[],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AGREGAR:
    //   const newTask = {
    //     id: idTodo++,
    //     task: action.payload.name, // se la pasamos por parametro.
    //     description: action.payload.description, // se lo pasamos por parametro
    //     complete: false,
    //     destacado: false,
    //   };
      return {
        ...state,
        // task: [newTask, ...state.task],
        task:[action.payload, ...state.task]
      };
    case COMPLETAR:
      return {
        ...state,
      };
    case ELIMINAR: // SOLO ELIMINA LAS TAREAS DE MI SECCION PENDIENTES
      return {
        ...state,
        seccionPendientes: state.seccionPendientes.filter(
          (pendiente) => pendiente.id !== action.payload
        ),
      };

    default:
        return state;
  }
  
}
