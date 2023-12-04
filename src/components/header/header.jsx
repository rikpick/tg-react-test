import React from "react";
import Button from "../button/button";
import { useTelegram } from "../../hooks/useTelegram";
import './header.css';


const Header = ({cartPrice}) => {
    const {user, onClose} = useTelegram()


    return (
        <div className={'header'}>
          <span>Нужна помощь?</span>
         <a href="tg://resolve?domain=<magic_salesman>"><button className="btn">Чат с менеджером</button></a>
        </div>
    );
};

export default Header;