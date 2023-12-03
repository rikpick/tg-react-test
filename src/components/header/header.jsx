import React from "react";
import Button from "../button/button";
import { useTelegram } from "../../hooks/useTelegram";
import './header.css';

const Header = (props, cartPrice) => {
    const {user, onClose} = useTelegram()


    return (
        <div className={'header'}>
         <Button onClick={onClose}>Закрыть</Button>
         <span className={'username'}>
            {cartPrice}
         </span>
        </div>
    );
};

export default Header;