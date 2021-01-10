import React, { useState } from 'react';
import './Input.css';

export default function Input(props) {
    const [valor, setValor] = useState('Inicial');

    // function quandoMudar(e) {
    //     setValor(e.target.value);
    //     console.log(valor)
    // }

    return (
        <div className="Input">
            <div className="Input-Flex">
                <label>Edição</label>
                <input type="text" value={valor} onChange={e => setValor(e.target.value)} />
                <label>Leitura</label>
                <input type="text" value={valor} readOnly />
                <label>Não Controlado</label>
                <input type="text" value={ undefined } />
            </div>
        </div>
    );
}