import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './ProjectCard.scss';
import { ProjectModel } from '../../models/ProjectModel';

function ProjectCard(props: ProjectCardProps) {
    const { project, handleRemove } = props;
    return (
        <div className="project_card">
            <h4>{project.name}</h4>
            <p>
                <span>Orçamento:</span> R${project.budget}
            </p>
            <p className="category_text">
                <span className={project.category!.name!.toLowerCase()}></span> {project.category!.name}
            </p>
            <div className="project_card_actions">
                <Link to={`/project/${project.id}`}>
                    <BsPencil />  Editar
                </Link>
                <button onClick={() => handleRemove(project.id) }>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    );
}

type ProjectCardProps = {
    project: ProjectModel;
    handleRemove: Function;
}

export default ProjectCard;