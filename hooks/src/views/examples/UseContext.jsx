import React, { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { AppContext } from "../../data/Store";
import DataContext from "../../data/DataContext";
import SectionTitle from "../../components/layout/SectionTitle";

const UseContext = (props) => {
  const { state, setState } = useContext(DataContext);
  function addNumber(n) {
    setState({ ...state, number: state.number + n });
  }
  const { number, text, setNumber } = useContext(AppContext);
  function addNumber1(n) {
    setNumber(number + n);
  }
  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <div className="center">
        <span className="text">{state.text}</span>
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => addNumber(-1)}>
            -1
          </button>
          <button className="btn" onClick={() => addNumber(1)}>
            +1
          </button>
        </div>
      </div>

      <SectionTitle>Exercício #02</SectionTitle>

      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>
        <div>
          <button className="btn" onClick={() => addNumber1(-1)}>
            -1
          </button>
          <button className="btn" onClick={() => addNumber1(1)}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
