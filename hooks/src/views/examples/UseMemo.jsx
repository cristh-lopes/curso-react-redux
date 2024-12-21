import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

const sum = (n1, n2) => {
  const future = Date.now() + 2000;
  while (Date.now() < future) {}
  return Number(n1) + Number(n2);
};

const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => setResult(sum(n1,n2)), [n1,n2])
  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />
      <input
        type="number"
        className="input"
        value={n1}
        onChange={(e) => setN1(e.target.value)}
      />

      <input
        type="number"
        className="input"
        value={n2}
        onChange={(e) => setN2(e.target.value)}
      />
      <input
        type="number"
        className="input"
        value={n3}
        onChange={(e) => setN3(e.target.value)}
      />
      <span className="text">{result}</span>
    </div>
  );
};

export default UseMemo;
