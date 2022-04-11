import { ListItem } from "../ListItem/ListItem";

import "./NumberList.css";

export const NumberList = ({ numbersArray }) => {
  return (
    <>
      <div className="title-container">
        <h1 className="number-list--title">BINGO SHEET</h1>
      </div>
      <div className="number-list">
        {numbersArray.map((number, index) => (
          <ListItem key={index} number={number} />
        ))}
      </div>
    </>
  );
};
