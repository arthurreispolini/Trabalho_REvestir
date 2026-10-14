import { useState } from "react";
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
      imagem: destaque1,
      categoria: "Masculino",
      tamanhos: ["P", "M", "G"]
    },
    {
      id: 2,
      nome: "Camisa oversized cinza escura",
      preco: 159.99,
      imagem: destaque2,
      categoria: "Masculino",
      tamanhos: ["M", "G", "GG"]
    },
    {
      id: 3,
      nome: "Camisa oversized marrom escura",
      preco: 159.99,
      imagem: destaque3,
      categoria: "Masculino",
      tamanhos: ["P", "M"]
    },
    {
      id: 4,
      nome: "Camisa oversized bege",
      preco: 159.99,
      imagem: destaque4,
      categoria: "Feminino",
      tamanhos: ["P", "M", "G"]
    },
    {
      id: 5,
      nome: "Camisa básica branca",
      preco: 129.99,
      imagem: destaque1,
      categoria: "Masculino",
      tamanhos: ["M", "G"]
    },
    {
      id: 6,
      nome: "Camisa básica preta",
      preco: 129.99,
      imagem: destaque2,
      categoria: "Feminino",
      tamanhos: ["P", "M"]
    },
    {
      id: 7,
      nome: "Camisa casual marrom",
      preco: 139.99,
      imagem: destaque3,
      categoria: "Masculino",
      tamanhos: ["G", "GG"]
    },
    {
      id: 8,
      nome: "Camisa oversized bege",
      preco: 149.99,
      imagem: destaque4,
      categoria: "Feminino",
      tamanhos: ["P", "M", "G", "GG"]
    }
  ];

  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);
  const [tamanhosSelecionados, setTamanhosSelecionados] = useState([]);
  const [precosSelecionados, setPrecosSelecionados] = useState([]);

  function alternarFiltro(valor, listaSelecionada, setLista) {
    setLista((atual) =>
      atual.includes(valor)
        ? atual.filter((item) => item !== valor)
        : [...atual, valor]
    );
  }

  function precoDentroDaFaixa(preco, faixa) {
    switch (faixa) {
      case "ate100":
        return preco <= 100;
      case "100-200":
        return preco > 100 && preco <= 200;
      case "200-300":
        return preco > 200 && preco <= 300;
      case "acima300":
        return preco > 300;
      default:
        return true;
    }
  }

  const produtosFiltrados = produtos.filter((produto) => {
    const categoriaOk =
      categoriasSelecionadas.length === 0 ||
      categoriasSelecionadas.includes(produto.categoria);

    const tamanhoOk =
      tamanhosSelecionados.length === 0 ||
      produto.tamanhos.some((t) => tamanhosSelecionados.includes(t));

    const precoOk =
      precosSelecionados.length === 0 ||
      precosSelecionados.some((faixa) => precoDentroDaFaixa(produto.preco, faixa));

    return categoriaOk && tamanhoOk && precoOk;
  });

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
                <input
                  type="checkbox"
                  checked={categoriasSelecionadas.includes("Masculino")}
                  onChange={() =>
                    alternarFiltro("Masculino", categoriasSelecionadas, setCategoriasSelecionadas)
                  }
                />
                <span>Masculino</span>
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={categoriasSelecionadas.includes("Feminino")}
                  onChange={() =>
                    alternarFiltro("Feminino", categoriasSelecionadas, setCategoriasSelecionadas)
                  }
                />
                <span>Feminino</span>
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={categoriasSelecionadas.includes("Acessórios")}
                  onChange={() =>
                    alternarFiltro("Acessórios", categoriasSelecionadas, setCategoriasSelecionadas)
                  }
                />
                <span>Acessórios</span>
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={categoriasSelecionadas.includes("Calçados")}
                  onChange={() =>
                    alternarFiltro("Calçados", categoriasSelecionadas, setCategoriasSelecionadas)
                  }
                />
                <span>calçados</span>
              </label>
              <br />
              <hr />

              <p>Tamanho</p>
              <label>
                <input
                  type="checkbox"
                  checked={tamanhosSelecionados.includes("P")}
                  onChange={() => alternarFiltro("P", tamanhosSelecionados, setTamanhosSelecionados)}
                />
                <span>P</span>
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={tamanhosSelecionados.includes("M")}
                  onChange={() => alternarFiltro("M", tamanhosSelecionados, setTamanhosSelecionados)}
                />
                <span>M</span>
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={tamanhosSelecionados.includes("G")}
                  onChange={() => alternarFiltro("G", tamanhosSelecionados, setTamanhosSelecionados)}
                />
                <span>G</span>
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={tamanhosSelecionados.includes("GG")}
                  onChange={() => alternarFiltro("GG", tamanhosSelecionados, setTamanhosSelecionados)}
                />
                <span>GG</span>
              </label>
              <br />
              <hr />

              <p>Preço</p>
              <label>
                <input
                  type="checkbox"
                  checked={precosSelecionados.includes("ate100")}
                  onChange={() => alternarFiltro("ate100", precosSelecionados, setPrecosSelecionados)}
                />
                <span>até R$ 100</span>
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={precosSelecionados.includes("100-200")}
                  onChange={() => alternarFiltro("100-200", precosSelecionados, setPrecosSelecionados)}
                />
                <span>R$ 100 - R$ 200</span>
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={precosSelecionados.includes("200-300")}
                  onChange={() => alternarFiltro("200-300", precosSelecionados, setPrecosSelecionados)}
                />
                <span>R$ 200 - R$ 300</span>
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={precosSelecionados.includes("acima300")}
                  onChange={() => alternarFiltro("acima300", precosSelecionados, setPrecosSelecionados)}
                />
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

              {produtosFiltrados.length > 0 ? (
                produtosFiltrados.map((produto) => (
                  <Cardproduto
                    key={produto.id}
                    id={produto.id}
                    nome={produto.nome}
                    preco={produto.preco}
                    imagem={produto.imagem}
                  />
                ))
              ) : (
                <p>Nenhum produto encontrado para os filtros selecionados.</p>
              )}

            </section>
          </div>
        </main>

      </main>

    </div>
  );
}

export default CardsProdutos;
