import { useState, useEffect } from "react";
import { getRandomnumber } from "./api/getRandomNumber";

import { NumberList } from "./components/NumberList/NumberList";
import { checkDuplicityNumbers } from "./utils/checkDuplicityNumbers";
//import { getRandomInt } from "./utils/getRandomInt";

export const App = () => {
  const [numbers, setNumbers] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRandomnumber();
        const dataFixed = checkDuplicityNumbers(data);
        setNumbers(dataFixed);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {!numbers && <h1>Loading...</h1>}
      {numbers && <NumberList numbersArray={numbers} />}
    </>
  );
};
