import React from 'react';
import { useUser } from '../api/index';

export const Home = () => {
  const { data } = useUser();

  return (
    <div>
      <h2>Home</h2>
      <p>Hello there</p>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  )
}