import React from "react";

const CountryCode = ({ type, code }) => {
  return (
    <div className="mt-7">
      <h4 className="leading-regular font-[500] mb-3 first-letter:uppercase">
        {type}
      </h4>
      <p className="leading-large text-5xl text-purple font-bold mb-3">
        {code}
      </p>
      <p className="leading-medium text-sm">
        <span className="text-purple underline text-sm">1 country</span> with
        this {type}
      </p>
    </div>
  );
};

export default CountryCode;
