import Header from "./Header"
import Footer from "./Footer"


import Section from './styles/Section.module.css'
import CategoriasCss from './styles/Categorias.module.css'


import Compass from './img/compass.png'
import Dead from './img/dead.png'
import Wizard from './img/wizard.png'
import Art from './img/art.png'
import Rose from './img/rose.png'
import Toys from './img/toys.png'
import HeartHandshake from './img/heart-handshake.png'
import Thriller from './img/thriller.png'
import Gastronomia from './img/gastronomia.png'
import Humor from './img/humor.png'
import AncientScroll from './img/ancient-scroll.png'
import Religion from './img/religion.png'
import Biography from './img/biography.png'
import Mangá from './img/comic.png'



function Categorias() {
    return (
        <>



            <Header />

            <section id={CategoriasCss.feature} className={Section.p1}>

                <div className={CategoriasCss.feBox}>
                
                    <img src={Compass} alt="Aventura" />
                    <h6>Aventura</h6>
                </div>
                <div className={CategoriasCss.feBox}>
                    <img src={Dead} alt="Terror" />
                    <h6>Terror</h6>
                </div>
                <div className={CategoriasCss.feBox}>
                    <img src={Wizard} alt="Fantasia" />
                    <h6>Fantasia</h6>
                </div>
                <div className={CategoriasCss.feBox}>
                    <img src={Art} alt="Arte" />
                    <h6>Arte</h6>
                </div>
                <div className={CategoriasCss.feBox}>
                    <img src={Rose} alt="Romance" />
                    <h6>Romance</h6>
                </div>
                <div className={CategoriasCss.feBox}>
                    <img src={Toys} alt="Infantil" />
                    <h6>Infantil</h6>
                </div>
                <div className={CategoriasCss.feBox}>
                    <img src={HeartHandshake} alt="Autoajuda" />
                    <h6>Autoajuda</h6>
                </div>
                <div className={CategoriasCss.feBox}>
                    <img src={Thriller} alt="Thriller" />
                    <h6>Thriller</h6>
                </div>
                <div className={CategoriasCss.feBox}>
                    <img src={Gastronomia} alt="Gastronomia" />
                    <h6>Gastronomia</h6>
                </div>
                <div className={CategoriasCss.feBox}>
                    <img src={Humor} alt="Humor" />
                    <h6>Humor</h6>
                </div>
                <div className={CategoriasCss.feBox}>
                    <img src={AncientScroll} alt="História" />
                    <h6>História</h6>
                </div>
                <div className={CategoriasCss.feBox}>
                    <img src={Religion} alt="Religião" />
                    <h6>Religião</h6>
                </div>
                <div className={CategoriasCss.feBox}>
                    <img src={Biography} alt="Biografia" />
                    <h6>Biografia</h6>
                </div>
                <div className={CategoriasCss.feBox}>
                    <img src={Mangá} alt="Mangá" />
                    <h6>Mangá</h6>
                </div>






            </section>
            <Footer />
        </>
    )
}

export default Categorias