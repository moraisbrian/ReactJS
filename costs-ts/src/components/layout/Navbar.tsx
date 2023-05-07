import { Link } from 'react-router-dom';
import Container from './Container';
import './Navbar.scss';
import logo from '../../img/costs_logo.png';

function Navbar() {
    return (
        <nav className="navbar">
            <Container>
                <Link to='/'>
                    <img src={logo} alt="Costs" />
                </Link>
                <ul className="list">
                    <li className="item">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="item">
                        <Link to='/projects'>Projetos</Link>
                    </li>
                    <li className="item">
                        <Link to='/company'>Empresa</Link>
                    </li>
                    <li className="item">
                        <Link to='/contact'>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;