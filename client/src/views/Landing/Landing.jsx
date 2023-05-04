import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.landing}>
      <h1 className={style.h1}>Proyecto Individual Countries</h1>

      <Link to="/home" className={style.button}>
        Ingresar
      </Link>
    </div>
  );
};

export default Landing;
