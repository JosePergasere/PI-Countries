import GetActivity from "../../components/Hooks/getActivity";
import { useState } from "react";
import axios from "axios";
import style from "./EditActivity.module.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import imagen from "../../Icons/tarjeta-de-direccion.png";
const EditActivity = () => {
  const activity = GetActivity();
  const history = useHistory();

  const [put, setPut] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setPut({ ...put, [name]: value });
  };

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const res = await axios.put(
        `http://localhost:3001/activities/${activity.id}`,
        put
      );

      alert(res.data);
      history.push("/home");
    } catch (error) {
      alert(error.response.data.error);
      history.push("/home");
    }
  };
  return (
    <div className={style.containerFather}>
      <div className={style.divButton}>
        <Link className={style.buttonAct} to={"/home"}>
          <img className={style.imagenBack} src={imagen} alt="" />
          Volver al Home
        </Link>
      </div>
      <form className={style.container} onSubmit={submitHandler}>
        <div className={style.div}>
          <label>Nombre</label>
          <input
            className={style.input}
            placeholder={activity.name}
            type="text"
            value={put.name}
            name="name"
            onChange={changeHandler}
          />
        </div>
        <div className={style.div}>
          <label>Dificultad</label>
          <input
            className={style.input}
            placeholder={activity.difficulty}
            type="number"
            value={put.difficulty}
            min={0}
            max={5}
            name="difficulty"
            onChange={changeHandler}
          />
        </div>
        <div className={style.div}>
          <label>Duracion</label>
          <input
            className={style.input}
            placeholder={activity.duration}
            type="number"
            value={put.duration}
            min={0}
            name="duration"
            onChange={changeHandler}
          />
        </div>
        <select className={style.select} name="season" onChange={changeHandler}>
          <option hidden> Select Season</option>
          <option value="Invierno">Invierno</option>
          <option value="Otoño">Otoño</option>
          <option value="Verano">Verano</option>
          <option value="Primavera">Primavera</option>
        </select>
        <button className={style.button} type="submit">
          Publicar cambios
        </button>
      </form>
    </div>
  );
};

export default EditActivity;
