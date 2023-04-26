import { useState } from "react";
import axios from "axios";
import validation from "./validation";
import { useSelector } from "react-redux";
import style from "./Form.module.css";

const Form = () => {
  //! ESTADOS
  const { allCountries } = useSelector((state) => state);

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "0",
    season: "",
    countries: [],
  });

  //* Estado de errores
  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: "",
  });

  //******************************************************************* */
  //! FUNCIONES

  //* Funcion que maneja los cambios de los input
  const changeHandler = (event) => {
    if (event.target.name === "countries") {
      if (!form.countries.find((id) => id === event.target.value)) {
        const { name, value } = event.target;
        setForm({
          ...form,
          [name]: [...form.countries, value],
        });

        setErrors(
          validation(
            {
              ...form,
              [name]: value,
            },
            errors
          )
        );
      } else {
        alert("Pais ya agregado");
      }
    } else {
      const { name, value } = event.target;

      setForm({ ...form, [name]: value });

      setErrors(validation({ ...form, [name]: value }, errors));
    }
  };

  //* BOTON SUBMIT QUE ENVIA EL FORM
  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      form.name.length !== 0 &&
      form.difficulty.length !== 0 &&
      form.season.length !== 0 &&
      form.countries.length !== 0
    ) {
      await axios
        .post("http://localhost:3001/activities", form)
        .then((res) => alert(res.data))
        .catch((error) => alert(error.message));
      setForm({
        name: "",
        difficulty: "",
        duration: "0",
        season: "",
        countries: [],
      });
      document.forms["formTag"].reset();
    } else {
      alert("Faltan datos");
    }
  };

  const deleteHandler = (event) => {
    setForm({
      ...form,
      countries: form.countries.filter((country) => country !== event),
    });
  };

  //******************************************************************* */
  return (
    <form name="formTag" className={style.form} onSubmit={submitHandler}>
      <div className={style.divs}>
        <label className={style.label}>Nombre</label>
        <input
          className={style.input}
          placeholder="Nombre de la actividad"
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
      </div>
      <span className={style.errors}>{errors.name}</span>

      <div className={style.divs}>
        <label className={style.label}>Dificultad </label>
        <select
          className={style.input}
          name="difficulty"
          onChange={changeHandler}
        >
          <option hidden>Elegir Dificultad</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <span className={style.errors}>{errors.difficulty}</span>

      <div className={style.divs}>
        <label className={style.label}>Horas de Duración</label>
        <input
          className={style.input}
          type="number"
          value={form.duration}
          onChange={changeHandler}
          name="duration"
          min={0}
        />
      </div>
      <span className={style.errors}>{errors.duration}</span>

      <div className={style.divs}>
        <label className={style.label}>Temporada</label>
        <select className={style.input} name="season" onChange={changeHandler}>
          <option hidden>Elegir Temporada</option>
          <option value="Invierno">Invierno</option>
          <option value="Otoño">Otoño</option>
          <option value="Primavera">Primavera</option>
          <option value="Verano">Verano</option>
        </select>
      </div>
      <span className={style.errors}>{errors.season}</span>

      <div className={style.divs}>
        <label className={style.label}>Pais</label>
        <select
          className={style.input}
          name="countries"
          onChange={changeHandler}
          value={""}
        >
          <option hidden>Elegir Pais</option>
          {allCountries.map((country) => (
            <option value={country.id}>{country.name}</option>
          ))}
        </select>
      </div>
      <span className={style.errors}>{errors.countries}</span>
      <div className={style.divCountries}>
        {form.countries.map((id) => {
          const selectedCountry = allCountries.find(
            (country) => country.id === id
          );
          return (
            <div className={style.divCountry} key={id}>
              <input
                type="button"
                value="X"
                onClick={() => deleteHandler(id)}
              />
              <p>{selectedCountry.name}</p>
              <img className={style.flag} src={selectedCountry.flag} />
            </div>
          );
        })}
      </div>
      <div>
        <button className={style.buttonSubmit} type="submit">
          Publicar Actividad
        </button>
      </div>
    </form>
  );
};

export default Form;
