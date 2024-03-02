import "../../App.css";
import Title from "../Title";
import CardList from "../CardList";
import CardItem from "../CardItem";
import { v4 as uuidv4 } from 'uuid';

function BottomCard({ content }) {
    const { list } = content;
    
    return (
        <article className="bottom__card">
            <Title {...content} className=" bottom__card-title" />
            <CardList items={list} className="bottom__card-list">
                {list => list.map((item) =>
                    <CardItem key={uuidv4()} className="bottom__card-item">
                        {item}
                    </CardItem>
                )}
            </CardList>
        </article>
    );
}

export default BottomCard;