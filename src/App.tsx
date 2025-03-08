import { Routes, Route } from "react-router-dom";
import ListItem from "./components/ListItem";
import Novo from "./pages/Novo";  
import Clientes from "./pages/Clientes";
import Login from "./pages/Login";

function App() {
    const items = [
        { text: 'Novo', href: '/novo' },
        { text: 'Clientes', href: '/clientes' },
        { text: 'Sair', href: '/login' },
    ];

    return (
        <>
            <h2 className="title">Menu</h2>
            <ListItem items={items} />
            <Routes>
                <Route path="/novo" element={<Novo />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
