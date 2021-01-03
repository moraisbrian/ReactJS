import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';

const app = () =>
    <div>
        <h1>Fundamentos React</h1>
        <Card titulo="Desafio Aleatório">
            <Aleatorio min={1} max={10} />
        </Card>
        <Card titulo="Fragmento">
            <Fragmento />
        </Card>
        <Card titulo="Com Parâmetro">
            <ComParametro titulo="Situação do Aluno" aluno="Marcos" nota={8.6} />
        </Card>
        <Card titulo="Primeiro Componente">
            <Primeiro />
        </Card>
    </div>

export default app;