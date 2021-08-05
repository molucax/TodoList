import React, { useState } from "react";
import { connect } from "react-redux";
import { agregar } from "../actions/actions.js";

export function TodoForm({ agregar }) {
  const [text, setText] = useState({ name: "", description: "" });

  function handleInput(e) {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  }

  function handleEnviar(e) {
    e.preventDefault();
    agregar(text); // al enviar disparo el agregar
    setText({ name: "", description: "" });
  }

  return (
    <form onSubmit={handleEnviar}>
      <input
        type="text"
        value={text.name}
        onChange={handleInput}
        name="name"
        placeholder="Nombre..."
      />
      <input
        type="text"
        value={text.description}
        onChange={handleInput}
        name="description"
        placeholder="Descripcion..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

function mapDispatchToProps(dispatch) {
  // PARA DESPACHAR AL STORE!!
  return {
    agregar:(task)=>dispatch(agregar(task)), // es indistinto el nombre que le ponga.
  };
}

export default connect(null, mapDispatchToProps)(TodoForm); // no necesito nada de mi estado por lo que no hago un mapsStateToProps
