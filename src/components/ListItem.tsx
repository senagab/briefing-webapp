import { Link } from "react-router-dom";

interface Item {
    text: string;
    href: string;
}

interface ListItemProps {
    items: Item[];
}

function ListItem({ items }: ListItemProps) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <Link to={item.href}>{item.text}</Link>
                </li>
            ))}
        </ul>
    );
}

export default ListItem;
