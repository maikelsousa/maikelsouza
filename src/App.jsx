import  "./styles/resete.css";
import { ToastContainer } from "react-toastify";
import { HomePage } from "./pages/HomePage";
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "./components/Header";
import { Rotas } from "./routes/routes";


function App() {
  return (
    <>
      <ToastContainer/>  
          
      <Rotas/>
    </>
  )
}

export default App
