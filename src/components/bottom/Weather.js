import "../../App.css";
import Title from "../Title";
import noImageSVG from "../../img/no-image.svg";

function Weather({ content }) {
    return (
        <article className="bottom__card">
            <Title {...content} className=" bottom__card-title" />
            <div className="bottom__weather-body">
                <img className="bottom__weather-icon" src={noImageSVG} alt={content.icon} />
                <span className="bottom__weather-degrees">{content.degrees}</span>
                <span className="bottom__weather-time">{content.text}</span>
            </div>
        </article>
    );
}

export default Weather;