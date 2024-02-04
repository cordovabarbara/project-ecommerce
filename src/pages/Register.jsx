import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication'
import defaultValues from '../utils/defaultValues'
import '../pages/styles/register.css'

const Register = () => {


const { register, handleSubmit, reset } = useForm ()

const { createNewUser } = useAuthentication ()


const submit = data => {
    createNewUser(data)
    reset(defaultValues)

}


  return (
    <div className='login__ppl'>
    <form className='register__form' onSubmit={handleSubmit (submit)}>
    <div className='register__box'>
    
    <h2>Si aun no tienes cuenta, Registrate!</h2>
    <div className='register__ttl'>
    <label className='label__register' htmlFor="firstName">Primer Nombre</label>
    <input {...register('firstName')}type="text" id='firstName'></input>
    </div>

    <div  className='register__ttl'>
    <label htmlFor="lastName">Apellido</label>
    <input {...register('lastName')} type="text" id='lastName'></input>
    </div>

    <div  className='register__ttl'>
    <label htmlFor="email">Email</label>
    <input {...register('email')} type="email" id='email'></input>
    </div>

    <div  className='register__ttl'>
    <label htmlFor="password">Password</label>
    <input {...register('password')} type="password" id='password'></input>
    </div>

    <div  className='register__ttl'>
    <label htmlFor="phone">Telefono</label>
    <input {...register('phone')} type="tel" id='phone'></input>
    </div>
    <button className='log__btn regiter__btn'>Registrarse</button>

    </div>
    </form>
    </div>

  )
}

export default Register