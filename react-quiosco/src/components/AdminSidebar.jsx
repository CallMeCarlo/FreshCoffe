import {Link} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function AdminSidebar() {

    const { logout } = useAuth({middleware: 'auth'})
  return (
    <aside className="md:w-72 h-screen">
        <div className="p-4">
            <img src="/img/logo.svg" 
            alt="logotipo"
            className="w-40" 
            />
        </div>
        <nav className='flex flex-col p-4 text-center'>
            <Link to='/admin' className='font-bold text-lg'> Ordenes </Link>
            <Link to='/admin/productos' className='font-bold text-lg'> Productos </Link>
        </nav>

        <div className='my-5 px-5'>
            <button
                    type='button'
                    onClick={logout}
                    className='
                    bg-red-600 
                    hover:bg-red-800
                    text-white
                    w-full
                    mt-5
                    p-3
                    uppercase
                    font-bold
                    cursor-pointer'
                >
                    Cerrar Sesión
            </button>
        </div>
    </aside>
  )
}
