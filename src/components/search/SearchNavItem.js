import "../../App.css";

function SearchNavItem(props) {
    const { text, link } = props.children;
    return (
        <li className="search__nav-item">
            <a className="search__link" href={link}>{text}</a>
        </li>
    );
}

export default SearchNavItem;