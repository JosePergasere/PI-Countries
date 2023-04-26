import style from "./Pagination.module.css";
const Pagination = ({ setPagina, pagina, maximoDePaginas }) => {
  const funcionIrAPagina = (numeroDePagina) => {
    setPagina(numeroDePagina);
  };
  const botones = Array.from(
    { length: maximoDePaginas },
    (_, index) => index + 1
  );

  const funcionSiguiente = () => {
    setPagina(pagina + 1);
  };
  const funcionAnterior = () => {
    setPagina(pagina - 1);
  };

  return (
    <div className={style.divButtons}>
      <button
        className={style.button}
        onClick={funcionAnterior}
        disabled={pagina === 1 || pagina < 1}
      >
        Previous Page
      </button>
      {botones.map((numeroDePagina) => (
        <button
          key={numeroDePagina}
          className={`${style.buttons} ${
            numeroDePagina === pagina ? style.active : ""
          }`}
          onClick={() => funcionIrAPagina(numeroDePagina)}
        >
          {numeroDePagina}
        </button>
      ))}
      <button
        className={style.button}
        onClick={funcionSiguiente}
        disabled={pagina === maximoDePaginas}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
