import React, { Component } from 'react';
import './Contador.css';

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    };

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    };

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        });
    };

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <p>Valor { this.state.numero }</p>
                <label htmlFor="passoInput">Passo</label>
                <input type="number" id="passoInput" value={this.state.passo} onChange={this.setPasso}/>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        );
    }
}