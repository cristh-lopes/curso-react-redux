import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <span className="text">{num} </span>
      <div>
        <button className="btn" onClick={() => setNum(num + 1)}>
          +1
        </button>
        <button className="btn" onClick={() => setNum(num - 1)}>
          -1
        </button>
        <button className="btn" onClick={() => setNum((cur) => cur + 1000)}>
          +1000
        </button>
      </div>

      <SectionTitle title="Exercício #01" />
      <input
        type="text"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className="text">{name}</span>
    </div>
  );
};

export default UseState;
