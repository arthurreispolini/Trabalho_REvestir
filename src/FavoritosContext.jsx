import { createContext, useContext, useEffect, useState } from "react"

const FavoritosContext = createContext(null)
const CHAVE_STORAGE = "revestir_favoritos"

function lerFavoritosSalvos() {
    try {
        const salvo = localStorage.getItem(CHAVE_STORAGE)
        return salvo ? JSON.parse(salvo) : []
    } catch {
        return []
    }
}

export function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState(lerFavoritosSalvos)

    // Mantém os favoritos salvos mesmo ao recarregar a página
    useEffect(() => {
        try {
            localStorage.setItem(CHAVE_STORAGE, JSON.stringify(favoritos))
        } catch {
            /* storage indisponível: continua funcionando em memória */
        }
    }, [favoritos])

    // Se já é favorito, remove; se não é, adiciona
    function alternar(produto) {
        setFavoritos((atual) =>
            atual.some((p) => p.id === produto.id)
                ? atual.filter((p) => p.id !== produto.id)
                : [...atual, produto]
        )
    }

    function ehFavorito(id) {
        return favoritos.some((p) => p.id === id)
    }

    return (
        <FavoritosContext.Provider
            value={{ favoritos, totalFavoritos: favoritos.length, alternar, ehFavorito }}
        >
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritos() {
    const contexto = useContext(FavoritosContext)
    if (!contexto) {
        throw new Error("useFavoritos precisa estar dentro de <FavoritosProvider>")
    }
    return contexto
}
