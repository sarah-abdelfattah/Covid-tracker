import React from 'react';

export const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <label for="fullName">Full name</label>
      <input type="text" id="fullName" name="fullName"></input><br />
      <label for="username">Username</label>
      <input type="text" id="username" name="username"></input><br />
      <label for="email">Email</label>
      <input type="email" id="email" name="email"></input><br />
      <label for="password">Password</label>
      <input type="password" id="password" name="password"></input><br />
    </div>
  )
}