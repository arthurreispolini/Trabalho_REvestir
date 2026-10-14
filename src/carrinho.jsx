import { useState } from "react"
import "./carrinho.css"
// import camiseta from "./assets/camiseta_marrom.png"
// import moletom from "./assets/moletom_preto.png"

const ITENS_INICIAIS = [
    // { id: 1, nome: "Camiseta oversized marrom escura", tamanho: "M", cor: "Marrom", preco: 159.99, quantidade: 1, imagem: camiseta },
    // { id: 2, nome: "Moletom REvestir", tamanho: "G", cor: "Preto", preco: 229.99, quantidade: 1, imagem: moletom },
]

const moeda = (valor) =>
    valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

const Icone = ({ children, className }) => (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        {children}
    </svg>
)

function Carrinho() {
    const [itens, setItens] = useState(ITENS_INICIAIS)

    const totalItens = itens.reduce((soma, i) => soma + i.quantidade, 0)
    const subtotal = itens.reduce((soma, i) => soma + i.preco * i.quantidade, 0)

    function alterarQuantidade(id, delta) {
        setItens((atual) =>
            atual.map((i) =>
                i.id === id ? { ...i, quantidade: Math.max(1, i.quantidade + delta) } : i
            )
        )
    }

    function remover(id) {
        setItens((atual) => atual.filter((i) => i.id !== id))
    }

    return (
        <div className="carrinho-page">
            {/* Cabeçalho */}
            <header className="cab">
                <div className="cab-conteudo">
                    <a href="/" className="cab-logo">REvestir</a>

                    <label className="cab-busca">
                        <Icone>
                            <circle cx="11" cy="11" r="7" />
                            <path d="M20 20l-4-4" />
                        </Icone>
                        <input type="text" placeholder="Pesquisar" />
                    </label>

                    <nav className="cab-nav">
                        <a href="/">Inicio</a>
                        <a href="/masculino">Masculino</a>
                        <a href="/feminino">Feminino</a>
                        <a href="/acessorios">Acessórios</a>
                        <a href="/calcados">Calçados</a>
                    </nav>

                    <div className="cab-acoes">
                        <a href="/login" aria-label="Minha conta">
                            <Icone>
                                <circle cx="12" cy="8" r="4" />
                                <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                            </Icone>
                        </a>
                        <a href="/carrinho" className="cab-carrinho" aria-label="Carrinho">
                            <Icone>
                                <path d="M2 3h3l2.5 12h11L21 7H6" />
                                <circle cx="9" cy="20" r="1.3" />
                                <circle cx="17" cy="20" r="1.3" />
                            </Icone>
                            <span className="cab-badge">{totalItens}</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Banner */}
            <section className="banner">
                <div className="banner-texto">
                    <h1>Seu carrinho</h1>
                    <p>Revise seus itens antes de finalizar a compra.</p>
                </div>
            </section>

            {/* Conteúdo */}
            <main className="principal">
                <section className="itens">
                    <h2>Itens do carrinho ({totalItens})</h2>

                    <div className="itens-lista">
                        {itens.length === 0 && (
                            <p className="itens-vazio">Seu carrinho está vazio.</p>
                        )}

                        {itens.map((item) => (
                            <article className="item" key={item.id}>
                                <img className="item-img" src={item.imagem} alt={item.nome} />

                                <div className="item-info">
                                    <h3>{item.nome}</h3>
                                    <p>Tamanho: {item.tamanho}</p>
                                    <p>Cor: {item.cor}</p>
                                    <strong>{moeda(item.preco)}</strong>
                                </div>

                                <div className="item-qtd">
                                    <button type="button" onClick={() => alterarQuantidade(item.id, -1)} aria-label="Diminuir">
                                        <Icone><path d="M6 12h12" /></Icone>
                                    </button>
                                    <span>{item.quantidade}</span>
                                    <button type="button" onClick={() => alterarQuantidade(item.id, 1)} aria-label="Aumentar">
                                        <Icone><path d="M6 12h12M12 6v12" /></Icone>
                                    </button>
                                </div>

                                <span className="item-total">{moeda(item.preco * item.quantidade)}</span>

                                <button type="button" className="item-remover" onClick={() => remover(item.id)} aria-label="Remover item">
                                    <Icone>
                                        <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" />
                                    </Icone>
                                </button>
                            </article>
                        ))}
                    </div>

                    <a href="/" className="continuar">
                        <Icone><path d="M20 12H4M10 6l-6 6 6 6" /></Icone>
                        Continuar comprando
                    </a>
                </section>

                <aside className="resumo">
                    <h2>Resumo do pedido</h2>

                    <div className="resumo-linha">
                        <span>Subtotal ({totalItens} {totalItens === 1 ? "item" : "itens"})</span>
                        <span>{moeda(subtotal)}</span>
                    </div>
                    <div className="resumo-linha">
                        <span>Frete</span>
                        <a href="#frete">Calcular</a>
                    </div>

                    <div className="resumo-total">
                        <span>Total</span>
                        <span>{moeda(subtotal)}</span>
                    </div>

                    <button type="button" className="resumo-botao" disabled={itens.length === 0}>
                        Finalizar compra
                        <Icone><path d="M4 12h16M14 6l6 6-6 6" /></Icone>
                    </button>

                    <div className="resumo-seguro">
                        <Icone>
                            <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z" />
                            <path d="M8.5 12l2.5 2.5 4.5-5" />
                        </Icone>
                        <div>
                            <strong>Compra segura</strong>
                            <p>Seus dados estão protegidos.</p>
                        </div>
                    </div>
                </aside>
            </main>

            {/* Rodapé */}
            <footer className="rodape">
                <div className="rodape-colunas">
                    <div>
                        <h4>Navegação</h4>
                        <a href="/">Início</a>
                        <a href="/colecoes">Coleções</a>
                        <a href="/masculino">Masculino</a>
                        <a href="/feminino">Feminino</a>
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
                        <a href="/frete">Frete para todo o país</a>
                        <a href="/devolucoes">Devoluções e cashback</a>
                        <a href="/privacidade">Política de privacidade</a>
                        <a href="/faq">Perguntas frequentes</a>
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
        </div>
    )
}

export default Carrinho
