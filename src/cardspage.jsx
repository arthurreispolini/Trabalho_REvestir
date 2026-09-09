
import Header from "./header";
import Cardproduto from "./cardproduto";
import "./cardspage.css";

import destaque1 from "./assets/destaques/destaque1.jpg";
import destaque2 from "./assets/destaques/destaque2.png";
import destaque3 from "./assets/destaques/destaque3.png";
import destaque4 from "./assets/destaques/destaque4.png";

function CardsProdutos() {

  const produtos = [
    {
      id: 1,
      nome: "Camisa oversized branca",
      preco: 159.99,
      imagem: destaque1
    },
    {
      id: 2,
      nome: "Camisa oversized cinza escura",
      preco: 159.99,
      imagem: destaque2
    },
    {
      id: 3,
      nome: "Camisa oversized marrom escura",
      preco: 159.99,
      imagem: destaque3
    },
    {
      id: 4,
      nome: "Camisa oversized bege",
      preco: 159.99,
      imagem: destaque4
    },
    {
      id: 5,
      nome: "Camisa básica branca",
      preco: 129.99,
      imagem: destaque1
    },
    {
      id: 6,
      nome: "Camisa básica preta",
      preco: 129.99,
      imagem: destaque2
    },
    {
      id: 7,
      nome: "Camisa casual marrom",
      preco: 139.99,
      imagem: destaque3
    },
    {
      id: 8,
      nome: "Camisa oversized bege",
      preco: 149.99,
      imagem: destaque4
    }
  ];

  return (
    <div className="pagina-produtos">

      <Header />

      <main>

        <section className="titulo-produtos">
          <h1>Produtos</h1>
          <p>Encontre peças que combinam com sua essência.</p>
        </section>

        <section className="filtros-produtos">
          <button>Todos</button>
          <button>Masculino</button>
          <button>Feminino</button>
          <button>Calçados</button>
          <button>Acessórios</button>
        </section>

        <section className="produtos-grid">

          {produtos.map((produto) => (
            <Cardproduto
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
            />
          ))}

        </section>

      </main>

    </div>
  );
}

export default CardsProdutos;

