export const getRandomnumber = async (min = 1, max = 90, count = 15) => {
  const res = await fetch(
    `http://www.randomnumberapi.com/api/v1.0/randomredditnumber?min=${min}&max=${max}&count=${count}`
  );
  const data = await res.json();
  return data;
};
