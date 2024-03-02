import "../App.css";
import Text from "./Text";
import noImageSVG from "../img/no-image.svg";

function Link({ children }) {
    const { icon, text } = children;
    return (
        <a className="main__link" href={children.link}>
            {icon && <img className="main__link-icon" src={noImageSVG} alt={icon} />}
            <h3 className="main__subtitle">{children.title}</h3>
            {text && (<Text text={text} />)}
        </a>
    );
}

export default Link;
