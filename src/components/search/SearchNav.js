import "../../App.css";
import SearchNavList from "./SearchNavList";
import SearchNavItem from "./SearchNavItem";
import { v4 as uuidv4 } from 'uuid';

function SearchNav({ items }) {
    return (
        <nav className="search__nav">
            <SearchNavList items={items}>
                {items => items.map((item) =>
                    <SearchNavItem key={uuidv4()}>
                        {item}
                    </SearchNavItem>
                )}
            </SearchNavList>
        </nav>
    );
}

export default SearchNav;