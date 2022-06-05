import { useState } from 'react';
import { login, signup } from '@/context';

export const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  const [alreadyUser, setAlreadyUser] = useState(true)

  const handleChange = (target) => setUser({ ...user, [target.name]: target.value })

  const changeForm = () => setAlreadyUser(!alreadyUser)

  return (
    <div className='loginContainer'>
      <div>
        <h2>{alreadyUser ? 'Log In' : 'Sign Up'}</h2>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder='Email' onChange={(e) => { handleChange(e.target) }}></input><br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder='Password' onChange={(e) => { handleChange(e.target) }}></input><br />

        {alreadyUser ?
          <button onClick={() => { login(user.email, user.password) }}>LOG IN!</button> :
          <button onClick={() => { signup(user.email, user.password) }} >SIGN UP!</button>
        }

        {alreadyUser ?
          <span>Don't have an account? <u onClick={changeForm} >Sign up</u></span> :
          <span>Already have an account? <u onClick={changeForm} >Login</u></span>
        }

      </div>
    </div>
  )
}