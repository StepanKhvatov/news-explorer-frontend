export const getNews = async ({ searchKeyword, date }) => {
  const {
    pastDay,
    day,
    month,
    pastMonth,
    year,
    pastYear
  } = date;
  console.log(month, pastMonth)
  const API_KEY = '9a52c9614e0d47cb8e0a2c3c8f67fc01';
  return await fetch(`https://newsapi.org/v2/everything?q=${searchKeyword}&from=${pastYear}-${pastMonth}-${pastDay}&to=${year}-${month}-${day}&apiKey=${API_KEY}&pageSize=100`).then((res) => {
    return res.json();
  }).catch((error) => {
    console.log(error);
  })
}