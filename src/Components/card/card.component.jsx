import './card.styles.css';

const Card = ({ name, email, id }) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${id}?set=set2`}
      alt={`Monster avatar for ${name}`}
      loading="lazy"
    />
    <h3>{name}</h3>
    <p>{email}</p>
  </div>
);

export default Card;
