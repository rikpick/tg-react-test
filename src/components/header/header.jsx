import React from "react";
import Button from "../button/button";
import { useTelegram } from "../../hooks/useTelegram";
import './header.css';


const Header = ({cartPrice}) => {
    const {user, onClose} = useTelegram()


    return (
        <div className={'header'}>
        <span>Нужна помощь?</span>
        <a className="btn" href="t.me/magic_salesman">Чат с менеджером</a>
        </div>
    );
};

export default Header;