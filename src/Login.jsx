
import LoginCss from './styles/Login.module.css'

function Login() {
    return (
        <>
            <div id={LoginCss.containerMaior}>
                <div id={LoginCss.container}>
                    <h1>LOGIN</h1>
                    <form>
                        <h3>Usuário ou E-mail</h3>
                        <input className={LoginCss.input} type='text'></input>
                        <h3>Senha</h3>
                        <input className={LoginCss.input} type='password'></input>
                        <br></br>
                        <div id={LoginCss.lembrarRecuperar}>
                            <div><input type="checkbox" id="Lembrar-me" name="lembrar-me" checked />
                                <label for="lembrar-me">lembrar-me</label>
                            </div>
                            <div>recuperar senha</div>
                        </div>

                        <div id={LoginCss.LoginRegistrar}>
                            <button>Login</button>
                            <button>Cadastrar-se</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Login