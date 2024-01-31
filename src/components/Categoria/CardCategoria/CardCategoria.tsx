import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria';

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-green-800 text-white font-bold text-2xl'>Nome</header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
            <div className="flex">
                <Link to={`/editarCategorias/${categoria.id}`} className='w-full text-slate-100 bg-green-400 hover:bg-green-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarCategorias/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria;