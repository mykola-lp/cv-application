import "./Card.css";

function Card({ title, className = "", children }) {
  return (
    <section className={`card ${className}`}>
      {title && <h2>{title}</h2>}

      {children}
    </section>
  );
}

export default Card;