import { getRandomInt } from "./getRandomInt";
export const checkDuplicityNumbers = (numbersArray, size = 15) => {
  let set = [...new Set(numbersArray)];

  while (set.length < size) {
    set.push(getRandomInt());
    set = [...new Set(set)];
  }

  return set;
};
