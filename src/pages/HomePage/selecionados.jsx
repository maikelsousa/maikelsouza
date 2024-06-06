import { Header } from "../../components/Header"
import { ProductCard } from "../../components/ProductList/ProductCard"
import { listaDeObjetos } from "../../components/ProductList/estoque"

export const Oculos =() =>{
 let oculoslist =  listaDeObjetos.filter(item=>{
    if (item.categoria.includes("Oculos")){
        return item;
    }
    
})
 
    return(<>
        <Header/>
        {oculoslist.map(item=>( 
             <ProductCard key={item.nome} item={item}/>
       ) )}
       
    </>)
}