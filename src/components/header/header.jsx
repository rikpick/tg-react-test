import React from "react";
import Button from "../button/button";
import { useTelegram } from "../../hooks/useTelegram";
import './header.css';
import arrow from "./arrow.png"


const Header = ({cartPrice}) => {
    const {user, onClose} = useTelegram()


    return (
        <div className={'header'}>
        <span>Нужно больше?</span>
        <img className="arrow" src={arrow}/>
        <a href="https://t.me/magic_salesman"><button className="btn">Чат с менеджером</button></a>
        </div>
    );
};

export default Header;