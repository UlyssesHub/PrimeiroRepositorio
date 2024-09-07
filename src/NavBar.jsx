import NavBarCss from './styles/NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <ul id={NavBarCss.navbar}>
            <li><Link className="active" to="/">Início</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/categorias">Categorias</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/carrinho_de_compras"><FontAwesomeIcon id="carrinho" icon={faCartShopping} /></Link></li>
        </ul>
    );
}

export default NavBar;
