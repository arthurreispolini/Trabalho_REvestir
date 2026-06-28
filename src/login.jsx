import "./login.css"
import modeloformulario from "./assets/modelo-formulario.png"

function Login() {
    
    return(
<div className="login-page">
    <div className="fundologin">
        <h1 className="fundologin-maior-h1">RE</h1>
        <h1 className="fundologin-menor-h1">vestir</h1>
    </div>

<div className="div-metade-2-login">
      <div className="cardlogin">
        <h1>Crie sua conta</h1>
      {/* <form className="forms">
        <label htmlFor="">Email</label>
            <input type="email"  placeholder="Digite seu email" required/>
        <label htmlFor=""> Senha</label>
        <input type="password" placeholder="Digite sua senha" required/>
        <br />
        <button>Entrar</button>
      </form> */}
    <form className="form-login">

      <label>Email</label>
      <input
        type="email"
        placeholder="Digite seu email"
        required
      />

      <label>Senha</label>
      <input
        type="password"
        placeholder="Digite sua senha"
        required
      />

      <button type="submit">Entrar</button>
    </form>


      </div>
</div>
</div>     
    )
}
export default Login