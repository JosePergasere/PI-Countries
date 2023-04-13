const Card = (props) => {
  return (
    <div>
      <p>ID: {props.id}</p>
      <p>Name:{props.name}</p>
      <img src={props.flag} alt="" />
      <p>Continent:{props.continent}</p>
    </div>
  );
};

export default Card;
