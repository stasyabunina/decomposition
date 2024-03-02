import "../../App.css";

function SearchNavList(props) {
    return (
        <ul className="search__nav-list">
            {props.children(props.items)}
        </ul>
    );
}

export default SearchNavList;