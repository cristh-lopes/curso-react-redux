import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { numberAdd2, login } from "../../store/actions";
import { initialState, reducer } from "../../store";
import SectionTitle from "../../components/layout/SectionTitle";

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
          <button className="btn" onClick={() => login(dispatch, "Cristhian")}>
            Login
          </button>
          <button className="btn" onClick={() => numberAdd2(dispatch)}>
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
          onClick={() => dispatch({ type: "number_addN", payload: -9 })}
        >
          -9
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "numberAddN", payload: 11 })}
        >
          +11
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
