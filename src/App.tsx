import ListItem from "./components/ListItem";

function App() {
    const items = [
        { text: 'Novo', href: 'http://localhost:5173/novo'},
        { text: 'Clientes', href: 'http://localhost:5173/clientes' },
        { text: 'Sair', href: 'http://localhost:5173/login' },
    ];

    return (
        <>
            <h2 className="title">Menu</h2>
            <ListItem items={items} />
        </>
    );
}

export default App;
