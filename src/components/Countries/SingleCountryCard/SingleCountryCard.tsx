import { CountryInterface } from "../Countries";
import { useState } from "react";
import Button from "../../Button/Button";
import AdditonalCountryInfo from "./AdditonalCountryInfo/AdditonalCountryInfo";

export interface CountryProps {
  country: CountryInterface;
}

const SingleCountryCard = ({ country }: CountryProps) => {
  const [visable, setVisable] = useState(false);

  const handleClick = () => {
    setVisable(!visable);
  };

  return (
    <div className="countryCard__container">
      <div className="countryCard__primaryInfo">
        <div className="countryCard__primaryText">
          <h2 className="countryCard__countryName">{country.name}</h2>
          <h3 className="countryCard__countryCode">country code: {country.code}</h3>
        </div>
        <Button
          onClick={() => handleClick()}
          label={!visable ? "show more" : "show less"}
        />
      </div>
      {visable && <AdditonalCountryInfo country={country} />}
    </div>
  );
};

export default SingleCountryCard;
