import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">
      <h1 className="card-header"> {props.name} </h1>
      <img className="card-header-img" alt={props.alt} src={props.img} />
      <p className="card-body"> {props.description} </p>
      <Link to={props.id}>
        <button className="card-button">View More</button>
      </Link>
    </div>
  );
}

export default Card;
