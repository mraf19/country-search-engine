import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCallingCode } from "../../features/callingcode/callingcodeSlice";
import { Tooltip } from "react-tooltip";

const CountryCallingCode = ({ code }) => {
  const dispatch = useDispatch();
  const callingCode = useSelector((state) => state.callingCode.callingCode);
  const total = callingCode.length;

  useEffect(() => {
    dispatch(fetchCallingCode(code));
  }, []);

  console.log(total);
  return (
    <div className="mt-7">
      <h4 className="leading-regular font-[500] mb-3 first-letter:uppercase">
        Calling code
      </h4>
      <p className="leading-large text-5xl text-purple font-bold mb-3">
        {code}
      </p>
      <p className="leading-medium text-sm">
        <span
          className="text-purple underline text-sm"
          data-tooltip-id="calling-code-tooltip"
          data-tooltip-place="bottom"
        >
          {total} country
        </span>{" "}
        with this calling code
      </p>
      <Tooltip id="calling-code-tooltip">
        {callingCode.map((code, index) => (
          <li
            key={`listCode-${index}`}
            className="list-none text-white font-normal text-sm leading-small"
          >
            {code.name}
          </li>
        ))}
      </Tooltip>
    </div>
  );
};

export default CountryCallingCode;
