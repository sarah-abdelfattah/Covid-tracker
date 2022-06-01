import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useUserTest } from '../api';

export const Home = () => {
  const { user } = useAuth0();
  const { data } = useUserTest();
  console.log("🚀 ~ file: home.jsx ~ line 8 ~ Home ~ data", data);

  return (
    <div>
      <h2>Home</h2>
      <p>Hello there</p>
      <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  )
}