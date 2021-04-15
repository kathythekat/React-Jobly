import { useContext, useEffect, useState } from "react";
import JoblyApi from "./JoblyAPI";
import UserContext from "./userContext";

function JobCard({ job }) {
  const { currentUser, applyForJob } = useContext(UserContext);
  const { id, title, salary, equity, companyName } = job;
  const [applied, setApplied] = useState(false);

  // useEffect(() => {
  //   if (applied) {
  //     localStorage.setItem("appliedStatus", true);
  //   }
  // }, [applied]);

  async function handleClick(e) {
    setApplied(true);
    await applyForJob(id);
    if (applied) {
      e.target.style.opacity = ".5";
    }
  }
  const appJobIds = currentUser.applications;
  // console.log("ARRAY OF JOB IDS", appJobIds);
  // for (let ids of appJobIds) {
  //   if (id === ids) {
  //     localStorage.setItem("appliedStatus", true);
  //   }
  // }

  console.log(
    "LOCAL STORAGE IN JOB CARD",
    localStorage.getItem("appliedStatus")
  );

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
