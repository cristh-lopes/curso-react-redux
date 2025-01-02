import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import { useEffect, useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";

export default function Home() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const [cliente, setCliente] = useState(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela");

  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      setVisivel("tabela");
    });
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("formulario");
  }

  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("formulario");
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
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
