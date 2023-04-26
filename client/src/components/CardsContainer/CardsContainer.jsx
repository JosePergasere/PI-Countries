import { useState } from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterContinent,
  getCountries,
  orderCountries,
  orderPopulation,
  filterActivity,
  deleteAcitivty,
} from "../../Redux/actions";
import Pagination from "../Pagination/Pagination";
import GetAll from "../Hooks/GetAll";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const { allCountries, countries, activities } = useSelector((state) => state);

  GetAll();

  const handlerOrderName = (event) => {
    dispatch(orderCountries(event.target.value));
    setPagina(1);
  };

  const handlerOrderPopulation = (event) => {
    dispatch(orderPopulation(event.target.value));
    setPagina(1);
  };

  const handlerAllCountries = () => {
    dispatch(getCountries());

    setPagina(1);
  };

  const handlerFilterContinent = (event) => {
    dispatch(filterContinent(event.target.value));
    setPagina(1);
  };

  const handlerFilterActivity = (event) => {
    dispatch(filterActivity(event.target.value));
    setPagina(1);
  };

  const handlerDeleteAcitivty = (event) => {
    dispatch(deleteAcitivty(event.target.value));
  };

  //* PAGINADO

  const [pagina, setPagina] = useState(1); // Seteo la pagina inicial
  const paisesPorPagina = 10; // Seteo la cantidad de paises que quiero mostrar por pagina
  const maximoDePaginas = Math.ceil(countries.length / paisesPorPagina); // Saco la cantidad total de paginas que necesito

  return (
    <div className={style.container}>
      <div className={style.buttonsContainer}>
        <select
          value={""}
          className={style.select}
          name="orderName"
          onChange={handlerOrderName}
        >
          <option disabled={true}>Orden Alfabetico</option>
          <option hidden>Elegir orden</option>
          <option value="Ascendente">A-Z</option>
          <option value="Descendente">Z-A</option>
        </select>

        <select
          value={""}
          className={style.select}
          name="orderPopulation"
          onChange={handlerOrderPopulation}
        >
          <option disabled={true}>Orden Poblacion</option>
          <option hidden>Elegir orden</option>
          <option value="Ascendente">Mayor</option>
          <option value="Descendente">Menor</option>
        </select>

        <button className={style.select} onClick={handlerAllCountries}>
          <span>Todos los paises</span>
        </button>

        <select
          value={""}
          className={style.select}
          onChange={handlerFilterContinent}
        >
          <option hidden>Elegir Continente</option>
          <option value="All">Todos los Continentes</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="America">America</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antartica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select
          value={""}
          className={style.select}
          onChange={handlerFilterActivity}
        >
          <option hidden>Elegir Actividad</option>
          <option disabled={true}>Seleccionar actividad</option>
          {activities.map((activity) => (
            <option value={activity.Countries.map((country) => country.id)}>
              {activity.name}
            </option>
          ))}
        </select>
        <select
          value={""}
          className={style.select}
          onChange={handlerDeleteAcitivty}
        >
          <option hidden>Borrar Actividad</option>
          <option disabled={true}>Seleccionar actividad</option>
          {activities.map((activity) => (
            <option value={activity.id}>{activity.name}</option>
          ))}
        </select>
      </div>
      <div className={style.divPagination}>
        <Pagination
          setPagina={setPagina}
          pagina={pagina}
          maximoDePaginas={maximoDePaginas}
        />
      </div>
      <div className={style.cardsContainer}>
        {countries !== allCountries && countries.length !== 0
          ? countries
              ?.slice(
                (pagina - 1) * paisesPorPagina,
                (pagina - 1) * paisesPorPagina + paisesPorPagina
              )
              .map(({ id, name, flag, continent }) => {
                return (
                  <Card
                    key={id}
                    id={id}
                    name={name}
                    flag={flag}
                    continent={continent}
                  />
                );
              })
          : countries
              ?.slice(
                (pagina - 1) * paisesPorPagina,
                (pagina - 1) * paisesPorPagina + paisesPorPagina
              )
              .map(({ id, name, flag, continent }) => {
                return (
                  <Card
                    key={id}
                    id={id}
                    name={name}
                    flag={flag}
                    continent={continent}
                  />
                );
              })}
      </div>
    </div>
  );
};

export default CardsContainer;
