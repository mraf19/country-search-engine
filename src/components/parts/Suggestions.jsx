import { useSelector } from "react-redux";
import ListItem from "../elements/ListItem";

const Suggestions = () => {
  const country = useSelector((state) => state.country);

  return (
    <ul
      className={`w-full py-[15px] shadow-suggestions ${
        country.loading && "hidden"
      } rounded-md}`}
    >
      {country.loading !== true && country.countries.length !== 0 ? (
        country.countries.map((country, index) => (
          <ListItem
            key={`suggestion-${index}`}
            text={country.name.common}
            dataCountry={country}
          />
        ))
      ) : country.loading !== true && country.error.length !== 0 ? (
        <ListItem error />
      ) : null}
    </ul>
  );
};

export default Suggestions;
