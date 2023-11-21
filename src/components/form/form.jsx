import React, { useEffect, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
    const [dost, setDost] = useState('central')


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