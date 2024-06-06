import style from "../../../styles/style.module.scss";
import tarja from "../../../assets/project.png"

export const ProductCard = ({ item, addCart}) => {
  const { id, Image, nome, categoria, preco, estoque } = item;

  // let informacao = (product.descricao) => {
  //     if (this.value.length < 20) {
  //         let char = index(informacao)

  // }};

  return (
    <li key={id} className={style.card}>
      <div>
        <img src={Image} alt={nome} />
        {/* {estoque ? <img className={style.tarja} src={tarja}/> : null} */}
      </div>
        {estoque ? <h3 className={style.entrega}>Pronta Entrega</h3>: null}
      <section className={style.cardDetails}>
        <h5 className={style.nome}>{nome}</h5>
        <span className={style.categoria}>
          
       
        </span>
        {preco? 
          <span className={style.price}>
            {preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
         : 
          <span className={style.price}>Preço indisponível</span>
        }
        <button onClick={() => addCart(item)}>Adicionar</button>
      </section>
    </li>
  );
};
