import React from "react";
import NamePill from "../components/elements/NamePill";
import InfoBox from "../components/parts/InfoBox";
import { useSelector } from "react-redux";

const ResultPage = () => {
  const country = useSelector((state) => state.country.selectedCountry);
  console.log(country);
  return (
    <div className="w-full px-[90px] py-[90px]">
      <button className="bg-purple px-4 py-4 leading-regular rounded-[10px]">
        <img
          src="/src/assets/arrow-left.svg"
          alt="arrow-left"
          className="mr-[14px] inline"
        />
        <p className="inline text-white align-middle">Back to Homepage</p>
      </button>
      <div className="mt-[50px]">
        <div className="mb-4">
          <h3 className="inline mr-[10px] text-5xl font-bold leading-large align-middle">
            {country.name.common}
          </h3>
          <img
            src={country.flags.svg}
            alt={country.flags.alt}
            className="w-[46px] h-[30px] inline"
          />
        </div>
        {country.altSpellings.map((spelling, index) => (
          <NamePill text={spelling} key={`name-spelling-${index}`} />
        ))}
      </div>
      <InfoBox country={country} />
    </div>
  );
};

export default ResultPage;
