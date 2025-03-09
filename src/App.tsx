import { Routes, Route } from "react-router-dom";
import ListItem from "./components/ListItem";
import Novo from "./pages/novo";  
import Clientes from "./pages/clientes";
import Login from "./pages/login";

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
