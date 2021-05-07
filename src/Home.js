import { useContext, useEffect, useState } from "react";
import UserContext from "./userContext";
import JoblyApi from "./JoblyAPI";
import JobCard from "./Jobs/JobCard";
import './Home.css'
import cityscape from './images/cityscape.jpg'

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
    <div 
    className="Home h-100 d-flex flex-column justify-content-center align-items-center"
    >
      {token ? (
        <div className="container">
          <h1>Welcome{", " + currentUser?.firstName}!</h1>
          <h4 className="my-5">Here are the jobs that you've applied to:</h4>
          <div className="row">
            {jobsAppliedTo.map((job) => (
              <div className="col-md-3">
                <JobCard job={job} />
              </div>
            ))}
          </div>
        </div>
      ) : (
          <div className="text-light d-flex flex-column justify-content-center align-items-center">
          <h1>Welcome to Jobly!</h1>
          <h3>Your dream career starts here.</h3>
          </div>
      )}
    </div>
  );
}

export default Home;
