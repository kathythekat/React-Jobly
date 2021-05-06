import { useContext, useEffect, useState } from "react";
import UserContext from "./userContext";
import JoblyApi from "./JoblyAPI";
import JobCard from "./Jobs/JobCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";

const jobIcon = <FontAwesomeIcon icon={faSuitcase} size="8x" />;

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

  return (
    <div className="my-3 d-flex justify-content-center">
      {token ? (
        <div className="container">
          <h1>Welcome back{", " + currentUser?.firstName}!</h1>
          <h4 className="my-3">Here are the jobs that you've applied to:</h4>
          <div className="row">
            {jobsAppliedTo.map((job) => (
              <div className="col-md-3">
                <JobCard job={job} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1>Welcome to Jobly!</h1>
          {jobIcon}
        </div>
      )}
    </div>
  );
}

export default Home;
