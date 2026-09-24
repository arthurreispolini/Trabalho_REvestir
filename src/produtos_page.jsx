import Header from "./header";
import Cardproduto from "./cardproduto";
import "./produto_page.css";
import destaque1 from "./assets/destaques/destaque1.jpg";
import destaque2 from "./assets/destaques/destaque2.png";
import destaque3 from "./assets/destaques/destaque3.png";
import destaque4 from "./assets/destaques/destaque4.png";
import banner_produtos from"./assets/produtos/banner_produtos.jpg"

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

        <div className="hero_produtos">
<h1>Nossos Produtos</h1>
<p>Qualidade, estilo e autenticidade em <br /> cada detalhe</p>
        </div>
<main className="pai_filtros_produtos_parte">

          <div className="filtros">
        <div className="fundo_filtros">
          <p>Categorias</p>
          <label>
            <input type="checkbox" />
            <span>Masculino</span>
          </label>
          <br />
             <label>
            <input type="checkbox" />
            <span>Feminino</span>
          </label>
          <br />
             <label>
            <input type="checkbox" />
            <span>Acessórios</span>
          </label>
          <br />
             <label>
            <input type="checkbox" />
            <span>calçados</span>
          </label>
          <br />
          <hr />
            <p>Tamanho</p>
          <label>
            <input type="checkbox" />
           <span>P</span>
          </label>
          <br />
             <label>
            <input type="checkbox" />
            <span>M</span>
          </label>
          <br />
             <label>
            <input type="checkbox" />
            <span>G</span>
          </label>
          <br />
             <label>
            <input type="checkbox" />
            <span>GG</span>
          </label>
          <br />
          <hr />
           <p>Preço</p>
          <label>
            <input type="checkbox" />
            <span>até R$ 100</span>
          </label>
          <br />
             <label>
            <input type="checkbox" />
            <span>R$ 100 - R$ 200</span>
          </label>
          <br />
             <label>
            <input type="checkbox" />
             <span>R$ 200 - R$ 300</span>
          </label>
          <br />
             <label>
            <input type="checkbox" />
            <span>Acima de R$ 300</span>
          </label>
          <br />
          <hr />
        </div>
          </div>

          <div className="propdutos_parte">

      <div className="container-ordenar">
  <select className="select-ordenar" defaultValue="populares">
    <option value="populares">Ordenar por: Mais populares</option>
    <option value="menor-preco">Ordenar por: Menor preço</option>
    <option value="maior-preco">Ordenar por: Maior preço</option>
    <option value="recentes">Ordenar por: Mais recentes</option>
  </select>
</div>
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
          </div>
          </main>

      </main>

    </div>
  );
}

export default CardsProdutos;

