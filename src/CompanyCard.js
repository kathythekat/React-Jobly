import { Link } from "react-router-dom";

function CompanyCard({ company }) {

  const {handle, description} = company 
  return (
    <Link
      className="Link"
      style={{ color: "black" }}
      to={`companies/${handle}`}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{handle}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;
