import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication'
import defaultValues from '../utils/defaultValues'

const Register = () => {


const { register, handleSubmit, reset } = useForm ()

const { createNewUser } = useAuthentication ()


const submit = data => {
    createNewUser(data)
    reset(defaultValues)

}


  return (
    <form onSubmit={handleSubmit (submit)}>
    <h2>Si aun no tienes cuentas, Registrate</h2>
    <div>
    <label htmlFor="firstName">Primer Nombre</label>
    <input {...register('firstName')}type="text" id='firstName'></input>
    </div>

    <div>
    <label htmlFor="lastName">Apellido</label>
    <input {...register('lastName')} type="text" id='lastName'></input>
    </div>

    <div>
    <label htmlFor="email">Email</label>
    <input {...register('email')} type="email" id='email'></input>
    </div>

    <div>
    <label htmlFor="password">Password</label>
    <input {...register('password')} type="password" id='password'></input>
    </div>

    <div>
    <label htmlFor="phone">Telefono</label>
    <input {...register('phone')} type="tel" id='phone'></input>
    </div>
    <button>Registrarse</button>
    </form>
  )
}

export default Register