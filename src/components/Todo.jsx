import React from 'react'




export const Todo = ({name,key,description,complete,destacado}) => {

    function handleCheck(){
        // stateComplete(todo.id)

    }
    
    function handleDelete(){
        // deleteTodo(todo.id)
    }



    return (
        <div style={{display:"flex"}}>
            {/* <input type="checkbox" onClick={handleCheck}/> */}
   
            <div style={{color:"white", textDecoration: complete ? "line-through": "" }} >   
                 <p>{name}</p>
                 <p>{description}</p>
            </div>
            {/* <button onClick={handleDelete}>Eliminar</button> */}
            
        </div>
    )
}
