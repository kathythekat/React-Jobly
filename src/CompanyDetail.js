import { useContext, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import JoblyAPI from "./JoblyAPI";
import JobCard from "./JobCard";
import UserContext from "./userContext";

function CompanyDetail() {
  const { token } = useContext(UserContext);
  const { handle } = useParams();
  const [companyJobs, setCompanyJobs] = useState([]);

  useEffect(() => {
    async function getCompany() {
      const companyRes = await JoblyAPI.getCompany(handle);
      setCompanyJobs(companyRes.jobs);
    }
    getCompany();
  }, []);

  if (!companyJobs.length) return <div>Loading....</div>;

  return (
    <div>
      {token && (
        <div>
          {companyJobs.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>
      )}
      {!token && <Redirect to="/login" />}
    </div>
  );
}

export default CompanyDetail;
