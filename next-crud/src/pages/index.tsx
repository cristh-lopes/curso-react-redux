import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";

export default function Home() {
  const clientes = [
    new Cliente("Cristhian", 23, "1"),
    new Cliente("Laura", 20, "2"),
    new Cliente("Kaio", 25, "3"),
    new Cliente("Eduarda", 19, "4"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log("Excluir... ", cliente.nome);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-900 to-gray-900">
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">

        <Botao className="mb-4" cor="indigo">Novo Cliente</Botao>
        </div>
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  );
}
