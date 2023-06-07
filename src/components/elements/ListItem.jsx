const ListItem = ({ text, error }) => {
  if (error) {
    return (
      <li className="px-[25px] py-[10px] text-left leading-regular text-red-700">
        Data no Found
      </li>
    );
  }
  return (
    <li className="px-[25px] py-[10px] text-left leading-regular hover:bg-charcoal hover:cursor-pointer">
      {text}
    </li>
  );
};

export default ListItem;
