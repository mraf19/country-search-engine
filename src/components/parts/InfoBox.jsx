import React from "react";
import CountryCode from "../elements/CountryCode";
import CountryInfo from "../elements/CountryInfo";

const InfoBox = () => {
  return (
    <div className="flex flex-row gap-[5%]">
      <div className="mt-12 w-[40%]">
        <CountryInfo latitude={[-5, 120]} />
        <CountryCode type={"calling-code"} code={62} />
      </div>
      <div className="mt-12 w-[40%]">
        <CountryInfo
          capital={"Jakarta"}
          region={"Asia"}
          subRegion={"South-Eastern Asia"}
        />
        <CountryCode type={"currency"} code={"IDR"} />
      </div>
    </div>
  );
};

export default InfoBox;
