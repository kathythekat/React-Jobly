import {useState} from "react"

function JobCard({ job }) {
  const [applied, setApplied] = useState(false)

  function handleClick(e) {
    setApplied(() => true);
    e.target.style.opacity =".5"
  }
 
  return (
    <div className="card w-75">
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-text">
        Salary: {job.salary}
        </p>
        <p className="card-text">
        Equity:{job.equity}
        </p>
        <button onClick={handleClick} className="btn btn-danger">
           {!applied ? "APPLY" : "APPLIED"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;

// ask about local storage