import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import Alerta from '../components/Alerta';

export default function Login() {

    const emailRef = createRef();
    const passwordRef = createRef();

    const [errores, setErrores] = useState([]);
    const { login } = useAuth({
        middleware: 'guest',
        url: '/'
    });

    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        login(datos, setErrores);

    }

  return (
    <>
        <h1 className='text-4xl font-black'>Iniciar Sesión</h1>
        <p>Para crear un pedido debes de iniciar sesion</p>

        <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
            <form 
                onSubmit={handleSubmit}
                noValidate
            >

                {errores ? errores.map(error => <Alerta key={error}>{error}</Alerta>) : null}

                <div className='mb-4'>
                    <label 
                        className='text-slate-800' 
                        htmlFor="email"
                        >Email
                    </label>
                    <input 
                        type="email"
                        ref={emailRef}
                        id='email'
                        name='email'
                        placeholder='Tu email'
                        className='mt-2 
                        block p-3
                        w-full 
                        bg-gray-50'
                    />
                </div>

                <div className='mb-4'>
                    <label 
                        className='text-slate-800' 
                        htmlFor="password"
                        >Contraseña
                    </label>
                    <input 
                        type="password"
                        ref={passwordRef}
                        id='password'
                        name='password'
                        placeholder='Tu contraseña'
                        className='mt-2 
                        block p-3
                        w-full 
                        bg-gray-50'
                    />
                </div>

                <input 
                    type="submit"
                    value="Iniciar Sesión"
                    className='
                    bg-indigo-600 
                    hover:bg-indigo-800
                    text-white
                    w-full
                    mt-5
                    p-3
                    uppercase
                    font-bold
                    cursor-pointer
                    ' 
                />
            </form>
        </div>
        <nav className="mt-5">
          <Link to="/auth/register">
            ¿No tienes una cuenta? Crea una
          </Link>
        </nav>
    </>
  )
}
