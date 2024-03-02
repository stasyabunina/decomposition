import "../App.css";
import Link from "./Link";

function CardItem(props) {
    return (
        <li className={props.className}>
            <Link {...props} />
        </li>
    );
}

export default CardItem;