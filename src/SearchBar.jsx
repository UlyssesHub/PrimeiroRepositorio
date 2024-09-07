import Section from './styles/Section.module.css'
import Product from './styles/Product.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
    return (
        <>
            <div id={Product.product1} className={Section.p1}>
                <div className={Product.searchBar}>
                    <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                    <input type="search" placeholder="Livros, Autores, Gêneros e Linhas editoriais..." />
                </div>
            </div>
        </>
    )
}

export default SearchBar