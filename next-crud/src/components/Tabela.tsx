import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaPops {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaPops) {
  const exibirAcoes = props.clienteSelecionado || props.clienteExcluido;

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes && <th className="p-4">Ações</th>}
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => (
      <tr
        className={`${
          i % 2 === 0 ? "bg-opacity-20" : "bg-opacity-30"
        } bg-gray-700`}
        key={cliente.id}
      >
        <td className="text-left p-4">{cliente.id}</td>
        <td className="text-left p-4">{cliente.nome}</td>
        <td className="text-left p-4">{cliente.idade}</td>
        {exibirAcoes && renderizarAcoes(cliente)}
      </tr>
    ));
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center items-center">
        {props.clienteSelecionado && (
          <button
            className={`
             flex justify-center items-center
             text-green-400 rounded-full p-2 m-1
             hover:bg-gray-700 hover:bg-opacity-50
           `}
            onClick={() => props.clienteSelecionado?.(cliente)}
          >
            {IconeEdicao}
          </button>
        )}

        {props.clienteExcluido && (
          <button
            className={`
            flex justify-center items-center
            text-red-400 rounded-full p-2 m-1
            hover:bg-gray-700 hover:bg-opacity-50
          `}
            onClick={() => props.clienteExcluido?.(cliente)}
          >
            {IconeLixo}
          </button>
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="bg-gradient-to-r from-indigo-800 to-indigo-700">
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
