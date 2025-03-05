type ListItemProps = {
    items: string[]; // Nome correto da propriedade
};

export function ListItem({ items }: ListItemProps) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default ListItem;
