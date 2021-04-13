import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyAPI from "./JoblyAPI";
import JobCard from "./JobCard";

function CompanyDetail() {
  const { handle } = useParams();
  const [isFetching, setIsFetching] = useState(false);
  const companyJobs = useRef();

  useEffect(() => {
    async function getCompany() {
      if (!companyJobs.current) setIsFetching(true);
      const companyRes = await JoblyAPI.getCompany(handle);
      console.log("companyJobs RES", companyRes);
      companyJobs.current = companyRes.jobs;
    }
    if (isFetching) getCompany();
  }, [isFetching]);

  console.log("COMPANY JOBS", companyJobs.current);
  return (
    isFetching && (
      <div>
        {companyJobs.current.map((job) => (
          <JobCard job={job} />
        ))}
      </div>
    )
  );
}

export default CompanyDetail;
