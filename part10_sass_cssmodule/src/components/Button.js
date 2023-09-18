import React from "react";
import './style/Sass_sample.scss'


function Button({ children }) {
    return (
        <div>
            <button className="Button">{children}</button>
        </div>
    );
}

export default Button