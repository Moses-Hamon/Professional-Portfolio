import React from "react";
import "./Avatar.css";

const Avatar = ({img, children}) => {
    return (
        <div className="Avatar">
            <img className="Avatar__img" src={img} alt="Avatar" />
            {children}
        </div>
    )
}

export default Avatar;