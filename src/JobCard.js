import { useContext, useEffect, useState } from "react";
import JoblyApi from "./JoblyAPI";
import UserContext from "./userContext";

function JobCard({ job }) {
  const { currentUser, applyForJob } = useContext(UserContext);
  const { id, title, salary, equity, companyName } = job;
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    if (applied) applyForJob(id);
    console.log("JOBCARD", currentUser);
  }, [applied]);

  function handleClick(e) {
    setApplied(() => true);
    e.target.style.opacity = ".5";
  }

  return (
    <div className="card w-75 mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-title">{companyName}</h5>
        <p className="card-text">Salary: {salary}</p>
        <p className="card-text">Equity:{equity}</p>
        <button onClick={handleClick} className="btn btn-danger">
          {!applied ? "APPLY" : "APPLIED"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;

// ask about local storage
