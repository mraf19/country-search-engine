import { useDispatch } from "react-redux";
import Suggestions from "../components/parts/Suggestions";
import { fetchCountries } from "../features/country/countrySlice";
import { useEffect, useState } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setDisplay(false);
    return setDisplay(false);
  }, []);

  const onKeyUpAction = (e) => {
    if (e.target.value.length !== 0) {
      dispatch(fetchCountries(e.target.value));
      setDisplay(true);
    }
    if (e.target.value.length === 0) {
      setDisplay(false);
    }
  };

  return (
    <div className="w-3/4 mx-auto mt-20 flex flex-col items-center justify-center">
      <h1 className="mb-[10px] text-7xl font-bold leading-header">Country</h1>
      <input
        type="text"
        className="w-full mb-[10px] px-7 py-5 outline-none leading-regular border-charcoal border-[0.5px] rounded-[10px] placeholder:leading-regular focus:border-purple focus:border-[3px] focus:rounded-lg"
        placeholder="Type any country name"
        onKeyUp={(e) => {
          onKeyUpAction(e);
        }}
      />
      {display && <Suggestions />}
    </div>
  );
};

export default HomePage;
