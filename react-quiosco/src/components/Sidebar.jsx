import useQuiosco from '../hooks/useQuiosco';
import Categoria from './Categoria';
import { useAuth } from '../hooks/useAuth';

export default function Sidebar() {
    const { categorias } = useQuiosco();
    const {logout, user} = useAuth({middleware: 'auth'})

    return (
        <aside className='md:w-72'>
            <div className='p-4'>
                <img className='w-40' src="img/logo.svg" alt="Logo" />
            </div>

            <p className='my-10 text-xl text-center'>Hola: {user?.name}</p>

            <div className='mt-10'>
                {categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </div>

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
                    Cancelar Orden
                </button>
            </div>
        </aside>
    );
}
