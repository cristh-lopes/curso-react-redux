import React from "react";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

const TodoForm = (props) => (
  <div role="form" className="todoForm">
    <div className="flex-end">
      <input
        id="description"
        className="form-control mr-1"
        placeholder="Adicione uma tarefa"
        onChange={props.handleChange}
        value={props.description}
      />
      {/* Mudamos o nome da propriedade style para btnStyle, pois o Lint reclamava e essa é a melhor maneira de contornar esse problema */}
      <IconButton
        btnStyle="primary"
        icon="plus"
        onClick={props.handleAdd}
      ></IconButton>
    </div>
  </div>
);

export default TodoForm;
