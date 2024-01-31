import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../Services/Service";
import CardCategoria from "../CardCategoria/CardCategoria";
import { Dna } from "react-loader-spinner";

function ListaCategoria() {
    const [categoria, setCategoria] = useState<Categoria[]>([]);

    async function buscarCategoria() {
        try {
            await buscar('/categorias', setCategoria);
        } catch (error: any) {
            alert ('Erro para encontrar essa categoria')
        }
        
    }
    useEffect(() => {
        buscarCategoria();
      }, [categoria.length]);
     
      return (
        <>
        {categoria.length === 0 && (
          <Dna
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
        )}
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoria.map((categoria) => (
                  <CardCategoria key={categoria.id} categoria={categoria} />
              ))}
            </div>
          </div>
        </div>
      </>
      );
    }

export default ListaCategoria;