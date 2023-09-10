const key = '7e65b57f08464ebbb5400123231009';

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  return data;
};

export default fetchData;
