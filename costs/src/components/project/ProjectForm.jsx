import Input from '../form/Input'
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import './ProjectForm.css';
import { useState, useEffect } from 'react';

function ProjectForm(props) {
    const { handleSubmit, btnText, projectData } = props;

    const [project, setProject] = useState(projectData || {});
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

    const submit = (evt) => {
        evt.preventDefault();
        handleSubmit(project);
    }

    function handleChange(evt) {
        setProject({ ...project, [evt.target.name]: evt.target.value });
    }

    function handleCategory(evt) {
        setProject({
            ...project, category: {
                id: evt.target.value,
                name: evt.target.options[evt.target.selectedIndex].text
            }
        });
    }

    return (
        <form className="form" onSubmit={submit}>
            <Input value={project.name ? project.name : ''} handleOnChange={handleChange} type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" />
            <Input value={project.budget ? project.budget : ''} handleOnChange={handleChange} type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" />
            <Select value={project.category ? project.category.id : ''} handleOnChange={handleCategory} name="category_id" text="Selecione a categoria" options={categories} />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default ProjectForm;