import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useUser } from '../api/index';

export const Home = () => {
  const { data } = useUser();
  console.log("🚀 ~ file: home.jsx ~ line 7 ~ Home ~ data", data);

  return (
    <div>
      <h2>Home</h2>
      <p>Hello there</p>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  )
}