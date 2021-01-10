import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

export default function IndiretaPai(props) {
    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [maior, setMaior] = useState(false);

    function fornecerInformacoes(nome, idade, maior) {
        setNome(nome);
        setIdade(idade);
        setMaior(maior);
    }

    return (
        <div>
            <div>Pai</div>
            <span>{ nome } - { idade } { maior ? 'Verdadeiro' : 'Falso' }</span>
            <IndiretaFilho quandoClicar={fornecerInformacoes} />
        </div>
    );
}