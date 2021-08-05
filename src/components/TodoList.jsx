import React from "react";
import { connect } from "react-redux";
import { Todo } from "./Todo";
import { agregar } from "../actions/actions";

export const TodoList = (props) => {
  console.log(props);
  // if(!task){
  //   return <h1>Agregar tarea</h1>
  // }
  // else{
  return (
    <ul>
      {props.task &&
        props.task.map((todo) => (
          <Todo
            name={todo.name}
            key={todo.id}
            description={todo.description}
            complete={todo.complete}
            destacado={todo.destacado}
          />
        ))}
    </ul>
  );
};

// function mapsStateToProps(state) {
//   return {estado: state.task}
// }

// const mapStateToProps = (state) => {
//     return {
//       estado: agregar(state.task)
//     }
//   }
// export default connect(mapStateToProps, null)(TodoList);
export default connect(({ task }) => ({ task }), null)(TodoList);
