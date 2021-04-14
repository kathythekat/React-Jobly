import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyAPI from "./JoblyAPI";
import JobCard from "./JobCard";

function CompanyDetail() {
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
      {companyJobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </div>
  );
}

export default CompanyDetail;
