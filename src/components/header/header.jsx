import React from "react";
import Button from "../button/button";
import { useTelegram } from "../../hooks/useTelegram";
import './header.css';

const Header = ({cartPrice}) => {
    const {user, onClose} = useTelegram()


    return (
        <div className={'header'}>
         <Button onClick={onClose}>Закрыть `${cartPrice}`</Button>
         <span className={'username'}>
           Корзина: {cartPrice}
         </span>
        </div>
    );
};

export default Header;