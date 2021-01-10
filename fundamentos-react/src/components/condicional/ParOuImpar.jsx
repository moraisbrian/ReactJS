import React from 'react';

export default function ParOuImpar(props) {
    const ePar = props.numero % 2 === 0;
    return (
        <div>
            { ePar ? <span>Par</span> : <span>Impar</span> }
        </div>
    );
}