import React from "react";
import IconButton from "../template/IconButton";

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map((todo) => (
      <tr key={todo._id}>
        <td className={`col-sm-10 ${todo.done ? "markedAsDone" : ""}`}>
          {todo.description}
        </td>
        <td className="col-sm-2">
          <div className="flex-end">
            <IconButton
              btnStyle="success"
              icon="check"
              hide={todo.done}
              onClick={() => props.handleMarkAsDone(todo)}
            />
            <IconButton
              btnStyle="warning"
              icon="undo"
              hide={!todo.done}
              onClick={() => props.handleMarkAsPending(todo)}
            />
            <IconButton
              btnStyle="danger"
              icon="trash-o"
              hide={!todo.done}
              onClick={() => props.handleRemove(todo)}
            />
          </div>
        </td>
      </tr>
    ));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="col-sm-10">Descrição</th>
          <th className="col-sm-2 text-right pr-2">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default TodoList;
