import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";  // Import the layout
import Novo from "./pages/novo";
import Clientes from "./pages/clientes";
import Login from "./pages/login";

function App() {
    return (        
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/novo" element={<Novo />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
