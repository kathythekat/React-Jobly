import JoblyApi from "./JoblyAPI";
import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import SearchBar from "./SearchBar"

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    async function getCompanyList() {
      const companyList = await JoblyApi.getAllCompanies();
      setCompanies(companyList);
    }
    getCompanyList();
  }, []);

  function addSearchTerm(term) {
    setSearchTerm(term);
  }

  useEffect(() => {
    async function getCompanyList() {
      const companyList = await JoblyApi.getAllCompanies(searchTerm);
      console.log("COMPANY LIST", companyList)
      setCompanies(companyList);
    }
    if (searchTerm) getCompanyList();
  }, [searchTerm]);
  
  if (!companies.length) return (<div>Loading....</div>)

  return (
    <div>
      <SearchBar addSearchTerm={addSearchTerm} />
      {companies.map((company) => (
        <CompanyCard company={company} />
      ))
      }
    </div>
  );
}

export default CompanyList;