import axios from 'axios';

const getTickerPrice = async (tickerSymbol) => {
  let response;

  try {
    response = await axios.get(`https://api.iextrading.com/1.0/stock/${tickerSymbol}/price`);
  }
  catch (err) {
    console.log(err);
  }

  return response;
}

export default getTickerPrice;
