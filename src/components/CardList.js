import "../App.css";

function CardList(props) {
    return (
        <ul className={props.className}>
            {props.children(props.items)}
        </ul>
    );
}

export default CardList;