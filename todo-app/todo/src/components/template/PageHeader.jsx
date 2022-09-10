import "./Template.css"

export function PageHeader(props) {
    return (
        <div>
            <header className="page-header">
                <h2>{props.name} <small>{props.small}</small></h2>
            </header>
            <hr />
        </div>
    );
}