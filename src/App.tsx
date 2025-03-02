import ListItem from "./components/ListItem"

function App() {
    const items = ['novo', 'clientes', 'sair']
    const numbers = [1, 2, 3, 4, 5];
    const dobro = numbers .map((numbers ) => numbers * 2);
    console.log(dobro);

    return  (
        <>
            <h2>Menu</h2>
            <ListItem text={items.map(item)} />
        </>
    );
}

export default App
