import uuid from "react-uuid";
import { useQuery, gql } from "@apollo/client";
import { CountryInterface } from "../../Countries";
import { CountryProps } from "../SingleCountryCard";

const GET_COUNTRY = gql`
  query country($code: ID!) {
    country(code: $code) {
      name
      capital
      currency
      languages {
        name
      }
    }
  }
`;

const AdditonalCountryInfo = ({ country }: CountryProps) => {
  const { data, loading, error } = useQuery<{ country: CountryInterface }>(
    GET_COUNTRY,
    {
      variables: { code: country.code },
    }
  );

  if (loading || error) {
    return <span>{error ? error.message : "Loading..."}</span>;
  }

  if (!data) {
    return <span>No data available.</span>;
  }

  const seperateLanguages = (index: number) => {
    if (data.country.languages.length - 1 > index) {
      return ",";
    }
  };

  return (
    <>
      <hr className="divider" />
      <div className="additionalInfo__container">
        <div className="flag__container">
          <img
            className="flag__image"
            src={`https://flagsapi.com/${country.code}/shiny/64.png`}
            alt="image mising"
          />
          <label className="flag__label">Country flag</label>
        </div>
        <div className="additionalText__wrapper">
          <h3>{data.country.capital} :Capital</h3>
          <h3>{data.country.currency} :Currency</h3>
          <label className="languages__list">
            {data.country.languages.map((language, index) => (
              <span key={uuid()}>
                {language.name}
                {seperateLanguages(index)}
              </span>
            ))}
            :Languages
          </label>
        </div>
      </div>
    </>
  );
};

export default AdditonalCountryInfo;
