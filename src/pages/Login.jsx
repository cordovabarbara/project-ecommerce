
import { useState } from 'react';
import useAuthentication from '../hooks/useAuthentication'
import '../pages/styles/login.css'

const Login = () => {

    const { loginUser }= useAuthentication ()
    const [welcomeMessage, setWelcomeMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const data = { email, password };
    
        try {
          await loginUser(data);
          setWelcomeMessage(`¡Bienvenido de vuelta, ${email}!`);
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
        }
      };
    

  return (
    <div className='login__ppl'>
    <form className='login__form' onSubmit={handleLogin}>
        <h2 className='login__title'>Ingresar</h2>
        <div className='login__prueba'>
        <p>Prueba</p>
        <p>email: usuario1@gmail.com</p>
        <p>password: 654321</p>
        </div>
        <div className='login__box'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email'></input>
        <label htmlFor="password">Password</label>
        <input type="password" id='password'></input>
        </div>
    <button className='log__btn'> Log in</button>
    </form>
    {welcomeMessage && (
        <div className="welcome-message">
          <p>{welcomeMessage}</p>
          </div>
      )}
    </div>
  );
};

export default Login;