import React from 'react';
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = React.useState({
    loading: true,
    error: false,
    apiData: []
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = await axios.get(url).then(res => res.data);
        setData(data => ({ ...data, apiData: apiResponse }));
      } catch {
        setData(data => ({ ...data, error: true }));
      } finally {
        setData(data => ({ ...data, loading: false }));
      }
    };

    url && fetchData();
  }, []);

  return data;
}
