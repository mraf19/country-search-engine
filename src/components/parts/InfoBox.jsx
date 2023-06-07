import React from "react";
import CountryCallingCode from "../elements/CountryCallingCode";
import CountryInfo from "../elements/CountryInfo";
import CountryCurrency from "../elements/CountryCurrency";

const InfoBox = ({ country }) => {
  const { latlng, region, subregion, currencies, capital, idd } = country;
  const currencyName = Object.keys(currencies)[0].toString();
  const callingCode = `${idd.root[1]}${
    idd.suffixes.length === 1 ? idd.suffixes[0] : ""
  }`;

  return (
    <div className="flex flex-row gap-[5%]">
      <div className="mt-12 w-[40%]">
        <CountryInfo latitude={latlng} />
        <CountryCallingCode code={callingCode} />
      </div>
      <div className="mt-12 w-[40%]">
        <CountryInfo
          capital={capital[0]}
          region={region}
          subRegion={subregion}
        />
        <CountryCurrency code={currencyName} />
      </div>
    </div>
  );
};

export default InfoBox;
