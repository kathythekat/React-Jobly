import SearchBar from "../Forms/SearchBar";
import React, { useState, useEffect, useContext } from "react";
import JoblyApi from "../JoblyAPI";
import JobCard from "./JobCard";
import UserContext from "../userContext";

function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    async function getJobsList() {
      const jobList = await JoblyApi.getAllJobs();
      setJobs(jobList);
    }
    getJobsList();
  }, []);

  function addSearchTerm(term) {
    setSearchTerm(term);
  }

  useEffect(() => {
    async function getJobsList() {
      const jobList = await JoblyApi.getAllJobs(searchTerm);
      setJobs(jobList);
    }
    if (searchTerm) getJobsList();
  }, [searchTerm]);

  if (!jobs.length) return <div>Loading....</div>;

  return (
    <div>
      {currentUser && (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>Jobs</h1>
          <SearchBar addSearchTerm={addSearchTerm} />
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default JobsList;
