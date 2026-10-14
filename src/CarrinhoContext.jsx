import { createContext, useContext, useEffect, useState } from "react"

const CarrinhoContext = createContext(null)
const CHAVE_STORAGE = "revestir_carrinho"

function lerCarrinhoSalvo() {
    try {
        const salvo = localStorage.getItem(CHAVE_STORAGE)
        return salvo ? JSON.parse(salvo) : []
    } catch {
        return []
    }
}

export function CarrinhoProvider({ children }) {
    const [itens, setItens] = useState(lerCarrinhoSalvo)

    // Mantém o carrinho salvo mesmo ao recarregar a página
    useEffect(() => {
        try {
            localStorage.setItem(CHAVE_STORAGE, JSON.stringify(itens))
        } catch {
            /* storage indisponível: o carrinho continua funcionando em memória */
        }
    }, [itens])

    function adicionar(produto) {
        setItens((atual) => {
            const existe = atual.some((i) => i.id === produto.id)
            if (existe) {
                return atual.map((i) =>
                    i.id === produto.id ? { ...i, quantidade: i.quantidade + 1 } : i
                )
            }
            return [...atual, { ...produto, quantidade: 1 }]
        })
    }

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

    const totalItens = itens.reduce((soma, i) => soma + i.quantidade, 0)
    const subtotal = itens.reduce((soma, i) => soma + i.preco * i.quantidade, 0)

    return (
        <CarrinhoContext.Provider
            value={{ itens, totalItens, subtotal, adicionar, alterarQuantidade, remover }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}

export function useCarrinho() {
    const contexto = useContext(CarrinhoContext)
    if (!contexto) {
        throw new Error("useCarrinho precisa estar dentro de <CarrinhoProvider>")
    }
    return contexto
}
