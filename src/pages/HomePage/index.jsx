import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import 'react-toastify/dist/ReactToastify.css';

import style from "../../styles/style.module.scss";
import { Cards } from "../../components/cards/body";
import {  listaDeObjetos } from "../../components/ProductList/estoque";
import { Rodape } from "./rodape";


export const HomePage = () => {
  const [productList, setProductList] = useState(listaDeObjetos);
  const [cartList, setCartList] = useState([]);
  const [Modal, setModal]= useState(false);


  useEffect(() => {
    const cartListLocalStorage = JSON.parse(localStorage.getItem("cartList"))
    if (cartListLocalStorage ) {
      setCartList(cartListLocalStorage)

    }
 }, [])

 useEffect(() => {
  if (cartList.length ) {
    const armazenar = JSON.stringify(cartList)
    localStorage.setItem("cartList",armazenar)

  }
 
}, [cartList])

  const addCart = (product) => {

        setCartList([...cartList, product]);
   
  };
 


useEffect(() => {
    const listaItens = listaDeObjetos;
    setProductList(listaItens)
    console.log(listaDeObjetos);  
 }, []);
  
  return (
    <>
      <Header cartList={cartList} setModal={setModal}/>
      <Cards/>
      <main className={style}>
        <ProductList productList={productList} addCart={addCart} setProductList={setProductList} />
        {Modal ?<CartModal setModal={setModal} cartList={cartList} setCartList={setCartList} /> : null}
      </main>
      <Rodape/>
      
    </>
  );
};
