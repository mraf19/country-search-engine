import { useDispatch } from "react-redux";
import { getSelectedCountry } from "../../features/country/countrySlice";

const ListItem = ({ text, error, dataCountry }) => {
  const dispatch = useDispatch();

  if (error) {
    return (
      <li className="px-[25px] py-[10px] text-left leading-regular text-red-700">
        Data no Found
      </li>
    );
  }

  return (
    <li
      className="px-[25px] py-[10px] text-left leading-regular hover:bg-charcoal hover:cursor-pointer"
      onClick={() => {
        dispatch(getSelectedCountry(dataCountry));
      }}
    >
      {text}
    </li>
  );
};

export default ListItem;
