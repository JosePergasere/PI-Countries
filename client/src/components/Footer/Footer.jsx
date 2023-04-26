import github from "../../Icons/github.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Footer.module.css";
import whatsapp from "../../Icons/whatsapp.png";
import instagram from "../../Icons/instagram.png";
import facebook from "../../Icons/facebook.png";
import youtube from "../../Icons/youtube.png";
const Footer = () => {
  return (
    <div className={style.divFooter}>
      <p className={style.pe}>Creador: Jose Pergasere</p>
      <p className={style.pe}>
        Website creada para el proyecto individual de Henry
      </p>

      <a href="https://github.com/JosePergasere">
        <img className={style.imagen} src={github} alt="" />
      </a>
      <a href="https://web.whatsapp.com/">
        <img className={style.imagen} src={whatsapp} alt="" />
      </a>
      <a href="https://www.instagram.com/">
        <img className={style.imagen} src={instagram} alt="" />
      </a>
      <a href="http://faceboook.com/">
        <img className={style.imagen} src={facebook} alt="" />
      </a>
      <a href="https://www.youtube.com/">
        <img className={style.imagen} src={youtube} alt="" />
      </a>
    </div>
  );
};

export default Footer;
