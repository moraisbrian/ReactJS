import { ProjectModel } from '../../models/ProjectModel';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import './ProjectForm.scss';
import { useState, useEffect } from 'react';

function ProjectForm(props: ProjectFormProps) {
    const [project, setProject] = useState(props.projectData || {});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch(err => console.log(err));
    }, []);

    const submit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        props.handleSubmit(project);
    }

    function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        setProject({ ...project, [evt.target.name]: evt.target.value });
    }

    function handleCategory(evt: React.ChangeEvent<HTMLSelectElement>) {
        setProject({
            ...project, category: {
                id: parseInt(evt.target.value),
                name: evt.target.options[evt.target.selectedIndex].text
            }
        });
    }

    return (
        <form className="form" onSubmit={submit}>
            <Input value={project.name ? project.name : ''} handleOnChange={handleChange} type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" />
            <Input value={project.budget ? project.budget.toString() : ''} handleOnChange={handleChange} type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" />
            <Select value={project.category ? project.category.id?.toString() : ''} handleOnChange={handleCategory} name="category_id" text="Selecione a categoria" options={categories} />
            <SubmitButton text={props.btnText} />
        </form>
    );
}

type ProjectFormProps = {
    handleSubmit: Function;
    btnText: string; 
    projectData?: ProjectModel;
}

export default ProjectForm;