import Header from "./Header"
import Footer from "./Footer"


import Section from './styles/Section.module.css'
import CarrinhoDeComprasCss from './styles/CarrinhoDeCompras.module.css'
import Button from './styles/Button.module.css'

import OHobbit from './img/ohobbit.jpg'
import ColorAndLight from './img/colorAndLight.jpg'
import YoshitakaAmanoIllustrations from './img/YoshitakaAmanoIllustrations.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons'


function CarrinhoDeCompras() {
    return (
        <>
            <Header />
            <section id={CarrinhoDeComprasCss.cart} className={Section.p1}>
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remover</td>
                            <td>Imagem</td>
                            <td>Produto</td>
                            <td>Preço</td>
                            <td>Quantidade</td>
                            <td>SubTotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#"><i><FontAwesomeIcon icon={faCircleXmark} /></i></a></td>
                            <td><img src={OHobbit} alt="O Hobbit"/></td>
                            <td><a href="sproduct.html">O Hobbit + poster</a></td>
                            <td>47R$</td>
                            <td><input type="number" value="1"/></td>
                            <td>47.00 R$</td>
                        </tr>
                        <tr>
                            <td><a href="#"><i><FontAwesomeIcon icon={faCircleXmark} /></i></a></td>
                            <td><img src={ColorAndLight} alt="Color and Light"/></td>
                            <td><a href="ColorAndLight.html">Color and Light</a></td>
                            <td>280R$</td>
                            <td><input type="number" value="1"/></td>
                            <td>280.00 R$</td>
                        </tr>
                        <tr>
                            <td><a href="#"><i><FontAwesomeIcon icon={faCircleXmark} /></i></a></td>
                            <td><img src={YoshitakaAmanoIllustrations} alt="Yoshitaka Amano: Illustrations"/></td>
                            <td><a href="#">Yoshitaka Amano: Illustrations</a></td>
                            <td>40R$</td>
                            <td><input type="number" value="1"/></td>
                            <td>40.00 R$</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section id={CarrinhoDeComprasCss.cartAdd} className={Section.p1}>
                <div id={CarrinhoDeComprasCss.subtotal}>
                    <div id={CarrinhoDeComprasCss.coupon}>
                        <h3>Aplicar Cupom de Desconto</h3>
                        <div id={CarrinhoDeComprasCss.inserirCupom}>
                            <input type="text" placeholder="Insira o seu Cupom aqui." />
                            <button className={Button.normal}>Aplicar</button>
                            
                        </div>
                        <br/>frete grátis para compras acima de 200R$!
                    </div>
                    <h3>Total do Carrinho</h3>
                    <table>
                        <tr>
                            <td>Subtotal do Carrinho</td>
                            <td>500R$</td>
                        </tr>
                        <tr>
                            <td>Frete</td>
                            <td>Grátis</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>500R$</strong></td>
                        </tr>
                    </table>
                    <button className={Button.normal}>Continuar compra</button>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default CarrinhoDeCompras