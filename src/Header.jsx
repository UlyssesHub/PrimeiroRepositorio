import NavBar from "./NavBar"
import SearchBar from './SearchBar'

import HeaderCss from './styles/Header.module.css'

function Header() {
    return (
        <>
            <div id={HeaderCss.header}>
                Logo
                <NavBar />
                <ul>
                    <li><a href="#">entre</a>&nbsp;ou&nbsp;<a href="#">cadastre-se</a></li>
                </ul>
                
            </div>
            <SearchBar />

        </>
    )
}

export default Header