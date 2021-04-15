import { useRef, useContext, useEffect, useState } from "react";
import UserContext from "./userContext";

function JobCard({ job }) {
  const { currentUser, applyForJob } = useContext(UserContext);
  const { id, title, salary, equity, companyName } = job;
  const [applied, setApplied] = useState(false);
  const isInitialAppliedRef = useRef(false);

  useEffect(() => {
    if (!isInitialAppliedRef.current && currentUser.applications) {
      isInitialAppliedRef.current = true;
      setApplied(currentUser.applications.includes(id));
    }
  }, [currentUser]);

  async function handleClick(e) {
    setApplied(true);
    await applyForJob(id);
  }

  return (
    <div className="card w-75 mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-title">{companyName}</h5>
        <p className="card-text">Salary: {salary}</p>
        <p className="card-text">Equity:{equity}</p>
        {!applied && (
          <button onClick={handleClick} className="btn btn-danger">
            Apply
          </button>
        )}
        {applied && <button className="btn btn-warning">APPLIED</button>}
      </div>
    </div>
  );
}

export default JobCard;

// ask about local storage
