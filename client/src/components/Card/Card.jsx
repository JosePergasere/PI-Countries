import style from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className={style.card}>
      <Link className={style.link} to={`/detail/${props.id}`}>
        <p> {props.name}</p>
      </Link>
      <img className={style.image} src={props.flag} alt="" />
      <p> {props.continent}</p>
    </div>
  );
};

export default Card;
