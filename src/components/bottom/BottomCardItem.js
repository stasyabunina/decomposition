import "../../App.css";
import Weather from "./Weather"
import Map from "./Map";
import BottomCard from "./BottomCard";

function BottomCardItem(props) {
    const { degrees, list } = props.children;
    return (
        <li className={props.className}>
            {degrees ? <Weather content={props.children} /> : list ? <BottomCard content={props.children} /> : <Map content={props.children} />}
        </li>
    );
}

export default BottomCardItem;