import useQuiosco from "../hooks/useQuiosco";

export default function Categoria({ categoria }) {
    const { handleClickCategoria, categoriaActual } = useQuiosco();
    const { id, icono, nombre } = categoria;

    return (
        <div className={`${categoriaActual.id === id ? "bg-amber-400" : "bg-white"} cursor-pointer flex items-center gap-4 border w-full p-3 hover:bg-amber-400`}>
            <img src={`/img/icono_${icono}.svg`} 
                alt="Imagen Icono"
                className="w-12"
            />
            <button 
                onClick={() => handleClickCategoria(id)} 
                type="button" 
                className="text-lg font-bold cursor-pointer truncate"
            >
                {nombre}
            </button>
        </div>
    );
}
