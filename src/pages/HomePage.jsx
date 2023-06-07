import React from "react";

const HomePage = () => {
  return (
    <div className="w-3/4 mx-auto flex flex-col items-center justify-center">
      <h1 className="mb-[10px] text-7xl font-bold leading-header">Country</h1>
      <input
        type="text"
        className="w-full px-7 py-5 outline-none leading-regular border-charcoal border-[0.5px] rounded-[10px] placeholder:leading-regular focus:border-purple focus:border-[3px] focus:rounded-lg"
        placeholder="Type any country name"
      />
    </div>
  );
};

export default HomePage;
