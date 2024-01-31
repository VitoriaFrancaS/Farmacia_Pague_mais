import { Link } from "react-router-dom";


function NavBar() {
    return (
        <>
        <div className='w-full bg-green-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Pague Mais</div>
           
            <div className='flex gap-4'>
           <Link to='/categorias' className="hover:underline">Categoria</Link>
            <Link to='/cadastroCategorias' className='hover:underline'>Cadastrar Categoriaa</Link>
            </div>
           </div>
        </div>
      
        </>
    )
    
}

export default NavBar;