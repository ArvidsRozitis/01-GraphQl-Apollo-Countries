import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import Search from "../../Search/Search";
import CountrieDetails from "../CountrieListItem/CountrieDetails/CountrieDetails";
import styles from "./CountriesList.module.scss";

const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

export interface Country {
  code: string;
  name: string;
  native: string;
  capital: string;
  continent: Continent;
  emoji: string;
  currency: string;
  languages: Language[];
}

interface Language {
  code: string;
  name: string;
}

interface Continent {
  code: string;
  name: String;
  countries: [Country];
}

const Countries = () => {
  const { data, loading } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);
  const [filterBy, setFilterBy] = useState("");

  if (loading) {
    return <span>Loading...</span>;
  }

  if (!data) {
    return <span>Error: No data available.</span>;
  }

  const filteredCountries = data.countries.filter((country) =>
    country.name.toLowerCase().includes(filterBy.toLowerCase())
  );

  return (
    <div className={styles.listContainer}>
      <Search setFilterBy={setFilterBy} />

      {filteredCountries.length === 0 && (
        <span className="notFound">No countries found</span>
      )}

      <div className={styles.listItemContainer}>
        {filteredCountries.map((country) => (
          <CountrieDetails country={country} key={country.code} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
