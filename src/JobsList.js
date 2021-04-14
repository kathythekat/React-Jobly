import SearchBar from "./SearchBar";
import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyAPI";
import JobCard from "./JobCard";

function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(jobs);

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
      console.log("JOB LIST", jobList);
      setJobs(jobList);
    }
    if (searchTerm) getJobsList();
  }, [searchTerm]);

  if (!jobs.length) return <div>Loading....</div>;

  return (
    <div>
      <h1>Jobs</h1>
      <SearchBar addSearchTerm={addSearchTerm} />
      {jobs.map((job) => (
        <JobCard job={job} />
      ))}
    </div>
  );
}

export default JobsList;
