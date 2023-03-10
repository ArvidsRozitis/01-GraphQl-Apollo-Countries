import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import Search from "../Search/Search";
import SingleCountryCard from "./SingleCountryCard/SingleCountryCard";

const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

export interface CountryInterface {
  code: string;
  name: string;
  native: string;
  capital: string;
  continent: ContinentInterface;
  emoji: string;
  currency: string;
  languages: LanguageInterface[];
}
interface LanguageInterface {
  code: string;
  name: string;
}
interface ContinentInterface {
  code: string;
  name: String;
  countries: [CountryInterface];
}

const Countries = () => {
  const { data, loading, error } = useQuery<{ countries: CountryInterface[] }>(
    GET_COUNTRIES
  );
  const [filterBy, setFilterBy] = useState("");

  if (loading || error) {
    return <span>{error ? error.message : "Loading..."}</span>;
  }

  if (!data) {
    return <span>No data available.</span>;
  }

  const filteredCountriesCount = data.countries.filter((country) =>
    country.name.toLowerCase().includes(filterBy.toLowerCase())
  ).length;

  return (
    <div className="country__listContainer">
      <Search setFilterBy={setFilterBy} />
      {filteredCountriesCount === 0 && (
        <span className="notFound">No countries found</span>
      )}
      {data.countries
        .filter((country) =>
          country.name.toLowerCase().includes(filterBy.toLowerCase())
        )
        .map((country) => (
          <div className="countryList__listItem" key={country.code}>
            <SingleCountryCard country={country} />
          </div>
        ))}
    </div>
  );
};

export default Countries;
