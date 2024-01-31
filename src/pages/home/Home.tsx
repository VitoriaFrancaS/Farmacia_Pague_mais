import './Home.css';
import HomeLg from '../../assets/Home.png'

function Home() {
    return (
        <>
        <div className='bg-green-900 flex justify-center'>
            <div className='container grid grid-cols-2 text-white'>
                <div className='flex flex-col gap-4 items-center justify-center py-4'>
                    <h2 className='text-6x1 font-bold'> Seja bem vinde ao estoque da Pague Mais</h2>
                    <p className='text-x1'>Arrume aqui o estoque dos produtos</p>

                    <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-green-600 py-2 px-4'>Ver Categorias</button>
              </div>
            </div>
                <div className='flex justify-center'>
                    <img src={HomeLg} alt="Logo da farmácia pague mais" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;