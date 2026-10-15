import "./carrinho.css"
import { Link } from "react-router-dom"
import Header from "./header"
import Footer from "./footer"
import { useCarrinho } from "./CarrinhoContext"

const moeda = (valor) =>
    valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

const Icone = ({ children, className }) => (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        {children}
    </svg>
)

function Carrinho() {
    const { itens, totalItens, subtotal, alterarQuantidade, remover } = useCarrinho()

    return (
        <div className="carrinho-page">
            <Header />

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
                                    {item.tamanho && <p>Tamanho: {item.tamanho}</p>}
                                    {item.cor && <p>Cor: {item.cor}</p>}
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

                    <Link to="/" className="continuar">
                        <Icone><path d="M20 12H4M10 6l-6 6 6 6" /></Icone>
                        Continuar comprando
                    </Link>
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
                        <p>Finalizar compra</p>
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

            <Footer />
        </div>
    )
}

export default Carrinho
