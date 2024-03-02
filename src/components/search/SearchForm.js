import "../../App.css";

function SearchForm() {
    return (
        <div className="search__form-wrapper">
            <a className="search__img-link" href="#">
                <img className="search__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Yandex_logo_ru.svg/1280px-Yandex_logo_ru.svg.png" alt="Яндекс" />
            </a>
            <form className="search__form">
                <input className="search__input" type="text" name="search" />
                <button className="search__btn">Найти</button>
            </form>
            <span className="search__example">Найдётся всё. Например, <span className="main__text">фаза луны сегодня</span></span>
        </div>
    );
}

export default SearchForm;