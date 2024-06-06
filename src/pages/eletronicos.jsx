import { Header } from "../../components/Header"
import { ProductCard } from "../../components/ProductList/ProductCard"
import { listaDeObjetos } from "../../components/ProductList/estoque"

export const Oculos =() =>{
 let oculosList =  listaDeObjetos.filter(item=>{
    if (item.categoria.includes("Eletronicos")){
        return item;
    }
    
})
 
    return(<>
        <Header/>
        {Eletronicos.map(item=>( 
             <ProductCard key={item.nome} item={item}/>
       ) )}
       
    </>)
}