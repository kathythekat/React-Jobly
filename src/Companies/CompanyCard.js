import { Link } from "react-router-dom";

function CompanyCard({ company }) {
  const { name, description, handle } = company;
  return (
    <Link
      className="Link"
      style={{ color: "black", textDecoration: "none" }}
      to={`companies/${handle}`}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;
