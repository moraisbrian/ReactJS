import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Message from "../layout/Message";
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from "../project/ProjectCard";
import './Projects.css';

function Projects() {
    const [projects, setProjects] = useState([]);

    const location = useLocation();
    let message = '';

    if (location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setProjects(data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="project_container">
            <div className="title_container">
            <h1>Meus Projetos</h1>
            <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message msg={message} type="success" />}
            <Container customClass="start">
                {projects.length > 0 && projects.map(project => (
                    <ProjectCard 
                        key={project.id}
                        id={project.id} 
                        name={project.name} 
                        budget={project.budget} 
                        category={project.category.name}
                    />
                ))}
            </Container>
        </div>
    );
}

export default Projects;