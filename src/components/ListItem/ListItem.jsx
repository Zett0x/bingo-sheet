import { useState } from "react";
import "./ListItem.css";

export const ListItem = ({ number }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  return (
    <div className={`list-item ${clicked && "clicked"}`} onClick={handleClick}>
      <div className="cross">A</div>
      {number}
    </div>
  );
};
