import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";


import App from './App.jsx'
import Produtos from './Produtos.jsx'
import Categorias from './Categorias.jsx'
import Contato from './Contato.jsx'
import CarrinhoDeCompras from './CarrinhoDeCompras.jsx';
import Admin from './Admin.jsx';
import Login from './Login.jsx';
import Teste from './Teste.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "produtos",
    element: <Produtos />
  },
  {
    path: "contato",
    element: <Contato />
  },
  {
    path: "categorias",
    element: <Categorias />
  },
  {
    path: "carrinho_de_compras",
    element: <CarrinhoDeCompras />
  },
  {
    path: "admin",
    element: <Admin />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "teste",
    element: <Teste />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
