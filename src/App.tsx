import ListItem from "./components/ListItem";

function App() {
    const items = ['novo', 'clientes', 'sair'];

    return (
        <>
            <h2>Menu</h2>
            <ListItem items={items} />
        </>
    );
}

export default App;
