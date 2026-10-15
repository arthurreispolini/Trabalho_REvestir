import { useState } from "react"
import { Link } from "react-router-dom"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import Header from "./header"
import Footer from "./footer"
import "./favoritos.css"
import { useFavoritos } from "./FavoritosContext"
import { useCarrinho } from "./CarrinhoContext"

const moeda = (valor) =>
    valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

function CardFavorito({ produto }) {
    const { alternar } = useFavoritos()
    const { adicionar } = useCarrinho()
    const [adicionado, setAdicionado] = useState(false)

    function handleAdicionar() {
        adicionar(produto)
        setAdicionado(true)
        setTimeout(() => setAdicionado(false), 1500)
    }

    return (
        <article className="fav-card">
            <div className="fav-card-img">
                <img src={produto.imagem} alt={produto.nome} />
                <button
                    type="button"
                    className="fav-card-coracao"
                    onClick={() => alternar(produto)}
                    aria-label="Remover dos favoritos"
                >
                    <FaHeart />
                </button>
            </div>

            <div className="fav-card-info">
                <h3>{produto.nome}</h3>
                <strong>{moeda(produto.preco)}</strong>
                <button type="button" className="fav-card-botao" onClick={handleAdicionar}>
                    {adicionado ? "Adicionado ✓" : "Adicionar ao carrinho"}
                </button>
            </div>
        </article>
    )
}

function Favoritos() {
    const { favoritos } = useFavoritos()

    return (
        <div className="favoritos-page">
            <Header />

            <section className="fav-banner">
                <div className="fav-banner-texto">
                    <h1>Seus favoritos</h1>
                    <p>Guarde o que combina com o seu estilo.</p>
                </div>
            </section>

            <main className="fav-principal">
                {favoritos.length === 0 ? (
                    <div className="fav-vazio">
                        <FaRegHeart />
                        <h2>Nenhum favorito por aqui ainda</h2>
                        <p>Toque no coração de um produto para salvá-lo nesta lista.</p>
                        <Link to="/produtos" className="fav-vazio-botao">Explorar produtos</Link>
                    </div>
                ) : (
                    <>
                        <h2 className="fav-titulo">Itens favoritos ({favoritos.length})</h2>
                        <div className="fav-grid">
                            {favoritos.map((produto) => (
                                <CardFavorito key={produto.id} produto={produto} />
                            ))}
                        </div>
                    </>
                )}
            </main>

            <Footer />
        </div>
    )
}

export default Favoritos
