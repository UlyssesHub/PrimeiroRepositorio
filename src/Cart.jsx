function Cart() {
    return(
        <>
            <section id="cart" className="section-p1">
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
                            <td><a href="#"><i className="fa-regular fa-circle-xmark"></i></a></td>
                            <td><img src="ohobbit.jpg" alt="O Hobbit"/></td>
                            <td><a href="sproduct.html">O Hobbit + poster</a></td>
                            <td>47R$</td>
                            <td><input type="number" value="1"/></td>
                            <td>47.00 R$</td>
                        </tr>
                        <tr>
                            <td><a href="#"><i className="fa-regular fa-circle-xmark"></i></a></td>
                            <td><img src="colorAndLight.jpg" alt="Color and Light"/></td>
                            <td><a href="ColorAndLight.html">Color and Light</a></td>
                            <td>280R$</td>
                            <td><input type="number" value="1"/></td>
                            <td>280.00 R$</td>
                        </tr>
                        <tr>
                            <td><a href="#"><i className="fa-regular fa-circle-xmark"></i></a></td>
                            <td><img src="jujutsuKaisen3.jpg" alt="Jujutsu Kaisen vol.03"/></td>
                            <td><a href="#">Jujutsu Kaisen vol.03</a></td>
                            <td>40R$</td>
                            <td><input type="number" value="1"/></td>
                            <td>40.00 R$</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section id="cart-add" className="section-p1">
                <div id="subtotal">
                    <div id="coupon">
                        <h3>Aplicar Cupom de Desconto</h3>
                        <div id="inserirCupom">
                            <input type="text" placeholder="Insira o seu Cupom aqui." />
                            <button className="normal">Aplicar</button>
                        </div>
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
                    <button className="normal">Continuar Compra</button>
                </div>
            </section>

            <section id="newsletter" className="section-p1">
                <div className="newstext">
                    <h4>Inscreva-se no boletim informativo</h4>
                    <p>Receba atualizações por e-mail sobre nossa loja mais recente e <span>ofertas especiais.</span></p>
                </div>
                <div className="form">
                    <input type="text" placeholder="Seu endereço de e-mail" />
                    <button className="normal">Entrar</button>
                </div>
            </section>
        </>
    )
}

export default Cart