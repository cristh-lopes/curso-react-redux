import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    salvarCliente,
    novoCliente,
    clienteExcluido,
    clienteSelecionado,
    clientes,
    cliente,
    tabelaVisivel,
    formularioVisivel,
    exibirTabela,
  } = useClientes();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-900 to-gray-900">
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel && (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="indigo" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        )}
        {formularioVisivel && (
          <Formulario
            cliente={cliente}
            cancelado={() => {
              exibirTabela();
            }}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
}
