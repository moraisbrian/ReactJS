import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import './Project.scss';
import { ProjectModel } from '../../models/ProjectModel';
import If, { Else } from '../../shared/If';
import ProjectForm from '../project/ProjectForm';
import Message, { MessageTypes as MessageType } from '../layout/Message';

function Project() {
    const { id } = useParams();
    const [project, setProject] = useState({} as ProjectModel);
    const [showProjectFrom, setShowProjectFrom] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => setProject(data))
                .catch(err => console.log(err));
        }, 1000);
    }, [id]);

    function toggleProjectForm() {
        setShowProjectFrom(!showProjectFrom);
    }

    function editPost(project: ProjectModel) {
        if (project.budget && project.cost && project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!');
            setType(MessageType.error);
            return false;
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((response: any) => response.json())
            .then((data: ProjectModel) => {
                setProject(data);
                setShowProjectFrom(false);
                setMessage('Projeto Atualizado!');
                setType(MessageType.success);
            })
            .catch((err: any) => console.log(err));
    }

    return (
        <>
            <If condition={project.name}>
                <div className="project_details">
                    <Container customClass="column">
                        <If condition={message}>
                            <Message message={message} type={type} />
                        </If>
                        <div className="details_container">
                            <h1>Projeto: {project.name}</h1>
                            <button className="btn" onClick={toggleProjectForm}>
                                {!showProjectFrom ? 'Editar Projeto' : 'Fechar'}
                            </button>
                            <If condition={!showProjectFrom}>
                                <div className="project_info">
                                    <p>
                                        <span>Categoria:</span> {project.category?.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento:</span> R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total de Utilizado:</span> R${project.cost}
                                    </p>
                                </div>
                                <Else>
                                    <div className="project_info">
                                        <ProjectForm handleSubmit={editPost} btnText="Concluir Edição" projectData={project} />
                                    </div>
                                </Else>
                            </If>
                        </div>
                    </Container>
                </div>
                <Else>
                    <Loading />
                </Else>
            </If>
        </>
    );
}

export default Project;