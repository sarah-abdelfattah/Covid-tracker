import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export const Home = () => {
  const { user } = useAuth0();

  return (
    <div>
      <h2>Home</h2>
      <p>Hello there</p>
      <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  )
}