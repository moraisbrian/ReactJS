import React from "react";

function If(props: IfProps) {
    let elseChild: any;
    let ifChild: any;

    const arrayChildren = React.Children.toArray(props.children);
    
    elseChild = arrayChildren.filter((child: any) => {
        return child.type && child.type.name === 'Else';
    })[0];

    ifChild = arrayChildren.filter((child: any) => {
        return child !== elseChild;
    });
    
    if (props.condition) {
        return ifChild;
    } else if (elseChild) {
        return elseChild;
    } else {
        return false;
    }
}

type IfProps = {
    condition: any;
    children: any[] | any;
}

export default If;
export const Else = (props: any) => props.children;