import {COMPLETAR, ELIMINAR,AGREGAR_FAVORITOS, AGREGAR } from './actionNames' 


// PARA EXPORTAR FUNCIONES NO USAR ARROW FUNCTION
export function completar(id){  
   return {
       type: COMPLETAR,
       payload: id
   }
}

export function eliminar(id){
    return {
        type: ELIMINAR,
        payload: id
    }
 }


 export function agregarFavorito(id){
    return {
        type: AGREGAR_FAVORITOS,
        payload: id
    }
 }

 var idTodo = 0;
 export function agregar(payload){
    return {
        type: AGREGAR,
        payload: {
            id: idTodo++,
            task: payload.name, 
            description: payload.description, 
            complete: false,
            destacado: false,
          }
    }
 }