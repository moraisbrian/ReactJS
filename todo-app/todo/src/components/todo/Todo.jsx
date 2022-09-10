import { useEffect, useState } from "react";
import axios from "axios";
import { PageHeader } from "../template/PageHeader";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

const url = "http://localhost:8080/todos"

export function Todo() {
    const initialState = {
        description: '',
        list: []
    }
    
    const [state, setState] = useState(initialState);

    useEffect(refresh, 
        // eslint-disable-next-line
        []);

    function handleAdd() {
        const description = state.description;
        axios.post(url, {
            description,
            done: false,
            createdAt: new Date().toLocaleString()
        })
        .then(() => refresh());
    }

    function toggleTodo(data) {
        data.done = !data.done;
        axios.put(`${url}/${data.id}`, data)
            .then(() => refresh());
    }

    function deleteTodo(data) {
        axios.delete(`${url}/${data.id}`, data)
            .then(() => refresh());
    }
    
    function refresh() {
        axios.get(`${url}?_sort=createdAt&_order=desc`)
            .then(response => {
                setState({
                    ...state,
                    description: '',
                    list: response.data
                })
            });
    }

    function handleChange(e) {
        setState({ 
            ...state,
            description: e.target.value
        });
    }

    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm handleAdd={handleAdd} description={state.description} handleChange={handleChange} />
            <TodoList list={state.list} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    );
}