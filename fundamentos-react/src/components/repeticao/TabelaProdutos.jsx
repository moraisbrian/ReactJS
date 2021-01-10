import React from 'react';
import produtos from '../../data/pordutos';
import './TabelaProdutos.css';

export default function TabelaProdutos(props) {
    const linhas = produtos.map((produto, i) => {
        return (
            <tr key={ produto.id } className={ i % 2 === 0 ? 'par' : 'impar' }>
                <td>{ produto.id }</td>
                <td>{ produto.nome }</td>
                <td>R$ { produto.preco.toFixed(2) }</td>
            </tr>
        );
    })
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    { linhas }
                </tbody>
            </table>
        </div>
    );
}