import React from "react";

import {openNewTab} from '../utils/misc';

import "./Avatar.css";



const Avatar = ({img, children, url}) => {
    return (
        <div className="Avatar">
            <img onClick={openNewTab(url)} className="Avatar__img" src={img} alt="Avatar" />
            {children}
        </div>
    )
}

export default Avatar;