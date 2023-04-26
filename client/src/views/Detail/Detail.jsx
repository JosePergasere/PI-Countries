import useCountry from "../../components/Hooks/useCountry";
import style from "./Detail.module.css";
import imagen from "../../Icons/tarjeta-de-direccion.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Detail = () => {
  //* Ejecucion del Hook
  const country = useCountry();

  return (
    <div>
      <div className={style.divButton}>
        <Link className={style.buttonAct} to="/home">
          <img className={style.imagenBack} src={imagen} alt="" />
          Volver al Home
        </Link>
      </div>
      <div className={style.divPadre}>
        {country.name ? (
          <div className={style.Detail}>
            <h2 className={style.name}>{country.name}</h2>
            <img src={country.flag} alt="" className={style.img} />
            <p className={style.pe}>ID: {country.id} </p>
            <p className={style.pe}>Continent: {country.continent}</p>
            <p className={style.pe}>Capital: {country.capital}</p>
            <p className={style.pe}>Subregion: {country.subregion}</p>
            <p className={style.pe}>Area: {country.area}</p>
            <p className={style.pe}>Population: {country.population}</p>
            <hr />
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
        <div className={style.containerActivities}>
          <h3 className={style.h3}>ACTIVIDADES</h3>

          <div className={style.divActivites}>
            {country.Activities && country.Activities.length ? (
              country.Activities.map((activity) => (
                <div className={style.activity} key={activity.id}>
                  <p>Nombre: {activity.name}.</p>
                  <p>Dificultad: {activity.difficulty}.</p>
                  <p>Duración: {activity.duration} hs.</p>
                  <p>Temporada: {activity.season}.</p>
                </div>
              ))
            ) : (
              <h2 className={style.activityNone}>No hay actividades</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
