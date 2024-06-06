import { IoLogoWhatsapp } from "react-icons/io";
import CardsStyle from "../../components/cards/style.module.scss"


export const Rodape = () => {
  return (
    <>
      <footer className={CardsStyle.rodape}>
      <h3>Contato <a id="whats" href="https://wa.me/5534999729375"><IoLogoWhatsapp/>34 999 729 375</a> </h3>
        <h3>Av. Noruega,nº 236, Tibery,Uberlandia</h3>
        <p>&copy; 2024 - Todos os direitos reservados</p>

        <div id="mapa" className={CardsStyle.mapa}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5527211335693!2d-48.257193400000006!3d-18.906913799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4459851d7e487%3A0x8b88a734526bb2b7!2sAv.%20Noruega%2C%20236%20-%20Tibery%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038405-002!5e0!3m2!1spt-BR!2sbr!4v1717640140789!5m2!1spt-BR!2sbr" width="300" height="150"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </footer>
    </>
  );
};
