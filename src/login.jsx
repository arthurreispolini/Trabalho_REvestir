import { useState } from "react"
import "./login.css"

function Login() {
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        // TODO: chamar sua API de autenticação aqui
        console.log({ usuario, senha })
    }

    return (
        <div className="login-page">
         
            <main className="login-card">
                {/* Logo do card: troque pelo seu arquivo, ex.: <img src={logo} alt="Logo" /> */}
                <svg className="login-logo" viewBox="0 0 100 100" aria-label="Logo R" role="img">
                    <path d="M18 12h42c17 0 27 8 27 22 0 12-8 20-20 22l24 32H70L50 60H38v34H18z M38 28v18h20c7 0 11-3 11-9s-4-9-11-9z" fill="currentColor" fillRule="evenodd" />
                </svg>

                <h1 className="login-titulo">Olá, bem-vindo(a)!</h1>
                <p className="login-subtitulo">
                    Faça login para continuar<br />no seu estilo.
                </p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="login-campo">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                        </svg>
                        <input
                            type="text"
                            placeholder="E-mail ou usuário"
                            autoComplete="username"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </label>

                    <label className="login-campo">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <rect x="5" y="11" width="14" height="10" rx="2" />
                            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                        </svg>
                        <input
                            type="password"
                            placeholder="Senha"
                            autoComplete="current-password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </label>

                    <a className="login-esqueceu" href="/recuperar-senha">Esqueceu sua senha?</a>

                    <button type="submit" className="login-botao login-botao-principal">
                        Entrar
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 12h16M14 6l6 6-6 6" />
                        </svg>
                    </button>

                    <div className="login-ou"><span>ou</span></div>

                    <button type="button" className="login-botao login-botao-google">
                        <svg viewBox="0 0 48 48" aria-hidden="true">
                            <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z" />
                            <path fill="#FBBC05" d="M10.5 28.7c-.5-1.5-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z" />
                            <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
                        </svg>
                        Entrar com o Google
                    </button>
                </form>

                <p className="login-cadastro">
                    Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
                </p>
            </main>
        </div>
    )
}

export default Login
