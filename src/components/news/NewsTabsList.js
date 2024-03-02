import "../../App.css";
import Text from "../Text";

function NewsTabsList(props) {
    return (
        <div className="main__tabs-wrapper">
            <ul className="main__tabs">
                {props.children(props.items)}
            </ul>
            <Text text="31 июля, среда 02 32"></Text>
        </div>
    );
}

export default NewsTabsList;