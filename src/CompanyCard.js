import { Link } from "react-router-dom";

function CompanyCard({ company }) {
  return (
    <Link
      className="Link"
      style={{ color: "black" }}
      to={`companies/${company.handle}`}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{company.handle}</h5>
          <p className="card-text">{company.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;
