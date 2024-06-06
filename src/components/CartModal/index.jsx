import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "../../styles/style.module.scss";
import { useEffect } from "react";



export const CartModal = ({ cartList,setModal,setCartList }) => {
   
   const total = cartList.reduce((prevValue, product) => {
      if (typeof prevValue !== 'number') { prevValue = 0; }
      console.log(prevValue,product.preco);
      return prevValue + product.preco;
   }, 0);


   return (
      <>
      <div role="dialog" className={style.modal}> 
         <div className={style.modalContent}>
            <div className={style.modalBar}>
            <h2>Carrinho de compras</h2>
            <button   className={style.closeModal} onClick={()=>setModal(false)}aria-label="close" title="Fechar">
               <MdClose size={21} />
            </button>
            </div>
        
            <ul className={style.ul}>
               {cartList.map((armazenar) => (<>
                  <CartItemCard  product={armazenar} key={armazenar.id} setCartList={setCartList} cartList={cartList}/>

            
                  
               </>))}
            </ul>
                 <section className={style.fixedSectionModal}>
            <div className={style.totalModal}>
               <span>Total</span>
               <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <button className={style.removerTodos} onClick={()=>setCartList([])}>Remover todos</button>
         </section>
         </div>
      </div>
  </> );
};
