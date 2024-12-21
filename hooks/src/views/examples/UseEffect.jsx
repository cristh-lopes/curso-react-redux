import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(n) {
  const num = parseInt(n);
  return isNaN(num) || num < 0
    ? -1
    : num === 0
    ? 1
    : calcFatorial(num - 1) * num;
}
const UseEffect = (props) => {
  const [fatorial, setFatorial] = useState(1);
  const [number, setNumber] = useState(1);

  useEffect(() => setFatorial(calcFatorial(number)), [number]);

  const [status, setStatus] = useState("Ímpar");

  useEffect(() => setStatus(number % 2 === 0 ? "Par" : "Ímpar"), [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>{" "}
          <span className="text red">{fatorial}</span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <div>
          <span className="text">Status:</span>{" "}
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
