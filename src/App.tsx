import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import ListaCategoria from "./components/Categoria/ListaCategoria/ListaCategoria";
import DeletarCategoria from "./components/Categoria/DeletarCategoria/DeletarCategoria";
import FormularioCategoria from "./components/FormularioCategoria/FormularioCategoria/FormularioCategoria";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <div className='min-h-[80vh]'>
      <Routes>
        <Route path="/categorias" element={< ListaCategoria />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastroCategorias" element={<FormularioCategoria/>} />
        <Route path="/editarCategorias/:id" element={<FormularioCategoria />} />
        <Route path="/deletarCategorias/:id" element={<DeletarCategoria />} />

      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
 
);
}
export default App;