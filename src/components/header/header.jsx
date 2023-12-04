import React from "react";
import Button from "../button/button";
import { useTelegram } from "../../hooks/useTelegram";
import './header.css';


const Header = ({cartPrice}) => {
    const {user, onClose} = useTelegram()


    return (
        <div className={'header'}>
         <button className="btn">Чат с менеджером</button>

        </div>
    );
};

export default Header;