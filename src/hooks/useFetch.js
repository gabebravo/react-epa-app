import React from 'react';
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = React.useState({
    loading: true,
    error: false,
    apiResponse: []
  });

  const fetchData = async () => {
    try {
      const data = await axios.get(url);
      setData({ ...data, apiResponse: data });
    } catch {
      setData({ ...data, error: true });
    } finally {
      setData({ ...data, loading: false });
    }
  };

  React.useEffect(() => {
    url && fetchData();
  }, []);

  return data;
}
