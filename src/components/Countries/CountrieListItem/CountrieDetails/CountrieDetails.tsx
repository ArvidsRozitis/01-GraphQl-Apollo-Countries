import { Country } from "../../CountriesList/CountriesList";
import { useState } from "react";
import styles from "./CountrieDetails.module.scss";

import ExpandedCountryInfo from "../ExpandedCountryInfo/ExpandedCountryInfo";
import AccordionButton from "../../../AccordionButton/AccordionButton";

export interface CountryProps {
  country: Country;
}

const CountrieDetails = ({ country }: CountryProps) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>
          {country.name} ({country.code})
        </h2>
        <AccordionButton onClick={() => handleClick()} active={visible} />
      </div>
      {visible && <ExpandedCountryInfo country={country} />}
    </div>
  );
};

export default CountrieDetails;
