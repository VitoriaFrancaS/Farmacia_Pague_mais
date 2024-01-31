function NavBar() {
    return (
        <>
             <div className='w-full bg-green-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Pague Mais</div>
           
            <div className='flex gap-4'>
              <div className='hover:underline'>Categoria</div>
              <div className='hover:underline'>Cadastrar Categorias</div>
             
            </div>
            </div>
            </div>
      
        </>
    )
    
}

export default NavBar;