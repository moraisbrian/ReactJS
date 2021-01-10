import React from 'react';
import DiretaFilho from './DiretaFilho';

export default function DiretaPai(props) {
    return (
        <div>
            <DiretaFilho nome="Marcos" idade={20} maior={true} />
            <DiretaFilho nome="João" idade={17} maior={false} />
        </div>
    );
}