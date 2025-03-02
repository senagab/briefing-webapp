type ListItemProps = {
    text: string;
}

export function ListItem(props: ListItemProps){
    return (
        <ul>
            <li>
                {props.text}
            </li>
            <li>
                {props.text}
            </li>
            <li>
                {props.text}
            </li>
        </ul>
    );
}

export default ListItem