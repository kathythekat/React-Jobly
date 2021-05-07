import JoblyApi from "../JoblyAPI";
import React, { useContext, useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import SearchBar from "../Forms/SearchBar";
import UserContext from "../userContext";

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { token } = useContext(UserContext);

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
      console.log("COMPANY LIST", companyList);
      setCompanies(companyList);
    }
    if (searchTerm) getCompanyList();
  }, [searchTerm]);

  if (!companies.length) return <div>Loading....</div>;
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Companies</h1>
        <SearchBar addSearchTerm={addSearchTerm} />
        {companies.map((company) => (
          <div className="col-sm-5 mt-3" key={company.handle}>
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyList;
