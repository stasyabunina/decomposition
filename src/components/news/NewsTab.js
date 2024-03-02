import "../../App.css";
import Title from "../Title";

function NewsTab(props) {
    return (
        <li className="main__tab">
            <Title {...props.children} />
        </li>
    );
}

export default NewsTab;