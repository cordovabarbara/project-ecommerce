import React from 'react'
import useAuthentication from '../hooks/useAuthentication'
import '../pages/styles/login.css'

const Login = () => {

    const { loginUser }= useAuthentication ()

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const data = { email, password }
        loginUser(data)
    }


  return (
    <div className='login__ppl'>
    <form className='login__form' onSubmit={handleLogin}>
        <h2 className='login__title'>Login</h2>
        <div className='login__box'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email'></input>
        </div>

    <div>
        <label htmlFor="password">Password</label>
        <input type="password" id='password'></input>
        </div>
    <button> Log in</button>
    </form>
    </div>
  )
}

export default Login