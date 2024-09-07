

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminCss from './styles/Admin.module.css'


function Admin() {
    const [dados, setDados] = useState([]);

    // Faz a requisição GET para o backend Flask
    useEffect(() => {
        axios.get('http://localhost:3001/dados')
            .then(response => setDados(response.data))
            .catch(error => console.error('Erro ao buscar os dados:', error));
    }, []);
    return (
        <>
            <div>
                <div id={AdminCss.container}>

                    <div id={AdminCss.usuarios} className={AdminCss.janela}>
                        <h1>Usuários</h1>
                        <ul>
                            {/* Mapeia cada objeto "dado" na array "dados" para criar um item de lista (li) */}
                            {dados.map(function (dado) {
                                return <li key={dado.id}>{dado.id} {dado.nome}</li>
                            })}
                        </ul>
                    </div>

                    <div id={AdminCss.livros} className={AdminCss.janela}>
                        <h1>Livros</h1>
                        <h2>Adicionar Livro</h2>
                    </div>

                    <div id={AdminCss.mensagens} className={AdminCss.janela}>
                        <h1>Mensagens</h1>
                    </div>

                    <div id={AdminCss.pedidos} className={AdminCss.janela}>
                        <h1>Pedidos</h1>
                    </div>

                    <div id={AdminCss.tags} className={AdminCss.janela}>
                        <h1>Tags</h1>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Admin