import React from "react";

const CountryInfo = ({ latitude, capital, region, subRegion }) => {
  if (latitude) {
    return (
      <div className="px-[25px] py-[25px] shadow-suggestions bg-[url('src/assets/globe.svg')] bg-no-repeat bg-right-top">
        <h4 className="font-[500] leading-regular mb-3">LatLong</h4>
        <p className="font-bold text-5xl text-purple">{`${latitude[0]}.0, ${latitude[1]}.0`}</p>
      </div>
    );
  }
  return (
    <div className="px-[25px] py-[25px] shadow-suggestions">
      <p className="font-normal leading-regular mb-2">
        Capital: <span className="font-bold leading-regular">{capital}</span>
      </p>
      <p className="font-normal leading-regular mb-2">
        Region: <span className="font-bold leading-regular">{region}</span>
      </p>
      <p className="font-normal leading-regular mb-2">
        Subregion:{" "}
        <span className="font-bold leading-regular">{subRegion}</span>
      </p>
    </div>
  );
};

export default CountryInfo;
