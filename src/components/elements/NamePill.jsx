import React from "react";

const NamePill = ({ text }) => {
  return (
    <div className="inline mr-[5px] py-[5px] px-4 bg-jadeGreen w-fit text-white font-bold rounded-[50px]">
      {text}
    </div>
  );
};

export default NamePill;
