import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import { useState } from "react";

export default function Home() {
  const [cliente, setCliente] = useState(Cliente.vazio());
  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela");

  const clientes = [
    new Cliente("Cristhian", 23, "1"),
    new Cliente("Laura", 20, "2"),
    new Cliente("Kaio", 25, "3"),
    new Cliente("Eduarda", 19, "4"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("formulario");
  }

  function clienteExcluido(cliente: Cliente) {
    console.log("Excluir... ", cliente.nome);
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("formulario");
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
    setVisivel("tabela");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-900 to-gray-900">
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" && (
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
        {visivel === "formulario" && (
          <Formulario
            cliente={cliente}
            cancelado={() => {
              setVisivel("tabela");
            }}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
}
