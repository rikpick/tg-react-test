import React from "react";
import './button.css';
import chat from "./chat-bot.png"

const Button = (props) => {
    return (
        <button href="https://t.me/magic_salesman" {...props} className={'button ' + props.className}><img src={chat}/></button>
    );
};

export default Button;