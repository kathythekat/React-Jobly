import JoblyApi from "./JoblyAPI";
import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanyList() {
      const companyList = await JoblyApi.getAllCompanies();
      setCompanies(companyList);
    }
    getCompanyList();
  }, []);
  console.log(companies);

  return (
    <div>
      {companies.map((company) => (
        <CompanyCard company={company} />
      ))}
    </div>
  );
}

export default CompanyList;
