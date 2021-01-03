import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

const app = () =>
    <div>
        <h1>Fundamentos React</h1>
        <Fragmento />
        <ComParametro titulo="Situação do Aluno" aluno="Marcos" nota={8.6} />
        <Primeiro />
    </div>

export default app;