import "../App.css";

function Title({ title, active, className, link }) {
    return (
        <h2 className={`main__title${ className ? className : "" }`}>
            <a href={link} className={active === false ? "main__title-link main__title-link--unactive" : "main__title-link"}>{title}</a>
        </h2>
    );
}

export default Title;
