import React, { cloneElement } from 'react';

export default function Familia(props) {
    return (
        <div>
            <h2>Filhos</h2>
            { 
                // React.Children.map(props.children, child => {
                //     return cloneElement(child, props);
                // })

                props.children.map((child, i) => {
                    return cloneElement(child, { ...props, key: i });
                })
            }
        </div>
    );
}