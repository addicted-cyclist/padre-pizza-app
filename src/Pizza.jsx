const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <img src={props.image} alt={props.name} />
      <p>{props.desc}</p>
    </div>
  );
};

export default Pizza;
