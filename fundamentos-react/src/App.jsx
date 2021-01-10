import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';
import './App.css';

export default function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="Desafio Megasena">
                    <Mega />
                </Card>
                <Card titulo="#12 - Contador" color="#424242">
                    <Contador numeroInicial={0} passoInicial={10} />
                </Card>
                <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                    <Input />
                </Card>
                <Card titulo="#10 - Comunicação Indireta" color="#59323C">
                    <IndiretaPai />
                </Card>
                <Card titulo="#9 - Comunicação Direta" color="#00008B">
                    <DiretaPai />
                </Card>
                <Card titulo="#8 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={6} />
                    <UsuarioInfo usuario={{ nome: 'Brian' }} />
                    <UsuarioInfo usuario={{ email: 'contato@contato.com' }} />
                </Card>
                <Card titulo="#7 - Desafio Repetição" color="#080">
                    <TabelaProdutos />
                </Card>
                <Card titulo="#6 - Repetição" color="#FF4C65">
                    <ListaAlunos />
                </Card>
                <Card titulo="#5 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>
                <Card titulo="#4 - Desafio Aleatório" color="#080">
                    <Aleatorio min={1} max={10} />
                </Card>
                <Card titulo="#3 - Fragmento" color="#00008B">
                    <Fragmento />
                </Card>
                <Card titulo="#2 - Com Parâmetro" color="#20B2AA">
                    <ComParametro titulo="Situação do Aluno" aluno="Marcos" nota={8.6} />
                </Card>
                <Card titulo="#1 - Primeiro Componente" color="#F0E68C">
                    <Primeiro />
                </Card>
            </div>
        </div>
    );
}