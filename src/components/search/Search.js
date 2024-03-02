import "../../App.css";
import SearchForm from "./SearchForm";
import SearchNav from "./SearchNav";

function Search(props) {
    return (
        <div className="main__search search">
            <SearchNav {...props} />
            <SearchForm />
            <div className="search__ad">Здесь должна быть реклама</div>
        </div>
    );
}

export default Search;