import { useState } from 'react';
import { webAuth } from '@/client/context';
import { Toast } from '@/client/components';

export const Login = () => {
  const [user, setUser] = useState({ email: 'sarah1999sarah@gmail.com', password: 'Sarah23499' })
  const [showToast, setShowToast] = useState(false)

  const onChangeHandler = (target) => setUser({ ...user, [target.name]: target.value })
  const signup = () => {
    webAuth.signup({
      email: user.email,
      password: user.password,
      connection: import.meta.env.VITE_AUTH_REALM,
    }, function (error, result) {
      if (error) {
        return <Toast success={false} message={error.error_description} />
      }
    })
  }
  const login = () => {
    webAuth.login({
      username: user.email,
      password: user.password,
      realm: import.meta.env.VITE_AUTH_REALM,
      redirectUri: import.meta.env.VITE_LOGIN_URI,
      responseType: import.meta.env.VITE_LOGIN_RESPONSE_TYPE
    }, function (error, result) {
      if (error) {
        <Toast success={false} message={error.error_description} />
      }
    })
  }

  return (
    <div>
      <h2>Log in</h2>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" onChange={(e) => { onChangeHandler(e.target) }}></input><br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" onChange={(e) => { onChangeHandler(e.target) }}></input><br />
      <button onClick={login}>LOG IN!</button>
      <button onClick={signup}>SIGN UP!</button>
    </div>
  )
}