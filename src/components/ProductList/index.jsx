import { ProductCard } from "./ProductCard";
import style from "../../styles/style.module.scss";
import { useEffect, useState } from "react";
import { listaDeObjetos } from "./estoque";


export const ProductList =  ({ productList,addCart,setProductList }) => {

  const [chunkSize,setChunksite] = useState(8);
  const [variavel,setVariavel] = useState(listaDeObjetos.slice(0, chunkSize));
  



function loadMore() {
  setChunksite(chunkSize+8)
  setVariavel(listaDeObjetos.slice(0, chunkSize));
  console.log(chunkSize);
  localStorage.setItem("chave",JSON.stringify(visibleItems))
}




return (
   <ul className={style.main}>

     {variavel?.map((product) => {
       return (
         <ProductCard key={product.nome} item={product} addCart={addCart} />
       );
     })}
   {<button onClick={()=>loadMore()}>carregar mais itens</button>}
   </ul>
 );

 
};


