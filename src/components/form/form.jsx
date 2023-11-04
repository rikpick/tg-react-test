import React, { useEffect, useState } from "react";
import './form.css';
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [dost, setDost] = useState('central')
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Купить'
        })

    }, [])

    useEffect(() => {
        if(!name || !tel) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();  
        }

    }, [name, tel])

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeTel = (e) => {
        setTel(e.target.value)
    }

    const onChangeDost = (e) => {
        setDost(e.target.value)
    }
    


    return (
       <div className={"form"}>
        <h3>Введите данные</h3>
        <input 
        className={'input'} 
        type="text" 
        placeholder={"Имя"}
        value={name}
        onChange={onChangeName}>
        </input>

        <input 
        className={'input'} 
        type="text" 
        placeholder={"Телефон"}
        value={tel}
        onChange={onChangeTel}>
        </input>

        <select value={dost} onChange={onChangeDost} className={'select'}>
            <option value={'central'}>Центр</option>
            <option value={'topol'}>Тополь</option>
            <option value={'vokzal'}>Вокзал</option>
        </select>

       </div>
    );
};

export default Form;