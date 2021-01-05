import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import './App.css';

export default function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="Desafio Aleatório" color="#080">
                    <Aleatorio min={1} max={10} />
                </Card>
                <Card titulo="Fragmento" color="#00008B">
                    <Fragmento />
                </Card>
                <Card titulo="Com Parâmetro" color="#20B2AA">
                    <ComParametro titulo="Situação do Aluno" aluno="Marcos" nota={8.6} />
                </Card>
                <Card titulo="Primeiro Componente" color="#F0E68C">
                    <Primeiro />
                </Card>
            </div>
        </div>
    );
}