import { Outlet } from "react-router-dom";
import ListItem from "./ListItem";

function Layout() {
    const items = [
        { text: "Novo", href: "/novo" },
        { text: "Clientes", href: "/clientes" },
        { text: "Sair", href: "/login" },
    ];

    return (
        <>
            <h2 className="title">Menu</h2>
            <ListItem items={items} />
            <Outlet /> {/* This is where the routed content will be rendered */}
        </>
    );
}

export default Layout;
