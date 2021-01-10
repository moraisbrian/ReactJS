import React, { useState } from 'react';
import './Mega.css';

export default function Mega(props) {

    const [quantidade, setQuantidade] = useState(6)
    const [valorSorteado, setValorSorteado] = useState(0);

    function gerarNumeros() {
        let numeros = [];

        if (quantidade > 0) {
            while (numeros.length < quantidade) {
                const numero = Math.floor(Math.random() * (60 - 0)) + 0;

                const filtro = numeros.filter(n => n === numero);
                if (filtro.length === 0) {
                    numeros.push(numero);
                }
            }
            setValorSorteado(numeros.join(', '));
        }
    }

    return (
        <div className="Mega">
            <label>Quantidade de Números</label>
            <input type="number" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
            <label>Números Sorteados</label>
            <input type="text" readOnly value={valorSorteado} />
            <button onClick={gerarNumeros}>Sortear</button>
        </div>
    );
}