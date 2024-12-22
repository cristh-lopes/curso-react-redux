import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  //foco...
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "number_add2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: action.payload };
    case "number_mult7":
      return { ...state, number: state.number * 7 };
    case "number_div25":
      return { ...state, number: state.number / 25 };
    case "number_parseInt":
      return { ...state, number: parseInt(state.number) };
    case "number_addN":
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        <span className="text">{state.user || "Sem Usuário"}</span>
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Cristhian" })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_add2" })}
          >
            +2
          </button>
        </div>
      </div>
      <SectionTitle title="Exercício #02" />
      <div>
        <button
          className="btn"
          onClick={() => dispatch({ type: "number_mult7" })}
        >
          *7
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "number_div25" })}
        >
          /25
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "number_parseInt" })}
        >
          Parse Int
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "number_addN", payload: 5 })}
        >
          +N
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
