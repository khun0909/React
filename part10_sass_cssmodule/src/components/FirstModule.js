import style from "./style/First.module.css";

const FirstModule = () => {
    let isHovered = false;

    return (
        <div className={`${style.wrapper} ${style.h1 && isHovered}`}>
            <h1>FirstModule 영역입니다.  {style.wrapper}</h1>
        </div>
    );
};

export default FirstModule;