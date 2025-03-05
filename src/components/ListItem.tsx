type ListItemProps = {
    items: { 
        text: string; 
        href: string 
    }[]; // one for each, href and text
};

export function ListItem({ items }: ListItemProps) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <a href={item.href} rel="noopener noreferrer">
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default ListItem;
