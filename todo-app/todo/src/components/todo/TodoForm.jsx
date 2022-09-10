import { Grid } from "../template/Grid";
import { IconButton } from "../template/IconButton";

export function TodoForm(props) {
    function handleAddOnClick(e) {
        if (e.keyCode === 13) {
            props.handleAdd();
        }
    }
    
    return (
        <div role="form" className="todo-form row">
            <Grid cols="12 9 10">
                <input 
                type="text" 
                className="form-control" 
                id="description" 
                placeholder="Adicione uma tarefa" 
                value={props.description} 
                onChange={props.handleChange}
                onKeyUp={handleAddOnClick}
                />
            </Grid>
            <Grid cols="12 3 2">
                <IconButton hide={false} color="primary" onClick={props.handleAdd} icon="plus" />
            </Grid>
        </div>
    );
}