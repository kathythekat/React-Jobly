import JoblyApi from "../JoblyAPI";
import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import SearchBar from "../Forms/SearchBar";

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getCompanyList() {
      const companyList = await JoblyApi.getAllCompanies();
      setCompanies(companyList);
      setFilteredCompanies(companyList);
    }
    getCompanyList();
  }, []);

  function addSearchTerm(term) {
    setSearchTerm(term);
  }

  useEffect(() => {
    async function filterCompanies() {
      const filtered = companies.filter((company) =>
        company.name.toUpperCase().includes(searchTerm)
      );
      setFilteredCompanies(filtered);
    }
    if (searchTerm) filterCompanies();
    else if (!searchTerm) setFilteredCompanies(companies);
  }, [searchTerm, companies]);

  if (!companies.length) return <div>Loading....</div>;
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Companies</h1>
        <SearchBar addSearchTerm={addSearchTerm} />
        {filteredCompanies.map((company) => (
          <div className="col-sm-5 mt-3" key={company.handle}>
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyList;
