import "../../App.css";

function BottomCardList(props) {
    return (
        <ul className={props.className}>
            {props.children(props.items)}
        </ul>
    );
}

export default BottomCardList;