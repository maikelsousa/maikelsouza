import CardsStyle from "./style.module.scss";
import logoOculos from "../../assets/oculos.png";
import { Link } from "react-router-dom";
import vestuario from "../../assets/acessorios.png";
import acessorioss from "../../assets/ACESSORIOSs.png";
import eletronicos from "../../assets/eletronicos.jpg";
import resina from "../../assets/resina.png";
import { Rodape } from "../../pages/HomePage/rodape";


export const Cards = () => {
  return (<>

        <span className={CardsStyle.span}>
      <section className={CardsStyle.section1}>
      <div className={CardsStyle.bigCard1}>
          <Link to="/oculos">
            <img src={logoOculos} alt="" />
          </Link>
         
          </div>
        
          <div className={CardsStyle.circles}>
 
          <div className={CardsStyle.minicards}>
          <Link to="/acessorios"> 
        {/* acessorios de ciclismo */}
            <img src={acessorioss} alt="" />
          </Link>
          </div>

          <div className={CardsStyle.minicards}>
          <Link to="/vestuario">
          <img src={acessorioss} alt="" />
          </Link>
          </div>

              
          <div className={CardsStyle.minicards}>
          <Link to="/sorteios">
            <img src={vestuario} alt="" />
          </Link>
            </div>
            </div>

          
       
         
      </section>
      
      <section className={CardsStyle.section2}>
              
                 <Link to="/eletronicos">
            <img src={eletronicos} alt="" />
          </Link>

          <div className={CardsStyle.resina}>
        <Link to="/resinas">
            <img src={resina} alt="" />
          </Link>

          </div>
         
      
      </section>
      </span>
    </>);
};
