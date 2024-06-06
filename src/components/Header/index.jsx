import { useState } from "react";
import Logo from "../../assets/Udi.png";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "../../styles/style.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";

export const Header = ({cartList, setModal}) => {

   const [value, setValue] = useState("");
   return (<>
      <header className={style.cabecalho}>
         <img src={Logo} alt="" />
     
    <div className={style.menu}>
         <h1>Udi Variedades</h1>
         <nav className="navBar">
            <button>Home</button>
            <button>Cart</button>
            <IoLogoWhatsapp />
            <button>Contato</button>
         </nav>
           
            <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
            </div>

            {cartList ? (<button onClick={()=>setModal(true)}>
                <MdShoppingCart size={21} />
               <span >{cartList.length}</span>
            </button>) : null}
            
         
      </header>
      </>  );
};
