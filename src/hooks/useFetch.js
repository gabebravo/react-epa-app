import React from 'react';
import axios from 'axios';

const useFetch = url => {
  console.log('called');
  // loading, error & data state
  const [loading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchPost() {
      try {
        // attempt fetch
        const apiData = await axios.get(url).then(res => res.data);
        setData(apiData); // set data
      } catch (error) {
        setError(error); // set error
      } finally {
        // runs last only under try/pass condiiton >> resets loading
        setIsLoading(false);
      }
    }

    // set the loading flag & make api call
    setIsLoading(true);
    fetchPost();
  }, [url]); // only re-render on url change

  return { loading, error, data }; // return state as obj
};

export default useFetch;
