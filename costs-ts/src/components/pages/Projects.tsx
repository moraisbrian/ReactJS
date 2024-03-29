import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Message, { MessageTypes } from "../layout/Message";
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from "../project/ProjectCard";
import Loading from '../layout/Loading';
import './Projects.scss';
import { ProjectModel } from "../../models/ProjectModel";
import If from "../../shared/If";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState('');

    const location = useLocation();
    let message = '';

    if (location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                setRemoveLoading(true);
            })
            .catch(err => console.log(err));
        }, 1000);
    }, []);

    function removeProject(id: number) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            setProjects(projects.filter((project: ProjectModel) => project.id !== id));
            setProjectMessage('Projeto excluído com sucesso!');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="project_container">
            <div className="title_container">
            <h1>Meus Projetos</h1>
            <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            <If condition={message}>
                <Message message={message} type={MessageTypes.success} />
            </If>
            <If condition={projectMessage}>
                <Message message={projectMessage} type={MessageTypes.success} />
            </If>
            <Container customClass="start">
                <If condition={projects.length > 0}>
                    {projects.map((project: ProjectModel) => (
                        <ProjectCard key={project.id} project={project} handleRemove={removeProject} />
                    ))}
                </If>
                <If condition={!removeLoading}>
                    <Loading />
                </If>
                <If condition={removeLoading && projects.length === 0}>
                    <p>Não há projetos cadastrados!</p>
                </If>
            </Container>
        </div>
    );
}

export default Projects;