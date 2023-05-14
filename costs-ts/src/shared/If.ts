import React from "react";

function If(props: IfProps) {
    const arrayChildren = React.Children.toArray(props.children);
    
    const elseChild = arrayChildren.filter((child: any) => {
        return child.type && child.type.name === 'Else';
    })[0] as any;

    const ifChild = arrayChildren.filter((child: any) => {
        return child !== elseChild;
    }) as any;
    
    if (props.condition) {
        return ifChild;
    } else if (elseChild) {
        return elseChild;
    } else {
        return;
    }
}

type IfProps = {
    condition: any;
    children: any[] | any;
}

export default If;
export const Else = (props: any) => props.children;