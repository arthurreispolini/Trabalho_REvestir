import { Link } from "react-router-dom"
import "./footer.css"

const Icone = ({ children, className }) => (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        {children}
    </svg>
)

function Footer() {
    return (
    <footer className="rodape">
        <div className="rodape-colunas">
            <div>
                <h4>Navegação</h4>
                <Link to="/">Início</Link>
                <Link to="/produtos">Coleções</Link>
                <Link to="/produtos">Masculino</Link>
                <Link to="/produtos">Feminino</Link>
            </div>

            <div>
                <h4>Contato</h4>
                <p className="rodape-icone">
                    <Icone><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></Icone>
                    REvestir@gmail.com
                </p>
                <p className="rodape-icone">
                    <Icone><path d="M4 20l1.3-4.2A8 8 0 1 1 8.3 18.8z" /><path d="M9 9c0 3 3 6 6 6l1.2-1.5-2.2-1.2-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1.2-2.2z" /></Icone>
                    (35) 9960-0136
                </p>
                <p className="rodape-icone">
                    <Icone><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></Icone>
                    Niterói - Rio de Janeiro
                </p>
            </div>

            <div>
                <h4>Informações</h4>
                <a href="#frete">Frete para todo o país</a>
                <a href="#devolucoes">Devoluções e cashback</a>
                <a href="#privacidade">Política de privacidade</a>
                <a href="#faq">Perguntas frequentes</a>
            </div>

            <div>
                <h4>Redes sociais</h4>
                <a href="#instagram" className="rodape-icone">
                    <Icone className="rede-instagram">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.3" cy="6.7" r="0.8" />
                    </Icone>
                    Instagram
                </a>
                <a href="#tiktok" className="rodape-icone">
                    <Icone className="rede-preenchida">
                        <path d="M14 3h3a5 5 0 0 0 4 4v3a8 8 0 0 1-4-1.2V15a6 6 0 1 1-6-6v3.2a3 3 0 1 0 3 2.8z" />
                    </Icone>
                    tikTok
                </a>
                <a href="#twitter" className="rodape-icone">
                    <Icone><path d="M4 4l16 16M20 4L4 20" /></Icone>
                    Twitter (X)
                </a>
            </div>
        </div>

        <p className="rodape-copy">© 2025 REvestir. Todos os direitos reservados.</p>
    </footer>
    )
}

export default Footer
