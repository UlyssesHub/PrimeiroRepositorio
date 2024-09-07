import Header from "./Header"
import Footer from "./Footer"

import OHobbit from './img/ohobbit.jpg'
import FragmentosDoHorror from './img/fragmentosDoHorror.jpg'
import ARevolucaoDosBixos from './img/ArevoluçaoDosBixos.jpg'
import ColorAndLight from './img/colorAndLight.jpg'
import TodasAsTecnicasCulinarias from './img/todasAsTecnicasCulinarias.jpg'
import DragonBall from './img/dragonball1.jpg'
import OIluminado from './img/oIluminado.jpg'
import MonetTriumphOfImpressionism from './img/MonetTriumphOfImpressionism.jpg'
import YoshitakaAmanoIllustrations from './img/YoshitakaAmanoIllustrations.jpg'
import OAlquimista from './img/OAlquimista.jpg'
import FogoeSangue from './img/FogoeSangueVolume1.jpg'
import Frankenstein from './img/Frankenstein.jpg'

function Produtos() {
    return (
        <>
            <Header />
            <ConteudoProdutos />
            <Footer />
        </>
    )
}

export default Produtos

import Section from './styles/Section.module.css'
import Product from './styles/Product.module.css'




function ConteudoProdutos() {
    return (
        <>

      <div id={Product.product1} className={Section.p1}>
        <div className={Product.proContainer}>
          <div className={Product.pro} onCLick="window.open('sproduct.html','_blank');">
            <img src={OHobbit} alt="O Hobbit" />
            <div className={Product.des}>
              <h3 title='O Hobbit'>O Hobbit</h3>
              <ul>
                <li title='J.R.R. Tolkien'>J.R.R. Tolkien</li>  
              </ul>
              <div className={Product.custo}>100R$</div>
            </div>
          </div>
          <div className={Product.pro}>
            <img src={FragmentosDoHorror} alt="Fragmentos do Horror" />
            <div className={Product.des}>
              
              <h3 title='Fragmentos do Horror'>Fragmentos do Horror</h3>
              <ul>
                <li title='Junji Ito'>Junji Ito</li>  
              </ul>
              <div className={Product.custo}>100R$</div>
            </div>
          </div>
          <div className={Product.pro}>
            <img src={OAlquimista} alt="O Alquimista" />
            <div className={Product.des}>
             
              <h3 title='O Alquimista'>O Alquimista</h3>
              <ul>
                <li title='Paulo Coelho'>Paulo Coelho</li>
              </ul>
              <div className={Product.custo}>100R$</div>
            </div>
          </div>
          <div className={Product.pro}>
            <img src={ARevolucaoDosBixos} alt="A Revolução dos Bixos" />
            <div className={Product.des}>
              
              <h3 title='A Revoluçao dos Bixos' alt='A Revoluçao dos Bixos'>A Revoluçao dos Bixos</h3>
              <ul>
                <li title='George Orwell' alt='George Orwell'>George Orwell</li>
                
              </ul>
              <div className={Product.custo}>100R$</div>
            </div>
          </div>
          <div className={Product.pro}>
            <img src={Frankenstein} alt="" />
            <div className={Product.des}>
              
              <h3 title='Frankenstein' alt='Frankenstein'>Frankenstein</h3>
              <ul>
                <li title='Mary Shelley' alt='Mary Shelley'>Mary Shelley</li>
                
              </ul>
              <div className={Product.custo}>100R$</div>
            </div>
          </div>
          <div className={Product.pro}>
            <img src={MonetTriumphOfImpressionism} alt="MonetTriumphOfImpressionism" />
            <div className={Product.des}>
              
              <h3 title='Monet the Triumph of Impressionism' alt='Monet the Triumph of Impressionism' >Monet the Triumph of Impressionism</h3>
              <ul>
                <li title='Daniel Wildenstein' alt='Daniel Wildenstein'>Daniel Wildenstein</li>
                
              </ul>
              <div className={Product.custo}>100R$</div>
            </div>
          </div>
        </div>

        
      </div>




      <div id={Product.product1} className={Section.p1}>
        <div className={Product.proContainer}>
          <div className={Product.pro}>
            <img src={ColorAndLight} alt="Color and Light" />
            <div className={Product.des}>
  
              <h3 title='Color and Light'>Color and Light</h3>
              <ul>
                <li title='James Gourney'>James Gourney</li>
               
              </ul>
              <div className={Product.custo}>100R$</div>
            </div>
          </div>
          <div className={Product.pro}>
            <img src={TodasAsTecnicasCulinarias} alt="Todas as Técnicas Culinárias" />
            <div className={Product.des}>
              
              <h3 title="Todas as Técnicas Culinárias - Le Courdon Bleu">Todas as Técnicas Culinárias - Le Courdon Bleu</h3>
              <ul>
                <li title="Jeni Wright, Eric Treuille">Jeni Wright, Eric Treuille</li>
                
              </ul>
              <div className={Product.custo}>100R$</div>
            </div>
          </div>
          <div className={Product.pro}>
            <img src={DragonBall} alt="Dragon Ball volume 1" />
            <div className={Product.des}>
              
              <h3 title='Dragon Ball volume 1'>Dragon Ball vol.01</h3>
              <ul>
                <li title='Akira Toriyama'>Akira Toriyama</li>
              
              </ul>
              <div className={Product.custo}>100R$</div>
            </div>
          </div>
          <div className={Product.pro}>
            <img src={YoshitakaAmanoIllustrations} alt="Yoshitaka Amano: Illustrations" />
            <div className={Product.des}>
              
              <h3 title='Yoshitaka Amano: Illustrations'>Yoshitaka Amano: Illustrations</h3>
              <ul>
                <li title='Yoshitaka Amano'>Yoshitaka Amano</li>
             
              </ul>
              <div className={Product.custo}>100R$</div>
            </div>
          </div>
          <div className={Product.pro}>
            <img src={FogoeSangue} alt="Fogoe Sangue" />
            <div className={Product.des}>
              
              <h3 title='Fogo e Sangue Volume 1'>Fogo e Sangue vol.01</h3>
              <ul>
                <li title='George R. R. Martin '>George R. R. Martin </li>
               
              </ul>
              <div className={Product.custo}>100R$</div>
            </div>
          </div>
          <div className={Product.pro}>
            <img src={OIluminado} alt="O Iluminado" />
            <div className={Product.des}>
              
              <h3 title='O Iluminado'>O Iluminado</h3>
              <ul>
                <li title='Stephen King'>Stephen King</li>
                
              </ul>
              <div className={Product.custo}>100R$</div>
            </div>
          </div>
          
         
        </div>

      </div>

    </>
    )
}