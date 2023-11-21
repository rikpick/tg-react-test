import React, { useEffect, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
    const [dost, setDost] = useState('amur')


    const onChangeDost = (e) => {
        setDost(e.target.value)
    }
    


    return (
       <div className={"form"}>
        <h3>Район доставки</h3>
        
        <select value={dost} onChange={onChangeDost} className={'select'}>
            <option value={'amur'}>Амур-Нижнеднепровский</option>
        </select>

       </div>
    );
};

export default Form;