import React from "react";

const ResultPage = () => {
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
            Indonesia
          </h3>
          <img
            src="/src/assets/image 1.svg"
            alt="nation-flag"
            className="w-[46px] h-[30px] inline"
          />
        </div>

        <div className="inline mr-[5px] py-[5px] px-4 bg-jadeGreen w-fit text-white font-bold rounded-[50px]">
          ID
        </div>
        <div className="inline mr-[5px] py-[5px] px-4 bg-jadeGreen w-fit text-white font-bold rounded-[50px]">
          Republic of Indonesia
        </div>
        <div className="inline mr-[5px] py-[5px] px-4 bg-jadeGreen w-fit text-white font-bold rounded-[50px]">
          Republik Indonesia
        </div>
      </div>
      <div className="flex flex-row gap-[5%]">
        <div className="mt-12 w-[40%]">
          <div className="px-[25px] py-[25px] shadow-suggestions bg-[url('src/assets/globe.svg')] bg-no-repeat bg-right-top">
            <h4 className="font-[500] leading-regular mb-3">LatLong</h4>
            <p className="font-bold text-5xl text-purple">-5.0, 120.0</p>
          </div>
          <div className="mt-7">
            <h4 className="leading-regular font-[500] mb-3">Calling Code</h4>
            <p className="leading-large text-5xl text-purple font-bold mb-3">
              62
            </p>
            <p className="leading-medium text-sm">
              <span className="text-purple underline text-sm">1 country</span>{" "}
              with this calling code
            </p>
          </div>
        </div>
        <div className="mt-12 w-[40%]">
          <div className="px-[25px] py-[25px] shadow-suggestions">
            <p className="font-normal leading-regular mb-2">
              Capital:{" "}
              <span className="font-bold leading-regular">Jakarta</span>
            </p>
            <p className="font-normal leading-regular mb-2">
              Region: <span className="font-bold leading-regular">Asia</span>
            </p>
            <p className="font-normal leading-regular mb-2">
              Subregion:{" "}
              <span className="font-bold leading-regular">
                South-Eastern Asia
              </span>
            </p>
          </div>
          <div className="mt-7">
            <h4 className="leading-regular font-[500] mb-3">Currency</h4>
            <p className="leading-large text-5xl text-purple font-bold mb-3">
              IDR
            </p>
            <p className="leading-medium text-sm">
              <span className="text-purple underline text-sm">1 country</span>{" "}
              with this calling code
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
