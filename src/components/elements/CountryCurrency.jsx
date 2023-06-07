import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrency } from "../../features/currency/currencySlice";
import { Tooltip } from "react-tooltip";

const CountryCurrency = ({ code }) => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency.currency);
  const total = currency.length;

  useEffect(() => {
    dispatch(fetchCurrency(code));
  }, []);

  return (
    <div className="mt-7">
      <h4 className="leading-regular font-[500] mb-3">Currency</h4>
      <p className="leading-large text-5xl text-purple font-bold mb-3">
        {code}
      </p>
      <p className="leading-medium text-sm">
        <span
          className="text-purple underline text-sm"
          data-tooltip-id="currency-toooltip"
          data-tooltip-place="bottom"
        >
          {total} country
        </span>{" "}
        with this currency
      </p>
      <Tooltip id="currency-toooltip">
        {currency.map((curr, index) => (
          <li
            key={`listCurrency-${index}`}
            className="list-none text-white font-normal text-sm leading-small"
          >
            {curr.name}
          </li>
        ))}
      </Tooltip>
    </div>
  );
};

export default CountryCurrency;
