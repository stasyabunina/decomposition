import "../../App.css";
import NewsTabsList from "./NewsTabsList";
import NewsTab from "./NewsTab";
import CardList from "../CardList";
import CardItem from "../CardItem";
import { v4 as uuidv4 } from 'uuid';

function News({ content }) {
    const { tabs, list } = content;
    return (
        <div className="main__news">
            <NewsTabsList items={tabs}>
                {tabs => tabs.map((tab) =>
                    <NewsTab key={uuidv4()}>
                        {tab}
                    </NewsTab>
                )}
            </NewsTabsList>
            <CardList items={list} className="main__news-list">
                {list => list.map((item) =>
                    <CardItem key={uuidv4()} className="main__news-item">
                        {item}
                    </CardItem>
                )}
            </CardList>
        </div>
    );
}

export default News;