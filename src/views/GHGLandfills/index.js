import React from 'react';
import useFetch from '../../hooks/useFetch';

const GHG_URL =
  'https://enviro.epa.gov/enviro/efservice/HH_LANDFILL_INFO/REPORTING_YEAR/=/2018/rows/0:10/JSON';

export default function GHGLandfills() {
  const { loading, error, data } = useFetch(GHG_URL);
  console.log('loading', loading);
  console.log('error', error);
  console.log('data', data);
  return (
    <div>
      <h4>GHGLandfills</h4>
    </div>
  );
}
