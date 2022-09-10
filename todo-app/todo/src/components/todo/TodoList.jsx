import { IconButton } from '../template/IconButton';
import { If } from '../template/If';
import './Todo.css';

export function TodoList(props) {
    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo.id}>
                <If test={todo.done}>
                    <td>
                        <s>{todo.description}</s>
                    </td>
                    <td>
                        <s>{todo.done ? 'Concluído' : 'Pendente'}</s>
                    </td>
                </If>
                <If test={!todo.done}>
                    <td>
                        {todo.description}
                    </td>
                    <td>{todo.done ? 'Concluído' : 'Pendente'}</td>
                </If>
                <td>
                    <IconButton color={todo.done ? 'primary' : 'secondary'} icon={todo.done ? 'xmark' : 'check'} onClick={() => props.toggleTodo(todo)} />
                    <IconButton color="danger" icon="trash" onClick={() => props.deleteTodo(todo)} />
                </td>
            </tr>
        ));
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
}