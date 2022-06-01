import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <h2>log out</h2>
      <button onClick={() => logout()}>LOG OUT!</button>
    </div>
  )
}