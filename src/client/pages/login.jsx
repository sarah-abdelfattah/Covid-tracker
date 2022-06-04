import { useState } from 'react';
import { webAuth } from '@/client/context';
import { Toast } from '@/client/components';

// TODO: hash the password
export const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  const [alreadyUser, setAlreadyUser] = useState(true)

  const onChangeHandler = (target) => setUser({ ...user, [target.name]: target.value })

  const changeForm = () => setAlreadyUser(!alreadyUser)

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
    <div className='loginContainer'>
      <div>
        <h2>{alreadyUser ? 'Log In' : 'Sign Up'}</h2>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder='Email' onChange={(e) => { onChangeHandler(e.target) }}></input><br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder='Password' onChange={(e) => { onChangeHandler(e.target) }}></input><br />

        {alreadyUser ?
          <button onClick={login}>LOG IN!</button> :
          <button onClick={signup}>SIGN UP!</button>
        }

        {alreadyUser ?
          <span>Don't have an account? <u onClick={changeForm} >Sign up</u></span> :
          <span>Already have an account? <u onClick={changeForm} >Login</u></span>
        }
      </div>
    </div>
  )
}