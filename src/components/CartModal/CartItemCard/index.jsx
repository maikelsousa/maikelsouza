import { useState } from "react";
import { MdDelete } from "react-icons/md";
import style from "../../../styles/style.module.scss";


export const CartItemCard = ({ product, cartList, setCartList }) => {
  const removeItem = (item) => {
    const newList = cartList.filter((cartItem) => cartItem.nome != item.nome);
    console.log(newList);
    setCartList(newList)   ;
    

  };
  // const [bedidas, setBebidas] = useState("");

  // const soBebidas = (beb) => {
  //  setBebidas((bedidas)=>
  //  cartList.filter((retorno)=> retorno.category=="Bebidas"))
  // };

  return (
    <li className={style.modalCardli} key={product.id} >
        <img src={product.Image} className={style.img} alt="" />
        <div>
        <h6>{product.nome}</h6>
        <span className={style.price}> </span>
        </div>
      <button
        onClick={() => removeItem(product)}
        aria-label="delete"
        title="Remover item"
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
