import React, { useEffect, useState } from "react";
import './form.css';
import { useTelegram } from "../../hooks/useTelegram";
import { useCallback } from "react";

const Form = ({dost}) => {
    const [dost, setDost] = useState('central')
    const {tg} = useTelegram();




    const onChangeDost = (e) => {
        setDost(e.target.value)
    }
    


    return (
       <div className={"form"}>
        <h3>Район доставки</h3>
        
        <select value={dost} onChange={onChangeDost} className={'select'}>
            <option value={'central'}>Центр</option>
            <option value={'topol'}>Тополь</option>
            <option value={'vokzal'}>Вокзал</option>
        </select>

       </div>
    );
};

export default Form;