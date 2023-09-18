import style from "./style/Second.module.css";

const SecondModule = () => {
    return (
        <div className={style.wrapper}>
            <h1>SecondModule 영역입니다. {style.wrapper}</h1>
        </div>
    );
};

export default SecondModule;