import React from "react";
import "./button.css";

function Button(link, content) {
    return (
        <a href={link}>
            <button className="btn">
                {content}
            </button>
        </a>
    );
}

export default Button;