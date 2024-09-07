import FooterCss from './styles/Footer.module.css'
import Section from './styles/Section.module.css'
import Button from './styles/Button.module.css'



function Footer() {
    return (
        <>
            <Newsletter />
            <ConteudoFooter />
        </>
    )
}

export default Footer




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Newsletter() {
    return (
        <>
            <div id={FooterCss.newsletter} className={Section.p1}>
                <div className={FooterCss.newstext}>
                    <h4> Inscreva-se no boletim informativo</h4>
                    <p>Receba atualizações por e-mail sobre nossa loja e <span>ofertas especiais.</span></p>
                </div>
                <div className={FooterCss.form}>
                    <input type="text" placeholder="Seu endereço de e-mail" />
                    <button className={Button.normal}>Enviar</button>
                </div>
            </div>
        </>
    )
}


import AppleGoogle from './img/appleGoogle.png'

function ConteudoFooter() {
    return (
        <>
            <footer className={Section.p1}>
                <div className={FooterCss.col}>
                    <h4>Contato</h4>
                    <p><strong>Endereço:</strong> 562 Wellington Road, Street 32, San Francisco</p>
                    <p> <strong>Telefone:</strong> +55 (61) 99928-7349</p>
                    <p> <strong>Horários:</strong> 10:00 - 18:00</p>
                    <div className={FooterCss.follow}>
                        <h4>Redes Sociais</h4>
                        <div className="icon">
                            <i><FontAwesomeIcon icon={faFacebook} /></i>
                            <i><FontAwesomeIcon icon={faInstagram} /></i>
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                            <i><FontAwesomeIcon icon={faWhatsapp} /></i>
                        </div>
                    </div>
                </div>

                <div className={FooterCss.col}>
                    <h4>Sobre</h4>
                    <a href="#">Sobre nós</a>
                    <a href="#">informaçoes de entrega</a>
                    <a href="#">Politica de privacidade</a>
                    <a href="#">Termos & Condiçoes</a>
                    <a href="#">Contate-nós</a>

                </div>
                <div className={FooterCss.col}>
                    <h4>Minha conta</h4>
                    <a href="#">Entrar</a>
                    <a href="#">Ver carrinho</a>
                    <a href="#">Minha lista de desejos</a>
                    <a href="#">Rastrear meu pedido</a>
                    <a href="#">Ajuda</a>
                </div>

                <div className={FooterCss.col}>
                    <h4>Instale o App</h4>
                    <div className={FooterCss.row}>
                        <img src={AppleGoogle} id={FooterCss.appleGoogle} alt="Apple e Google"></img>
                    </div>
                </div>
                <div className={FooterCss.copyright}>
                    <p>©2023, Ulysses de Sousa Pereira - Loja de tal coisa</p>
                </div>
            </footer>
        </>
    )
}
