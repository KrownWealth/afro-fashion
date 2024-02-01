import { useEffect, useState } from 'react';

const GetExchangeRate = () => {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.REACT_APP_FX_RATE_API_KEY;
        const response = await fetch('https://api.forexapi.eu/v2/convert?amount=1.0&from=USD&to=NGN&precision=2&format=json', {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'x-api-key': apiKey,
          },
        });

        const responseData = await response.json();
        const rate = responseData.results.NGN;

        setExchangeRate(rate);
      } catch (error) {
        console.error('Error during fetch:', error.message);
      }
    };

    fetchData();
  }, []);

  return exchangeRate;
}

export default GetExchangeRate;