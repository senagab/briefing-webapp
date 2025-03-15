import ListItem from "../components/ListItem"

const items = [
    { text: 'Cliente 01', href: '/clientes/cliente-01' },
    { text: 'Cliente 02', href: '/clientes/cliente-02' },
    { text: 'Cliente 03', href: '/clientes/cliente-03' },
];

const Clientes = () => {
    return (
        <>
            <h2>Clientes</h2>
            <img src="../assets/return.png" alt="" />
            <ListItem items={items} />
        </>
    )
}

export default Clientes