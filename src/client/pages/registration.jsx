import React from 'react';

export const Registration = () => {
  return (
    <div>
      <h2>Registration</h2>
      <label htmlFor="fullName">Full name</label>
      <input type="text" id="fullName" name="fullName"></input><br />
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username"></input><br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email"></input><br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password"></input><br />
    </div>
  )
}