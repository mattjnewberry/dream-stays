import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <h1 className="card-header"> {props.name} </h1>
      <img className="card-header-img" alt={props.alt} src={props.img} />
      <p className="card-body"> {props.description} </p>
      <button className="card-button" onClick={props.action}>
        {props.actionText}
      </button>
    </div>
  );
}

export default Card;
