import { useContext, useEffect, useState } from "react";
import UserContext from "./userContext";
import JoblyApi from "./JoblyAPI";

function Home() {
  const { currentUser, token } = useContext(UserContext);
  const jobApps = currentUser?.applications;
  const [jobsAppliedTo, setJobsAppliedTo] = useState([]);

  useEffect(async () => {
    const fetchJobs = async () =>
      await Promise.all(
        jobApps.map(async (jobId) => {
          return await JoblyApi.getJob(jobId);
        })
      );

    if (!jobApps) {
      return;
    }
    setJobsAppliedTo(await fetchJobs());
  }, [jobApps]);

  console.log("ARRAY OF JOBS APPLIED TO:", jobsAppliedTo);

  return (
    <div className="my-3 d-flex justify-content-center">
      {token ? (
        <div>
          <h1>Welcome back, {currentUser?.firstName}!</h1>
        </div>
      ) : (
        <h1>Welcome to Jobly!</h1>
      )}
    </div>
  );
}

export default Home;
