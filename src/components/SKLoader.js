import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function SKLoader() {
  return (
    <div>
      <Skeleton animation={false} width={1000} height={100} />
      <Skeleton animation="wave" width={1000} height={100} />
      <Skeleton animation={false} width={1000} height={100} />
      <Skeleton animation="wave" width={1000} height={100} />
      <Skeleton animation={false} width={1000} height={100} />
      <Skeleton animation="wave" width={1000} height={100} />
      <Skeleton animation={false} width={1000} height={100} />
      <Skeleton animation="wave" width={1000} height={100} />
      <Skeleton animation={false} width={1000} height={100} />
      <Skeleton animation="wave" width={1000} height={100} />
    </div>
  );
}
