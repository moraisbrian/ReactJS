function If(props: IfProps) {
    if (props.test) {
        return props.children;
    }
}

type IfProps = {
    test: boolean;
    children: any;
}

export default If;