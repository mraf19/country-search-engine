import React from "react";
import CountryCode from "../elements/CountryCode";
import CountryInfo from "../elements/CountryInfo";

const InfoBox = ({ country }) => {
  const { latlng, region, subregion, currencies, capital } = country;
  const currencyName = Object.keys(currencies)[0];
  console.log(currencyName);
  return (
    <div className="flex flex-row gap-[5%]">
      <div className="mt-12 w-[40%]">
        <CountryInfo latitude={latlng} />
        <CountryCode type={"calling-code"} code={62} />
      </div>
      <div className="mt-12 w-[40%]">
        <CountryInfo
          capital={capital[0]}
          region={region}
          subRegion={subregion}
        />
        <CountryCode type={"currency"} code={currencyName} />
      </div>
    </div>
  );
};

export default InfoBox;
