import "./App.css";
import { news, topCard, currency, searchNav, bottomCards } from "./data/data";
import News from "./components/news/News";
import Currency from "./components/currency/Currency";
import Search from "./components/search/Search";
import BottomCards from "./components/bottom/BottomCards";
import WorkCard from "./components/top/WorkCard";

function App() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__wrapper">
          <div className="main__top">
            <div className="main__news-currency">
              <News content={news} />
              <Currency items={currency} />
            </div>
            <div className="main__card-wrapper">
              <WorkCard content={topCard} />
            </div>
          </div>
          <Search items={searchNav} />
          <div className="main__bottom bottom">
            <BottomCards items={bottomCards} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
