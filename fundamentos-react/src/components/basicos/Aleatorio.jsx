import React from 'react';

export default function Aleatorio(props) {
    const { min, max } = props;
    return (
        <div>
            <h2>Aleatório</h2>
            <p>Valor Mínimo: { min } </p>
            <p>Valor Máximo: { max }</p>
            <p>Número Escolhido: { Math.round(Math.random() * (max - min) + min) }</p>
        </div>
    );
}