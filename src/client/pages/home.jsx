import React from 'react';
import { useUserInfo } from '../api/index';

export const Home = () => {
  const { data } = useUserInfo();

  return (
    <div>
      <h2>Home</h2>
      <p>Hello there</p>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  )
}