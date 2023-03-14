import uuid from "react-uuid";
import { useQuery, gql } from "@apollo/client";
import { Country } from "../../CountriesList/CountriesList";
import { CountryProps } from "../CountrieDetails/CountrieDetails";
import styles from "./ExpandedCountryInfo.module.scss";
import ExtendedLoading from "../../../Loading/ExtendedLoading/ExtendedLoading";

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

const ExpandedCountryInfo = ({ country }: CountryProps) => {
  
  const { data, loading } = useQuery<{ country: Country }>(GET_COUNTRY, {
    variables: { code: country.code },
  });

  if (loading) {
    return <ExtendedLoading />;
  }

  if (!data) {
    return <span>Error: no data available</span>;
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.extendedInfoWrapper}>
          <h3 className={styles.heading}>Capital: {data.country.capital}</h3>
          <h3 className={styles.heading}>Currency: {data.country.currency}</h3>
          <div className={styles.languagesContainer}>
            <label className={styles.heading}>Languages:</label>
            {data.country.languages.map((language) => (
              <div className={styles.language} key={uuid()}>
                {language.name}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={`https://flagsapi.com/${country.code}/shiny/64.png`}
            onError={(event) => event.currentTarget.style.display = 'none'}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpandedCountryInfo;
