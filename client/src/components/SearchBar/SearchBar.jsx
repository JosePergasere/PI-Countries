import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountries } from "../../Redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    if (search.length === 0) return alert("Debes ingresar un pais");
    dispatch(searchCountries(search));
    setSearch("");
  }

  function onInputChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className={style.container}>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="search"
          placeholder="Escriba el pais"
          onChange={onInputChange}
          value={search}
          className={style.input}
        />
        <input className={style.button} type="submit" value="Buscar 🔎" />
      </form>
    </div>
  );
};

export default SearchBar;
