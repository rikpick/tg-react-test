import React from "react";
import './button.css';

const Button = (props) => {
    return (
        <button icon {...props} className={'button ' + props.className}/>
    );
};

export default Button;