import Header from "./Header"
import Footer from "./Footer"

import ContatoCss from './styles/Contato.module.css'
import Button from './styles/Button.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'



function Contato() {
  return (
    <>
      <Header />


      <section id={ContatoCss.contactDetails}>

        <div id={ContatoCss.DetailsAndMap}>
          <div className={ContatoCss.details}>
            <div>
              <h2 id={ContatoCss.visiteLoja}>Visite nossa loja</h2>

              <li><i><FontAwesomeIcon icon={faMap} /></i>
                <p>Brasília, Asa sul, quadra 503 sul</p>
              </li>
              <li><i><FontAwesomeIcon icon={faEnvelope} /></i>
                <p>contatoloja@gmail.com</p>
              </li>
              <li><i><FontAwesomeIcon icon={faPhone} /></i>
                <p>+55 (61) 99876-2430</p>
              </li>
              <li><i><FontAwesomeIcon icon={faClock} /></i>
                <p>Segunda a Sexta 9:00 - 18:00</p>
              </li>
            </div>

          </div>
          <div className={ContatoCss.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1919.438271105893!2d-47.88903691914173!3d-15.810462486460702!2m3
            !1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3ad73755d9bd%3A0x682d8a337144ff34!2sSHCS%20Superquadra%20Sul%20403%20-%20Asa%2
            0Sul%2C%20Brasilia%20-%20Federal%20District%2C%2070237-000!5e0!3m2!1sen!2sbr!4v1705587780075!5m2!1sen!2sbr"
              width="600" height="450" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
        <section id={ContatoCss.formDetails}>
          <form action="">
            <h2>Nós adoramos o seu feedback, deixe um comentário</h2>
            <input type="text" placeholder="Nome"></input>
            <input type="text" placeholder="e-mail"></input>
            <input type="text" placeholder="Assunto"></input>
            <textarea name="" id="" cols="30" rows="10" placeholder="Digite o seu comentário aqui"></textarea>
            <button className={Button.normal}>Enviar</button>
          </form>
        </section>

      </section>



      <Footer />
    </>
  )
}

export default Contato
