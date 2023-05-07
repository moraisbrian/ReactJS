import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import './Project.css';
import { ProjectModel } from '../../models/ProjectModel';

function Project() {
    const { id } = useParams();
    const [project, setProject] = useState({} as ProjectModel);
    const [showProjectFrom, setShowProjectFrom] = useState(false);

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

    return (
        <>
        {project.name ? (
        <div className="project_details">
            <Container customClass="column">
                <div className="details_container">
                    <h1>Projeto: {project.name}</h1>
                    <button className="btn" onClick={toggleProjectForm}>
                        {!showProjectFrom ? 'Editar Projeto' : 'Fechar'}
                    </button>
                    {!showProjectFrom ? (
                        <div className="project_info">
                            <p>
                                <span>Categoria:</span> {project.category!.name}
                            </p>
                            <p>
                                <span>Total de Orçamento:</span> R${project.budget}
                            </p>
                            <p>
                                <span>Total de Utilizado:</span> R${project.cost}
                            </p>
                        </div>
                    ) : (
                        <div className="project_info">
                            <p>form</p>
                        </div>
                    )}
                </div>
            </Container>
        </div>
        ) : (
        <Loading />
        )}
    </>
    );
}

export default Project;