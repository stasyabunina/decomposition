import "../../App.css";
import BottomCardList from "./BottomCardList";
import BottomCardItem from "./BottomCardItem";
import { v4 as uuidv4 } from 'uuid';

function Cards({ items }) {
    return (
        <BottomCardList items={items} className="bottom__list">
            {items => items.map((item) =>
                <BottomCardItem key={uuidv4()} className="bottom__item">
                    {item}
                </BottomCardItem>
            )}
        </BottomCardList>
    );
}

export default Cards;