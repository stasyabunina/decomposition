import "../../App.css";
import CardList from "../CardList";
import CardItem from "../CardItem";
import { v4 as uuidv4 } from 'uuid';

function Currency({ items }) {
    return (
        <CardList items={items} className="main__currency">
            {items => items.map((item) =>
                <CardItem key={uuidv4()} className="main__currency-item">
                    {item}
                </CardItem>
            )}
        </CardList>
    );
}

export default Currency;