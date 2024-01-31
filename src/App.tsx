import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";


function App() {
  return (
    <>
    <NavBar/>
    <div className='min-h-[80vh]'>
    <Home/>
    </div>
    <Footer/>
    </>
 
);
}
export default App;