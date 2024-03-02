import "../App.css";
import Title from "./Title";
import noImageSVG from "../img/no-image.svg";

function Card({ content }) {
    const { icon } = content;
    return (
        <article className="main__card">
            {icon && <img className="main__card-img" src={noImageSVG} alt={content.icon} />}
            <Title {...content} className=" main__card-title" />
            <span className="main__card-text">{content.text}</span>
        </article>
    );
}

export default Card;